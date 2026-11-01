import React from 'react';
import { Link } from 'react-router-dom';
import { fileLabel, foldFileLabel } from '@/lib/utils/fileLinks';

// MDX compiles markdown [text](url) links to <a>, which forces a full page
// reload for internal paths since it bypasses the router. Route "/"-prefixed
// hrefs through React Router's Link instead; leave hash and external links alone.
//
// A link to a PDF or Word file says so in its own text, "(PDF, downloads)",
// because on a phone it saves the file instead of opening a page. Text that
// already ends "(official PDF)" has "downloads" folded into that instead.
export default function MdxLink({ href = '', children, ...props }) {
  if (href.startsWith('#')) {
    return <a href={href} {...props}>{children}</a>;
  }
  const folded = foldFileLabel(children, href);
  const label = folded === null ? fileLabel(href) : '';
  const body = folded ?? children;
  const content = label ? <>{body} {label}</> : body;
  if (href.startsWith('/') && !label && folded === null) {
    return <Link to={href} {...props}>{content}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {content}
    </a>
  );
}
