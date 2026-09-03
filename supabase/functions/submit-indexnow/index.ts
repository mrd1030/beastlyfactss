// Announces new and changed pages to IndexNow (api.indexnow.org shares
// submissions with Bing, DuckDuckGo, Yandex, Seznam, Naver - submitting to
// multiple endpoints is redundant). Fired daily by pg_cron; see
// supabase/indexnow_automation.sql.
//
// This replaces a standalone Cloudflare Worker that fetched the whole
// sitemap and resubmitted every URL to two endpoints every day, which
// IndexNow rate-limits as spam - it 429'd for two straight weeks. The fix
// is a diff: public.indexnow_urls remembers what was already announced
// (url + lastmod), so a normal day submits the handful of pages the latest
// deploys added, and a quiet day submits nothing at all.
import { createClient } from "npm:@supabase/supabase-js@2";

const SITEMAP_URL = "https://beastlyfacts.com/sitemap.xml";
const HOST = "beastlyfacts.com";
// The key pair lives in public/ and is served at the key location below;
// IndexNow verifies ownership by fetching it.
const KEY = "5e1ddc33-7c77-4b68-8932-387fff51d6b6";
const KEY_LOCATION = `https://beastlyfacts.com/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

Deno.serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Caller auth. The shared secret lives in vault and is read through a
  // service-role-only rpc, so there is no dashboard secret to configure and
  // the cron job and this check can never drift apart.
  const { data: secret, error: secretErr } = await supabase.rpc("get_indexnow_secret");
  if (secretErr || !secret) return json({ error: "secret unavailable" }, 500);
  if (req.headers.get("x-indexnow-secret") !== secret) return json({ error: "forbidden" }, 403);

  // 1. The live sitemap: url -> lastmod ("" when the entry has none).
  const res = await fetch(SITEMAP_URL, {
    headers: { "user-agent": "beastlyfacts-indexnow/2.0" },
  });
  if (!res.ok) return json({ error: `sitemap ${res.status}` }, 502);
  const xml = await res.text();
  const live = new Map<string, string>();
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>(.*?)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;
    live.set(loc, m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.trim() ?? "");
  }
  if (live.size === 0) return json({ error: "empty sitemap" }, 502);

  // 2. What has already been announced.
  const { data: rows, error: rowsErr } = await supabase
    .from("indexnow_urls")
    .select("url, lastmod")
    .limit(20000);
  if (rowsErr) return json({ error: rowsErr.message }, 500);
  const seen = new Map((rows ?? []).map((r) => [r.url, r.lastmod ?? ""]));

  // 3. Diff. Only new URLs and changed lastmods are announced.
  const toSubmit = [...live]
    .filter(([url, mod]) => !seen.has(url) || seen.get(url) !== mod)
    .map(([url]) => url);
  // Prune state for URLs that left the sitemap, so a page that comes back
  // later gets re-announced instead of being remembered forever.
  const gone = [...seen.keys()].filter((url) => !live.has(url));
  if (gone.length) await supabase.from("indexnow_urls").delete().in("url", gone);

  if (toSubmit.length === 0) {
    return json({ submitted: 0, tracked: seen.size - gone.length });
  }

  const batch = toSubmit.slice(0, 10000); // API cap; any overflow goes tomorrow
  const submit = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
  });
  const bodyText = await submit.text().catch(() => "");

  // State advances only on acceptance: a 429 or outage today means the same
  // diff is retried on tomorrow's firing, nothing is lost.
  if (submit.status !== 200 && submit.status !== 202) {
    return json(
      { error: `indexnow ${submit.status}`, detail: bodyText.slice(0, 300), pending: batch.length },
      502,
    );
  }

  const { error: upsertErr } = await supabase.from("indexnow_urls").upsert(
    batch.map((url) => ({
      url,
      lastmod: live.get(url) ?? "",
      submitted_at: new Date().toISOString(),
    })),
  );
  if (upsertErr) return json({ error: upsertErr.message }, 500);

  return json({ submitted: batch.length, status: submit.status });
});
