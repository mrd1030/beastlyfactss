import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Posts to /api/contact in public/_worker.js, which forwards the message to
// Mike as an ntfy push. Nothing is stored anywhere.
//
// `website` is a honeypot: hidden from people, filled in by bots, and the
// Worker quietly drops anything that has it. `elapsed` is how long the page
// was open before sending, for the same reason. The start time is taken in an
// effect rather than during render so the prerendered HTML and the first
// client render stay identical.
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message, website, elapsed: Date.now() - startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'The message did not go through.');
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
        <span className="text-2xl block mb-2">🐾</span>
        <p className="font-body font-bold text-sm text-foreground">Thanks, your message is on its way.</p>
        <p className="text-xs text-muted-foreground font-body mt-1">
          {email ? 'I reply by email, usually within a few days.' : 'You left no email, so I cannot write back, but I will read it.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-card border border-border rounded-2xl p-6">
      <p className="font-body font-bold text-base text-foreground">Send a message</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="Your name *"
          aria-label="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          maxLength={80}
          className="font-body text-sm"
        />
        <Input
          placeholder="Email, if you want a reply"
          aria-label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          maxLength={120}
          className="font-body text-sm"
        />
      </div>
      <textarea
        placeholder="Your question, a correction, a fact to share..."
        aria-label="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        minLength={10}
        maxLength={2000}
        rows={5}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
      />
      {/* Honeypot. Off screen rather than display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
        </label>
      </div>
      <Button
        type="submit"
        disabled={status === 'sending' || !name.trim() || message.trim().length < 10}
        className="font-body font-bold"
      >
        {status === 'sending' ? 'Sending...' : <><Send className="w-4 h-4 mr-1.5" /> Send message</>}
      </Button>
      {status === 'error' && (
        <p className="text-xs font-body text-destructive" role="alert">
          {`${error} You can also email hello@beastlyfacts.com.`}
        </p>
      )}
      <p className="text-xs text-muted-foreground font-body">
        Your message comes straight to me and is not stored on the site. Your email is only used to reply.
      </p>
    </form>
  );
}
