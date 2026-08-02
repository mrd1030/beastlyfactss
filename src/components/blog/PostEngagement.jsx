import React, { useState, useEffect } from 'react';
import { Heart, Share2, MessageCircle, Send, Check } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { motion, AnimatePresence } from '@/lib/motion-safe';

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
    loadData();
  }, [postId]);

  const loadData = async () => {
    if (!isSupabaseConfigured) return; // like state already restored from localStorage
    try {
      // head:true asks for the count without transferring any rows.
      const { count } = await supabase
        .from('blog_post_likes')
        .select('id', { count: 'exact', head: true })
        .eq('post_id', postId);
      if (typeof count === 'number') setLikeCount(count);

      // Reads the view, not the table: it exposes approved comments only and
      // omits author_email entirely. created_date is aliased so the markup
      // below is unchanged from the base44 version.
      const { data: approved } = await supabase
        .from('public_blog_comments')
        .select('id, author_name, content, created_date:created_at')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });
      if (approved) setComments(approved);
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

  const handleShare = async () => {
    const url = `https://beastlyfacts.com/blog/${postSlug || postId}/`;
    if (navigator.share) {
      try {
        await navigator.share({ title: postTitle, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
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

        {comments.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body ml-auto">
            <MessageCircle className="w-3.5 h-3.5" />
            {`${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
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