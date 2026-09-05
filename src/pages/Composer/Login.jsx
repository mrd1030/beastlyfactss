import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TurnstileWidget, { isTurnstileEnabled } from '@/components/shared/TurnstileWidget';

function ComposerLoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  // Supabase CAPTCHA protection covers every Auth endpoint, so turning it on
  // for the buyer library's OTP also starts gating this password sign-in.
  // Inert until VITE_TURNSTILE_SITE_KEY is set, same as everywhere else.
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNonce, setCaptchaNonce] = useState(0);
  // Set when the widget cannot load at all, usually a CSP missing
  // challenges.cloudflare.com. Requiring a token then would be a button that
  // can never be pressed, so the request goes through and Supabase decides.
  const [captchaBlocked, setCaptchaBlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isTurnstileEnabled && !captchaToken && !captchaBlocked) {
      setError('Complete the verification below, then try again.');
      return;
    }
    setSubmitting(true);
    try {
      await login(email.trim(), password, captchaToken);
      navigate('/composer/', { replace: true });
    } catch (err) {
      setError(err?.message || 'Sign-in failed.');
    } finally {
      setSubmitting(false);
      // Single use, so a failed attempt needs a fresh one before retrying.
      setCaptchaToken('');
      setCaptchaNonce(n => n + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Helmet>
        <title>Sign In | Beastly Facts</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-card border border-border rounded-2xl p-6 space-y-4">
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">Composer sign-in</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Post to the public feed.</p>
        </div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          className="font-body"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="font-body"
        />
        <TurnstileWidget onToken={setCaptchaToken} onUnavailable={() => setCaptchaBlocked(true)} resetSignal={captchaNonce} />
        {error && <p className="text-sm text-destructive font-body">{error}</p>}
        <Button type="submit" disabled={submitting} className="w-full font-body font-bold">
          {submitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}

// Same reasoning as ProtectedRoute.jsx: AuthProvider mounts here, inside the
// lazy-loaded Composer/Login chunk, instead of at the app root.
export default function ComposerLogin() {
  return (
    <AuthProvider>
      <ComposerLoginForm />
    </AuthProvider>
  );
}
