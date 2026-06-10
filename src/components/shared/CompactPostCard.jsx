import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { urlFor } from '@/lib/sanityImage';

export default function CompactPostCard({ post, onClick }) {
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  const category = post.category || post.animalType || 'Article';

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(120).height(80).fit('crop').url()
    : null;

  const content = (
    <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-3 hover:border-secondary/40 hover:shadow-sm transition-all group cursor-pointer">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={post.title}
          className="w-20 h-14 rounded-lg object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-20 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-2xl">
          🐾
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
          <span className="text-xs font-display font-semibold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="font-display font-bold text-sm text-foreground leading-snug mb-1 group-hover:text-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-xs text-muted-foreground font-body line-clamp-2 leading-relaxed mb-1">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          {date && <span className="flex items-center gap-0.5"><Calendar className="w-3 h-3" />{date}</span>}
          {post.readTime && <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" />{post.readTime} min</span>}
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return <div onClick={onClick}>{content}</div>;
  }

  const slug = post.slug?.current || post.id;
  return <Link to={`/blog?post=${slug}`}>{content}</Link>;
}