import React from 'react';
import { TriangleAlert } from 'lucide-react';
import { useArticleMeta } from '@/lib/articleMeta';
import { formatDay } from '@/lib/utils/verifiedDates';
import { noticeText } from '@/lib/data/sourceNotices';
import NOTICE_DATES from '@/lib/generated/legal-source-notices.json';

// A box saying a source this guide relies on has changed under it, placed where
// the guide first turns to that source. The wording and the agency dates live
// in src/lib/data/sourceNotices.js; the "accurate when checked" date is this
// guide's own cell, so the box is right for each animal without a prop.
//
// Renders nothing when the notice has been retired or the guide's animal does
// not rest on that source, so a stale tag is harmless.
export default function SourceNotice({ id, className = '' }) {
  const { slug } = useArticleMeta();
  const checked = slug ? NOTICE_DATES[slug]?.[id] : null;
  const notice = checked ? noticeText(id, { surface: 'guide', dates: [checked], formatDay }) : null;
  if (!notice) return null;
  return <SourceNoticeBox title={notice.title} text={notice.text} archive={notice.archive} className={className} />;
}

// The box itself, shared with the state pages. Text arrives as one string, so
// prerender and hydration produce the same single text node.
export function SourceNoticeBox({ title, text, archive = null, className = '' }) {
  return (
    <div className={`not-prose my-8 rounded-2xl border border-amber-500/40 border-l-4 border-l-amber-500 bg-amber-500/5 p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400">
          <TriangleAlert className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-body font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            {title}
          </div>
          <div className="text-foreground font-body text-[15px] leading-relaxed">{text}</div>
          {archive && (
            <a href={archive.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-body text-[15px] font-semibold text-amber-700 underline dark:text-amber-400">
              {archive.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
