import React, { useState, useEffect } from 'react';
import { Heart, Share2, MessageCircle, Send, Check } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { motion, AnimatePresence } from '@/lib/motion-safe';

// AppLayout swaps <RoutedContent /> for <Suspense><RoutedContent /></Suspense>
// once its `ready` flag flips just after mount, which React treats as a
// different element at that position and so unmounts and remounts the whole
// routed page. Every route on this site therefore mounts twice on a fresh load,
// and without this cache that meant ten Supabase requests per article view
// instead of five, on a free tier.
//
// Keyed by post and short-lived: a remount lands within milliseconds and reuses
// the in-flight promise, while anything later than the window refetches, so
// counts never go stale in a way a reader would notice. Invalidated outright
// after a like or share, since those change the number.
const engagementCache = new Map();
const ENGAGEMENT_CACHE_MS = 5000;

function readEngagement(postId, load) {
  const hit = engagementCache.get(postId);
  if (hit && Date.now() - hit.at < ENGAGEMENT_CACHE_MS) return hit.promise;
  const promise = load().catch((err) => {
    engagementCache.delete(postId); // never cache a failure
    throw err;
  });
  engagementCache.set(postId, { at: Date.now(), promise });
  return promise;
}

// Generates/retrieves a stable anonymous session key for this browser
function getSessionKey() {
  let key = localStorage.getItem('bf_session_key');
  if (!key) {
    key = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('bf_session_key', key);
  }
  return key;
}

