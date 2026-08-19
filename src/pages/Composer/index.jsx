import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Video as VideoIcon, Trash2, LogOut, UploadCloud } from 'lucide-react';
import { supabase } from '@/api/supabaseClient';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';

// 100MB: comfortably above a phone photo or a short clip, well under
// Supabase's default per-file storage limit, so a failed upload here means
// something is actually wrong rather than "just under the ceiling."
const MAX_FILE_BYTES = 100 * 1024 * 1024;

const fileExt = (name) => {
  const dot = name.lastIndexOf('.');
  return dot > -1 ? name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, '') : '';
};

export default function Composer() {
  const { user, logout } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'error' | 'success', message }
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const fileInputRef = useRef(null);

  const loadPosts = useCallback(async () => {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from('social_posts')
      .select('id, media_type, media_url, caption, link_url, created_at')
      .order('created_at', { ascending: false });
    if (!error) setPosts(data || []);
    setLoadingPosts(false);
  }, []);

  useEffect(() => { loadPosts(); }, [loadPosts]);

  useEffect(() => {
    if (!file) { setPreview(null); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileChange = (e) => {
    const f = e.target.files?.[0] || null;
    setStatus(null);
    if (f && f.size > MAX_FILE_BYTES) {
      setStatus({ type: 'error', message: 'That file is over 100MB - trim it down and try again.' });
      e.target.value = '';
      setFile(null);
      return;
    }
    setFile(f);
  };

  const resetForm = () => {
    setFile(null);
    setCaption('');
    setLinkUrl('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus({ type: 'error', message: 'Pick a photo or video first.' });
      return;
    }
    setUploading(true);
    setStatus(null);
    try {
      const mediaType = file.type.startsWith('video/') ? 'video' : 'image';
      const ext = fileExt(file.name) || (mediaType === 'video' ? 'mp4' : 'jpg');
      const path = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('social-feed')
        .upload(path, file, { contentType: file.type || undefined });
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('social-feed').getPublicUrl(path);

      const { error: insertError } = await supabase.from('social_posts').insert({
        media_type: mediaType,
        media_url: publicUrl,
        caption: caption.trim(),
        link_url: linkUrl.trim() || null,
      });
      if (insertError) throw insertError;

      setStatus({ type: 'success', message: 'Posted to the feed.' });
      resetForm();
      loadPosts();
    } catch (err) {
      setStatus({ type: 'error', message: err?.message || 'Something went wrong posting that.' });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (post) => {
    if (!window.confirm('Remove this post from the feed?')) return;
    setDeletingId(post.id);
    try {
      const { error } = await supabase.from('social_posts').delete().eq('id', post.id);
      if (error) throw error;
      // Storage cleanup is best-effort: the object's path is the last URL
      // segment (see the upload path shape above). A failure here leaves an
      // orphaned file in the bucket, which costs storage but nothing else -
      // it is never a reason to leave the (already-deleted) row's row back.
      const path = decodeURIComponent(post.media_url.split('/').pop());
      await supabase.storage.from('social-feed').remove([path]).catch(() => {});
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } catch (err) {
      setStatus({ type: 'error', message: err?.message || 'Could not delete that post.' });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <Helmet>
        <title>Composer | Beastly Facts</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">New Feed Post</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            {user?.email ? `Signed in as ${user.email}` : 'Post a photo or clip to /feed/.'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/feed/" className="text-xs font-body font-semibold text-secondary hover:underline">
            View feed
          </Link>
          <Button type="button" variant="outline" size="sm" onClick={logout} className="font-body">
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <label className="block">
          <span className="text-sm font-body font-semibold text-foreground">Photo or video</span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="mt-1.5 w-full text-sm font-body text-muted-foreground file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-secondary file:text-secondary-foreground file:text-sm file:font-body file:font-semibold"
          />
        </label>

        {preview && (
          <div className="rounded-xl overflow-hidden border border-border bg-muted max-h-80 flex items-center justify-center">
            {file?.type.startsWith('video/') ? (
              <video src={preview} controls className="max-h-80 w-full" />
            ) : (
              <img src={preview} alt="Preview" className="max-h-80 w-full object-contain" />
            )}
          </div>
        )}

        <label className="block">
          <span className="text-sm font-body font-semibold text-foreground">Caption</span>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            placeholder="What's the story here?"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-body font-semibold text-foreground">Link (optional)</span>
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="https://instagram.com/p/..."
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </label>

        {status && (
          <p className={`text-sm font-body ${status.type === 'error' ? 'text-destructive' : 'text-accent'}`}>
            {status.message}
          </p>
        )}

        <Button type="submit" disabled={uploading || !file} className="w-full font-body font-bold">
          {uploading ? 'Posting...' : <><UploadCloud className="w-4 h-4" /> Post to Feed</>}
        </Button>
      </form>

      <div className="mt-10">
        <h2 className="font-display font-bold text-lg text-foreground mb-4">Your posts</h2>
        {loadingPosts ? (
          <p className="text-sm text-muted-foreground font-body">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-sm text-muted-foreground font-body">Nothing posted yet.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="flex gap-3 items-center bg-card border border-border rounded-xl p-3">
                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  {post.media_type === 'video' ? (
                    <video src={post.media_url} className="w-full h-full object-cover" muted />
                  ) : (
                    <img src={post.media_url} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-body text-foreground truncate">{post.caption || '(no caption)'}</p>
                  <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5 mt-0.5">
                    {post.media_type === 'video' ? <VideoIcon className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                    {new Date(post.created_at).toLocaleString()}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  disabled={deletingId === post.id}
                  onClick={() => handleDelete(post)}
                  aria-label="Delete post"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
