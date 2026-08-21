// Sends a Web Push notification to every stored subscription.
//
// Manually triggered by the site owner after publishing (this site's content
// is git-based - MDX files built into the site, not a live CMS - so there's
// no database row whose insert could trigger this automatically). Call it
// after a deploy goes out:
//
//   curl -X POST https://<project-ref>.supabase.co/functions/v1/send-notification \
//     -H "x-send-secret: <SEND_NOTIFICATION_SECRET>" \
//     -H "content-type: application/json" \
//     -d '{"title":"New guide: Bearded Dragon Care","body":"Cost, handling, health, and tank setup.","url":"/guides/bearded-dragon/"}'
//
// See supabase/push_notifications.sql for the table this reads and the
// secrets this function needs set before it'll run.

import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const VAPID_PUBLIC_KEY = Deno.env.get("VAPID_PUBLIC_KEY")!;
const VAPID_PRIVATE_KEY = Deno.env.get("VAPID_PRIVATE_KEY")!;
const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:hello@beastlyfacts.com";
const SEND_SECRET = Deno.env.get("SEND_NOTIFICATION_SECRET");

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

// Service role key: available to every edge function automatically, nothing
// to configure. Needed here because push_subscriptions has no select policy
// for anon/authenticated (see push_notifications.sql) - only this function
// reads the table, deliberately bypassing RLS rather than widening it.
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  if (!SEND_SECRET || req.headers.get("x-send-secret") !== SEND_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, body, url = "/" } = await req.json().catch(() => ({}));
  if (!title || !body) {
    return new Response(JSON.stringify({ error: "title and body are required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const { data: subs, error } = await supabase
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  const payload = JSON.stringify({ title, body, url });
  let sent = 0;
  const deadIds: string[] = [];

  await Promise.all(
    (subs ?? []).map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload,
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

  return new Response(
    JSON.stringify({ sent, total: subs?.length ?? 0, removed: deadIds.length }),
    { headers: { "content-type": "application/json" } },
  );
});