export default function PostEngagement({ postId, postTitle, postSlug }) {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [shareCount, setShareCount] = useState(0);
  const [hasShared, setHasShared] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sessionKey = getSessionKey();

  useEffect(() => {
    // Skipped during prerendering: reads localStorage and (via loadData)
    // fetches like/comment counts, both of which can settle before
    // prerender.mjs captures the page, baking non-default values into the
    // static HTML that a real client's hydration-time first render (which
    // always starts at the useState defaults) can't match. Same class of
    // issue as useLocalStorage.js's deferred reads.
    if (window.__IS_PRERENDER__) return;
    if (localStorage.getItem(`bf_liked_${postId}`)) setHasLiked(true);
    if (localStorage.getItem(`bf_shared_${postId}`)) setHasShared(true);
    loadData();
  }, [postId]);

  // Pure fetch, no state writes: this runs once per post even when two mounts
  // ask for it, so it must not assume it belongs to the mount that triggered it.
  // The five reads go out together rather than in sequence - none depends on
  // another, and awaiting them one at a time was costing about a second of
  // stacked latency before anything appeared.
  const fetchEngagement = async () => {
    const [likes, ownLike, shares, ownShare, approved] = await Promise.all([
      supabase.from('blog_post_likes').select('id', { count: 'exact', head: true }).eq('post_id', postId),
      supabase.from('blog_post_likes').select('id').eq('post_id', postId).eq('session_key', sessionKey).maybeSingle(),
      supabase.from('blog_post_shares').select('id', { count: 'exact', head: true }).eq('post_id', postId),
      supabase.from('blog_post_shares').select('id').eq('post_id', postId).eq('session_key', sessionKey).maybeSingle(),
      // Reads the view, not the table: it exposes approved comments only and
      // omits author_email entirely. created_date is aliased so the markup
      // below is unchanged from the base44 version.
      supabase
        .from('public_blog_comments')
        .select('id, author_name, content, created_date:created_at')
        .eq('post_id', postId)
        .order('created_at', { ascending: true }),
    ]);
    return {
      likeCount: likes.count,
      likedInDb: Boolean(ownLike.data),
      shareCount: shares.count,
      sharedInDb: Boolean(ownShare.data),
      comments: approved.data,
    };
  };

  const loadData = async () => {
    if (!isSupabaseConfigured) return; // like state already restored from localStorage
    try {
      const data = await readEngagement(postId, fetchEngagement);

      if (typeof data.likeCount === 'number') setLikeCount(data.likeCount);
      if (typeof data.shareCount === 'number') setShareCount(data.shareCount);
      if (data.comments) setComments(data.comments);

      // Reconcile the liked flag against the database instead of trusting
      // localStorage outright. localStorage is only a first-paint guess: it can
      // say "liked" when no row exists, which leaves the button permanently
      // disabled with nothing behind it. That is not hypothetical - clearing the
      // likes table during setup stranded every post this browser had liked.
      // The unique (post_id, session_key) constraint makes the row the real
      // record of whether this device liked, so let it win in both directions.
      setHasLiked(data.likedInDb);
      if (data.likedInDb) localStorage.setItem(`bf_liked_${postId}`, '1');
      else localStorage.removeItem(`bf_liked_${postId}`);

      // Same reconciliation for shares: the row is the record of whether this
      // device already counted, so a stale flag cannot suppress a real share
      // and a wiped localStorage cannot cause a double count.
      setHasShared(data.sharedInDb);
      if (data.sharedInDb) localStorage.setItem(`bf_shared_${postId}`, '1');
      else localStorage.removeItem(`bf_shared_${postId}`);
    } catch {
      // silent fail - localStorage state already applied above
    }
  };

  const handleLike = async () => {
    if (hasLiked) return;
    // Optimistic update - responds immediately regardless of backend
    setHasLiked(true);
    setLikeCount(c => c + 1);
    localStorage.setItem(`bf_liked_${postId}`, '1');
    engagementCache.delete(postId); // the count just changed
    if (!isSupabaseConfigured) return;
    try {
      // A duplicate hits the (post_id, session_key) unique constraint and errors,
      // which is the intended outcome and needs no handling: the optimistic UI
      // above already reflects the like, and the count is correct either way.
      await supabase
        .from('blog_post_likes')
        .insert({ post_id: postId, session_key: sessionKey });
    } catch {
      // silent - UI already updated, localStorage persists the liked state
    }
  };

  // Counted once per reader, not once per click. The button still works every
  // time it is pressed - sharing again is allowed - it just stops moving the
  // number, so the count measures how many people passed the post on rather
  // than how many times the button was pressed.
  const recordShare = async () => {
    if (hasShared) return;
    setHasShared(true);
    setShareCount((c) => c + 1);
    localStorage.setItem(`bf_shared_${postId}`, '1');
    engagementCache.delete(postId); // the count just changed
    if (!isSupabaseConfigured) return;
    try {
      // A repeat from the same device hits the (post_id, session_key) unique
      // constraint and errors, which is the intended outcome.
      await supabase
        .from('blog_post_shares')
        .insert({ post_id: postId, session_key: sessionKey });
    } catch {
      // silent - the count shown is optimistic either way
    }
  };

  const copyLink = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // clipboard can be blocked or missing; the visual confirmation below
      // would then be a lie, so say nothing rather than claim it copied
      return false;
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
    return true;
  };

  const handleShare = async () => {
    const url = `https://beastlyfacts.com/blog/${postSlug || postId}/`;

    // navigator.share must be called synchronously off the click: awaiting
    // anything first spends the transient user activation it requires, and the
    // call then rejects with NotAllowedError.
    if (navigator.share) {
      try {
        await navigator.share({ title: postTitle, url });
        recordShare();
        return;
      } catch (err) {
        // AbortError means the reader opened the sheet and backed out. That is
        // a deliberate no, so leave it alone: no count, no clipboard surprise.
        if (err?.name === 'AbortError') return;
        // Anything else is the share sheet failing, not the reader declining:
        // no activation, a permissions policy, an OS-level failure, or a
        // target that rejected the payload. Previously this branch did nothing
        // at all, so the button looked broken. Fall through to the copy path
        // so the reader still ends up with the link.
      }
    }

    if (await copyLink(url)) recordShare();
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;
    if (!isSupabaseConfigured) {
      toast.error('Comments are unavailable right now. Please try again later.');
      return;
    }
    setSubmitting(true);
    try {
      // status is omitted on purpose: the column defaults to 'pending' and the
      // insert policy only accepts 'pending', so a comment cannot arrive
      // pre-approved even if this request were tampered with.
      const { error } = await supabase.from('blog_comments').insert({
        post_id: postId,
        post_title: postTitle || '',
        author_name: name.trim(),
        author_email: email.trim(),
        content: commentText.trim(),
      });
      if (error) throw error;
      setSubmitted(true);
      setName('');
      setEmail('');
      setCommentText('');
    } catch (err) {
      // The length and link-count CHECK constraints surface here. Postgres
      // constraint text is not something to show a reader, so map it.
      const isConstraint = /violates check constraint|blog_comments_/i.test(err?.message || '');
      toast.error(
        isConstraint
          ? 'That comment looks too short, too long, or has too many links.'
          : err?.message || 'Failed to submit comment'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-12 border-t border-border pt-8 space-y-10">
      {/* Like & Share bar */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-display font-semibold text-sm ${
            hasLiked
              ? 'bg-hotpink/10 border-hotpink/30 text-hotpink cursor-default'
              : 'bg-card border-border text-muted-foreground hover:border-hotpink/40 hover:text-hotpink'
          }`}
        >
          <Heart className={`w-4 h-4 ${hasLiked ? 'fill-hotpink text-hotpink' : ''}`} />
          {`${likeCount > 0 ? `${likeCount} ` : ''}${hasLiked ? 'Liked!' : 'Like'}`}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-muted-foreground hover:border-secondary/40 hover:text-secondary transition-all font-display font-semibold text-sm"
        >
          {shared ? <Check className="w-4 h-4 text-accent" /> : <Share2 className="w-4 h-4" />}
          {shared ? 'Copied!' : 'Share'}
        </button>

        {/* Counts live here rather than inside the buttons: the buttons are
            actions, and "3 Share" does not read as English the way the Like
            button's "3 Liked!" just about gets away with. */}
        {(shareCount > 0 || comments.length > 0) && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-body ml-auto">
            {shareCount > 0 && (
              <span className="flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                {`${shareCount} ${shareCount === 1 ? 'share' : 'shares'}`}
              </span>
            )}
            {comments.length > 0 && (
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                {`${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Comments section */}
      <div>
        <h3 className="font-display font-bold text-lg text-foreground mb-5">
          Comments
        </h3>

        {/* Existing comments */}
        {comments.length === 0 ? (
          <p className="text-sm text-muted-foreground font-body mb-6">No comments yet - be the first!</p>
        ) : (
          <div className="space-y-4 mb-8">
            <AnimatePresence>
              {comments.map(c => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-muted/40 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-display font-bold text-sm text-foreground">{c.author_name}</span>
                    <span className="text-xs text-muted-foreground font-body">
                      {new Date(c.created_date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{c.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Comment form */}
        {submitted ? (
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5 text-center">
            <span className="text-2xl block mb-2">🐾</span>
            <p className="font-display font-bold text-sm text-foreground">Thanks for your comment!</p>
            <p className="text-xs text-muted-foreground font-body mt-1">It'll show up once approved.</p>
            <button onClick={() => setSubmitted(false)} className="text-xs text-secondary mt-3 underline font-body">
              Leave another comment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitComment} className="space-y-3 bg-card border border-border rounded-2xl p-5">
            <p className="font-display font-bold text-sm text-foreground">Leave a comment</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                placeholder="Your name *"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="font-body text-sm"
              />
              <Input
                placeholder="Email (optional, not shown)"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="font-body text-sm"
              />
            </div>
            <textarea
              placeholder="Write your comment..."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              required
              rows={4}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
            />
            <Button
              type="submit"
              disabled={submitting || !name.trim() || !commentText.trim()}
              className="font-display font-bold"
            >
              {submitting ? 'Submitting...' : <><Send className="w-4 h-4 mr-1.5" /> Submit Comment</>}
            </Button>
            <p className="text-xs text-muted-foreground font-body">Comments are moderated before appearing.</p>
          </form>
        )}
      </div>
    </div>
  );
}