// Sends a Web Push notification to every stored subscription.
//
// Two ways in:
//
//   1. Scheduled. pg_cron calls this at 9am ET with {"mode":"daily"} and the
//      function does the rest: it reads the live article index off the site,
//      finds the posts whose date is today in SITE_TIMEZONE, and builds the
//      title and body from them. Every article ships deployed and crawlable,
//      so a future frontmatter date is the only thing holding one out of the
//      blog list and the feed (see src/lib/utils/date.js and public/_worker.js).
//      That means nothing happens at publish time to hang a send off; the
//      schedule watches the dates instead. See supabase/push_notifications.sql
//      for the cron entries.
//
//   2. By hand, for anything off-schedule - pass an explicit title and body and
//      it sends immediately, no date logic and no ledger:
//
//        curl -X POST https://<project-ref>.supabase.co/functions/v1/send-notification \
//          -H "x-send-secret: <SEND_NOTIFICATION_SECRET>" \
//          -H "content-type: application/json" \
//          -d '{"title":"Site news","body":"Something worth a ping.","url":"/blog/"}'
//
// The daily path sends at most once per calendar day. It claims the day in
// notification_sends before sending, so a retry, a second cron entry, or a
// hand-run of the same mode all no-op instead of buzzing the same phone twice.

import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const VAPID_PUBLIC_KEY = Deno.env.get("VAPID_PUBLIC_KEY")!;
const VAPID_PRIVATE_KEY = Deno.env.get("VAPID_PRIVATE_KEY")!;
const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:hello@beastlyfacts.com";
const SEND_SECRET = Deno.env.get("SEND_NOTIFICATION_SECRET");

// Same zone as src/lib/utils/date.js and public/_worker.js: "the date has
// arrived" has to mean one thing across the sort, the feed, and this send.
const SITE_TIMEZONE = "America/New_York";
const SEND_HOUR_ET = 9;
const ARTICLES_URL = "https://beastlyfacts.com/articles.json";
const BODY_LIMIT = 140;

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

// Service role key: available to every edge function automatically, nothing
// to configure. Needed here because push_subscriptions has no select policy
// for anon/authenticated (see push_notifications.sql) - only this function
// reads the table, deliberately bypassing RLS rather than widening it.
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const json = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json" },
  });

// 'en-CA' formats as ISO, so this is directly comparable against a
// frontmatter date string.
function siteToday(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: SITE_TIMEZONE });
}

function siteHour(): number {
  return Number(
    new Date().toLocaleString("en-US", {
      timeZone: SITE_TIMEZONE,
      hour: "2-digit",
      hour12: false,
    }),
  );
}

function truncate(text: string, limit = BODY_LIMIT): string {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:]$/, "")}...`;
}

type Article = { slug: string; title: string; excerpt?: string; date?: string };

// The deployed index rather than anything in the repo: it is what the site is
// actually serving right now, so a notification can never announce an article
// that has not shipped. `chronicles` is deliberately ignored - the short
// stories live in their own section and are not what this is announcing.
async function articlesPublishedOn(day: string): Promise<Article[]> {
  const res = await fetch(ARTICLES_URL, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`articles.json returned ${res.status}`);
  const { articles = [] } = await res.json();
  return (articles as Article[]).filter((a) => String(a.date || "").slice(0, 10) === day);
}

// One article gets its own headline, which is the point of sending this rather
// than a generic ping. Several on one day collapse into a count, because
// stacking three notifications to say the same thing is how people turn
// notifications off.
function buildPayload(posts: Article[]) {
  if (posts.length === 1) {
    const [post] = posts;
    return {
      title: post.title,
      body: truncate(post.excerpt || "") || "New on BeastlyFacts. Tap to read it.",
      url: `/blog/${post.slug}/`,
    };
  }
  return {
    title: `${posts.length} new articles on BeastlyFacts`,
    body: truncate(posts.map((p) => p.title).join(", ")),
    url: "/blog/",
  };
}

async function pushToEveryone(payload: { title: string; body: string; url: string }) {
  const { data: subs, error } = await supabase
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth");
  if (error) throw new Error(error.message);

  const body = JSON.stringify(payload);
  let sent = 0;
  const deadIds: string[] = [];

  await Promise.all(
    (subs ?? []).map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          body,
        );
        sent++;
      } catch (err) {
        // The push service itself reports 404/410 when a subscription is
        // gone for good (uninstalled, permission revoked, endpoint expired)
        // - clean those up so future sends stop paying for dead endpoints.
        // Anything else (a transient 5xx, a network blip) is left alone
        // rather than deleting a subscription that might still be good.
        const status = (err as { statusCode?: number })?.statusCode;
        if (status === 404 || status === 410) deadIds.push(sub.id);
      }
    }),
  );

  if (deadIds.length > 0) {
    await supabase.from("push_subscriptions").delete().in("id", deadIds);
  }

  return { sent, total: subs?.length ?? 0, removed: deadIds.length };
}

async function runDaily(force: boolean) {
  const today = siteToday();
  const hour = siteHour();

  // Two cron entries cover both halves of the year (13:00 and 14:00 UTC), and
  // exactly one of them lands on 9am ET depending on daylight saving. The
  // other is a no-op here rather than a second notification.
  if (!force && hour !== SEND_HOUR_ET) {
    return json({ skipped: `hour ${hour} ET is not ${SEND_HOUR_ET}`, date: today });
  }

  const posts = await articlesPublishedOn(today);
  if (posts.length === 0) {
    return json({ skipped: "no articles dated today", date: today });
  }

  // Claim the day BEFORE sending. Losing the race means another run is already
  // sending this exact payload, so there is nothing to do; claiming afterwards
  // would leave a window where both runs send.
  const { data: claim, error: claimError } = await supabase
    .from("notification_sends")
    .insert({ send_date: today, article_count: posts.length })
    .select("send_date")
    .maybeSingle();

  if (claimError) {
    // 23505 = unique_violation, i.e. today is already claimed. That is the
    // dedupe working, not a failure.
    if (claimError.code === "23505") {
      return json({ skipped: "already sent today", date: today });
    }
    throw new Error(claimError.message);
  }

  const payload = buildPayload(posts);
  try {
    const result = await pushToEveryone(payload);
    return json({ ...result, date: today, claimed: claim?.send_date, payload });
  } catch (err) {
    // Nothing went out, so release the day rather than burning it - the second
    // cron entry or a hand-run can still deliver this morning's notification.
    await supabase.from("notification_sends").delete().eq("send_date", today);
    throw err;
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  if (!SEND_SECRET || req.headers.get("x-send-secret") !== SEND_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const input = await req.json().catch(() => ({}));

  try {
    if (input.mode === "daily") {
      // `force` exists so the daily path can be exercised by hand outside the
      // 9am window; it skips the clock check, never the ledger.
      return await runDaily(input.force === true);
    }

    const { title, body, url = "/" } = input;
    if (!title || !body) {
      return json({ error: "title and body are required (or pass mode: 'daily')" }, 400);
    }
    return json(await pushToEveryone({ title, body, url }));
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
