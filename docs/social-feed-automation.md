# On-site social feed automation

The `/feed/` page reads `public.social_posts` in Supabase. Three pieces keep it
filled without manual posting:

1. **The queue**: `public/social-feed-queue.json`, deployed with the site. Each
   entry: `id` (dedupe key, never reuse), `post_date` (YYYY-MM-DD, ET),
   `media_type` (`image`/`video`), `media_url`, `caption`, `link_url`. Paths are
   site-relative; the poster makes them absolute.
2. **The daily poster**: edge function `post-social-feed`
   (supabase/functions/post-social-feed/index.ts), called by pg_cron at 15:00
   UTC daily (supabase/social_feed_automation.sql). It posts from two sources,
   in order:
   - anything in the queue whose date has arrived and that has not been posted;
   - failing that, **one fact** from `facts.json` that has its own photo and has
     never been posted, oldest id first.

   So the feed moves every day whether or not anyone refills the queue. Nothing
   posts twice: `social_posts.queue_id` is unique (`fact-<id>` for the fact
   path), and the fact path also skips any photo already used by a queue post,
   so a fact promoted through the queue is never repeated as a fallback.
3. **The weekly refill**: a scheduled Routine that rewrites the queue each week
   with the coming week's posts and pushes to main (a real deploy, the queue
   ships with the site). Its prompt lives below so it can be recreated. It is
   now an enhancement rather than a dependency: when it fails the fact floor
   carries the feed.

### Why the fact floor exists

The refill Routine fired on Sunday 2026-09-06, hung, never committed, and
reported SUCCEEDED anyway, because a Routine's status records that the session
was delivered rather than that it did its job. The queue's newest entry was
2026-09-07, the poster went on returning `posted: 0` every day, pg_cron logged
success every day, and the feed sat still for five days with nothing anywhere
raising a hand. Read `queue_future` in the poster's response to see whether the
queue is actually alive: it counts entries dated after today.

There are 178 facts with their own photo, so at one a day the floor alone
carries roughly six months before it runs out, and the response reports
`facts_remaining` so the number is visible.

Caption rules are docs/RULES.md plus the social voice: hook first, no URLs in
captions (`link_url` carries the page), 2 to 4 #hashtags at the end, no em or
en dashes, US spelling. Facts must have a real photo in FACT_IMAGES; the
authored `funFacts` fallbacks and photo-less facts don't qualify.

Manual posts through /composer/ are unaffected: they have no `queue_id` and the
automation never touches them.

## Why a run can stall before it starts

Both agent-minted Routines in this project (this one and the biweekly quiz)
were created from inside a Claude session rather than through the API, so their
session config carries no `sources` and no `allowed_tools`. They run in
permission mode `auto` with nothing pre-approved, which means the first git
command that looks like it changes state stops for a human who is not there.
This refill died that way on Sunday 2026-09-13, blocked on `git clone`, and the
quiz Routine died the same way the next day on `git config credential.helper`.
The run status reads ABANDONED and the queue simply stopped moving.

Two things keep it from happening again:

1. The prompt below tells the Routine the repo is already checked out and to
   stay away from `git clone` and `git config` entirely, and to name the
   blocked command in its output rather than ending silently.
2. `.claude/settings.json` needs a `permissions.allow` list covering the git
   and npx commands these Routines run, so nothing gets to the prompt stage.

The durable fix is to recreate both Routines with a session config like the
chronicles and weekly-facts ones, which pass `allowed_tools` and attach the
repo as a source. Those two have never stalled.

## Weekly refill Routine prompt

> You are the weekly refill for the beastlyfacts.com on-site social feed. Your
> only job is to rewrite the `pending` array in `public/social-feed-queue.json`
> (repo mrd1030/beastlyfactss, main branch) with the coming 7 days of posts,
> then commit and push.
>
> ENVIRONMENT, READ THIS FIRST. The repository is ALREADY checked out in your
> working directory. Do NOT run `git clone`. Do NOT run `git config`, do not
> inspect or change `credential.helper`, and do not try to diagnose push
> credentials: they are already configured and `git push -u origin main` works
> as is. If any command IS blocked by a permission prompt, your final output
> must name the exact command that was blocked and what you had completed up to
> that point. Never end silently, and never report success for a run that did
> not commit.
>
> Read `docs/social-feed-automation.md` and `docs/RULES.md` first.
>
> 1. Read `public/social-feed-queue.json`. Remove entries whose `post_date` is
>    in the past (they are already posted; the `queue_id` dedupe makes removal
>    safe). Keep any future-dated entries.
> 2. Find the next 7 days of releasing content: articles in
>    `public/articles.json` dated in the window, Chronicles pairs releasing
>    Monday, and 2 to 3 facts from `src/lib/data/facts.js` that have a photo in
>    `src/lib/data/factImages.js` and have not been used in the queue before
>    (check git history of the queue file if unsure). Prefer HIGH fact ids: the
>    poster's fact floor works through unposted facts oldest id first, so a low
>    id you queue may be one it already posted on its own.
> 3. Write 1 to 2 posts per day: mostly one article promo per day, facts every
>    second day. Captions follow the voice rules above, 1 to 3 sentences, hook
>    first, no URLs, hashtags last. Verify each claim against the page you are
>    promoting rather than writing from its title. `link_url` is
>    `/blog/<slug>/` for articles and `/facts/<title-slug>/` for facts
>    (slugified fact title). `media_url` is the article's `image` field, or
>    `/assets/facts/<file>` from FACT_IMAGES. `id` is `<post_date>-<short-slug>`,
>    unique forever.
> 4. Verify every `media_url` exists under `public/` before committing. Drop any
>    post whose image is missing rather than shipping a broken one.
> 5. Stage and commit ONLY `public/social-feed-queue.json`, message like
>    "Refill social feed queue: <date range>". Push to origin main. This push
>    must NOT include [CI Skip]: the queue only reaches the poster once the
>    site deploys.
> 6. If there is no releasing content and no unused photographed facts, say so
>    in your output and stop without committing.
