import { isSupabaseConfigured, supabase } from './supabase';

export type AuthActionResult =
  | { status: 'not-configured' }
  | { status: 'sent' }
  | { status: 'verified' }
  | { status: 'error'; message: string };

/**
 * Sends a 6-digit sign-in code to `email` via Supabase's built-in email-OTP
 * flow - no password to set or remember. The same call creates the account
 * on first use (signInWithOtp defaults shouldCreateUser to true), so
 * there's no separate sign-up step; entering an email either signs an
 * existing account in or quietly creates one.
 */
export async function sendSignInCode(email: string): Promise<AuthActionResult> {
  if (!isSupabaseConfigured || !supabase) return { status: 'not-configured' };
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return { status: 'error', message: 'Enter your email first.' };

  const { error } = await supabase.auth.signInWithOtp({ email: trimmed });
  if (error) return { status: 'error', message: error.message };
  return { status: 'sent' };
}

export async function verifySignInCode(email: string, code: string): Promise<AuthActionResult> {
  if (!isSupabaseConfigured || !supabase) return { status: 'not-configured' };
  const trimmedCode = code.trim();
  if (!trimmedCode) return { status: 'error', message: 'Enter the code from your email.' };

  const { error } = await supabase.auth.verifyOtp({
    email: email.trim().toLowerCase(),
    token: trimmedCode,
    type: 'email',
  });
  if (error) return { status: 'error', message: error.message };
  return { status: 'verified' };
}

export async function signOutOfAccount(): Promise<void> {
  if (!supabase) return;
  await supabase.auth.signOut();
}
