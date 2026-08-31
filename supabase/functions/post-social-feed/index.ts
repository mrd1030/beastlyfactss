// Posts due entries from beastlyfacts.com/social-feed-queue.json into
// public.social_posts, so the on-site feed (/feed/) drips one or two posts a
// day instead of a weekly dump. Called daily by pg_cron at 15:00 UTC (see
// supabase/social_feed_automation.sql), and safe to call any number of times:
// every queue entry carries an id, the insert skips ids already posted
// (social_posts.queue_id is unique), and the date gate means a call can never
// publish an entry before its day arrives.
//
// Date gating uses America/New_York so post_date means "that calendar day,
// site time", matching hasReachedPublishDate in public/_worker.js and the
// article release gate in the app.
//
// Secrets: POST_FEED_SECRET must be set on this function (Dashboard -> Edge
// Functions -> post-social-feed -> Secrets). The caller sends it in the
// x-post-secret header; the cron job reads the same value from vault. The
// service role key and project URL are injected automatically.
import { createClient } from "npm:@supabase/supabase-js@2";

const SITE = "https://beastlyfacts.com";
const SITE_TIMEZONE = "America/New_York";

// en-CA formats as YYYY-MM-DD, which is what post_date uses and what string
// comparison needs.
function todayInSiteZone(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: SITE_TIMEZONE }).format(new Date());
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

const absolute = (url: string) => (url.startsWith("/") ? `${SITE}${url}` : url);

Deno.serve(async (req) => {
  const secret = Deno.env.get("POST_FEED_SECRET");
  if (!secret || req.headers.get("x-post-secret") !== secret) {
    return json({ error: "unauthorized" }, 401);
  }

  const res = await fetch(`${SITE}/social-feed-queue.json`, {
    headers: { "cache-control": "no-cache" },
  });
  if (!res.ok) return json({ error: `queue fetch failed: ${res.status}` }, 502);
  const queue = await res.json();

  const today = todayInSiteZone();
  const due = (queue.pending || []).filter(
    (p: { id?: string; post_date?: string; media_type?: string; media_url?: string }) =>
      p.id && p.media_type && p.media_url && p.post_date && p.post_date <= today,
  );
  if (!due.length) return json({ posted: 0, date: today });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: existing, error: readError } = await supabase
    .from("social_posts")
    .select("queue_id")
    .in("queue_id", due.map((p: { id: string }) => p.id));
  if (readError) return json({ error: readError.message }, 500);

  const alreadyPosted = new Set((existing || []).map((r: { queue_id: string }) => r.queue_id));
  const rows = due
    .filter((p: { id: string }) => !alreadyPosted.has(p.id))
    .map((p: { id: string; media_type: string; media_url: string; caption?: string; link_url?: string }) => ({
      queue_id: p.id,
      media_type: p.media_type,
      media_url: absolute(p.media_url),
      caption: p.caption || "",
      link_url: p.link_url ? absolute(p.link_url) : null,
    }));
  if (!rows.length) return json({ posted: 0, skipped: due.length, date: today });

  const { error: insertError } = await supabase.from("social_posts").insert(rows);
  if (insertError) return json({ error: insertError.message }, 500);

  return json({ posted: rows.length, skipped: due.length - rows.length, date: today });
});
