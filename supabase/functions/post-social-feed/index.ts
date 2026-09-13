// Posts to the on-site feed (/feed/) once a day, so it drips instead of
// sitting still. Called daily by pg_cron at 15:00 UTC (see
// supabase/social_feed_automation.sql), and safe to call any number of times.
//
// Two sources, in order:
//   1. beastlyfacts.com/social-feed-queue.json, the curated week written by the
//      weekly refill Routine. Article promos and Chronicles live here.
//   2. If the queue has nothing due that has not already been posted, one fact
//      from beastlyfacts.com/facts.json that has its own photo and has never
//      been posted. This is the floor: the feed keeps moving even when the
//      refill fails, which it did silently from 2026-09-08 to 2026-09-12.
//
// Nothing is ever posted twice. Every row carries a queue_id (unique), and the
// fact path additionally skips any photo already used by a queue post, so a
// fact promoted through the queue is not repeated as a fallback later.
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

// Mirrors src/lib/utils/slugify.js, including the "&"/"and" rule, because the
// fact page route is /facts/<slugified title>/ and a mismatch is a dead link.
function slugify(text: string): string {
  return (text || "")
    .toString()
    .toLowerCase()
    .replace(/\s*&\s*|\s+and\s+/g, "-and-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// A hashtag per source of meaning: the animal, its category, the site. Two to
// four tags is the house rule, so three is the safe middle.
function hashtagsFor(animal: string, category: string): string {
  const tag = (s: string) =>
    "#" +
    (s || "")
      .replace(/&/g, "and")
      .split(/[^A-Za-z0-9]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("");
  return [tag(animal), tag(category), "#BeastlyFacts"].filter((t) => t.length > 1).join(" ");
}

type Fact = {
  id: number;
  title?: string;
  animal?: string;
  category?: string;
  fact?: string;
  photo?: string;
};

Deno.serve(async (req) => {
  const secret = Deno.env.get("POST_FEED_SECRET");
  if (!secret || req.headers.get("x-post-secret") !== secret) {
    return json({ error: "unauthorized" }, 401);
  }

  const today = todayInSiteZone();
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Everything already on the feed, for both dedupe paths.
  const { data: postedRows, error: postedError } = await supabase
    .from("social_posts")
    .select("queue_id, media_url, created_at")
    .order("created_at", { ascending: false });
  if (postedError) return json({ error: postedError.message }, 500);
  const postedIds = new Set((postedRows || []).map((r) => r.queue_id).filter(Boolean));
  const postedMedia = new Set((postedRows || []).map((r) => r.media_url).filter(Boolean));

  // 1. The curated queue.
  const queueRes = await fetch(`${SITE}/social-feed-queue.json`, {
    headers: { "cache-control": "no-cache" },
  });
  if (!queueRes.ok) return json({ error: `queue fetch failed: ${queueRes.status}` }, 502);
  const queue = await queueRes.json();
  const pending = (queue.pending || []) as Array<{
    id?: string;
    post_date?: string;
    media_type?: string;
    media_url?: string;
    caption?: string;
    link_url?: string;
  }>;

  const queueRows = pending
    .filter((p) => p.id && p.media_type && p.media_url && p.post_date && p.post_date <= today)
    .filter((p) => !postedIds.has(p.id!))
    .map((p) => ({
      queue_id: p.id!,
      media_type: p.media_type!,
      media_url: absolute(p.media_url!),
      caption: p.caption || "",
      link_url: p.link_url ? absolute(p.link_url) : null,
    }));

  // Future-dated entries are the honest measure of whether the queue is alive.
  const queueFuture = pending.filter((p) => p.post_date && p.post_date > today).length;

  if (queueRows.length) {
    const { error } = await supabase.from("social_posts").insert(queueRows);
    if (error) return json({ error: error.message }, 500);
    return json({ posted: queueRows.length, source: "queue", queue_future: queueFuture, date: today });
  }

  // 2. The fact floor.
  const factsRes = await fetch(`${SITE}/facts.json`, { headers: { "cache-control": "no-cache" } });
  if (!factsRes.ok) return json({ error: `facts fetch failed: ${factsRes.status}` }, 502);
  const factsDoc = await factsRes.json();

  const all = (factsDoc.facts || []) as Fact[];
  const candidates = all
    .filter((f) => f && f.id && f.photo && f.fact && f.title)
    .filter((f) => !postedIds.has(`fact-${f.id}`) && !postedMedia.has(absolute(f.photo!)))
    .sort((a, b) => a.id - b.id);

  if (!candidates.length) {
    return json({
      posted: 0,
      source: "none",
      reason: "queue empty and every photographed fact has been posted",
      queue_future: queueFuture,
      date: today,
    });
  }

  // Oldest unused id first, except never the same animal as the last three
  // fact posts. Without this the feed opens with two dog facts back to back,
  // because ids cluster by animal. Falls back to plain oldest if that filter
  // empties the list.
  const byId = new Map(all.map((f) => [f.id, f]));
  const recentAnimals = new Set(
    (postedRows || [])
      .map((r) => r.queue_id)
      .filter((id): id is string => !!id && id.startsWith("fact-"))
      .slice(0, 3)
      .map((id) => byId.get(Number(id.slice(5)))?.animal)
      .filter(Boolean) as string[],
  );
  const spaced = candidates.filter((f) => !recentAnimals.has(f.animal || ""));
  const pick = (spaced.length ? spaced : candidates)[0];
  const { error: factError } = await supabase.from("social_posts").insert({
    queue_id: `fact-${pick.id}`,
    media_type: "image",
    media_url: absolute(pick.photo!),
    caption: `${pick.fact!.trim()}\n\n${hashtagsFor(pick.animal || "", pick.category || "")}`,
    link_url: `${SITE}/facts/${slugify(pick.title!)}/`,
  });
  if (factError) return json({ error: factError.message }, 500);

  return json({
    posted: 1,
    source: "fact",
    fact_id: pick.id,
    facts_remaining: candidates.length - 1,
    queue_future: queueFuture,
    date: today,
  });
});
