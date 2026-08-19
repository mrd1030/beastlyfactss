import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ComposerLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email.trim(), password);
      navigate('/composer/', { replace: true });
    } catch (err) {
      setError(err?.message || 'Sign-in failed.');
    } finally {
      setSubmitting(false);
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
        {error && <p className="text-sm text-destructive font-body">{error}</p>}
        <Button type="submit" disabled={submitting} className="w-full font-body font-bold">
          {submitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}
