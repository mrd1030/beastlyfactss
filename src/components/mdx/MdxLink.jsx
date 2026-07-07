import React from 'react';
import { Link } from 'react-router-dom';

// MDX compiles markdown [text](url) links to <a>, which forces a full page
// reload for internal paths since it bypasses the router. Route "/"-prefixed
// hrefs through React Router's Link instead; leave hash and external links alone.
export default function MdxLink({ href = '', children, ...props }) {
  if (href.startsWith('/')) {
    return <Link to={href} {...props}>{children}</Link>;
  }
  if (href.startsWith('#')) {
    return <a href={href} {...props}>{children}</a>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
