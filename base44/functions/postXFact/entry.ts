import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const teamFacts = [
  "🔬 Every animal fact on Beastly Facts is cross-referenced against peer-reviewed studies and wildlife journals. Fun AND accurate — that's our standard.\n\n🔗 beastlyfacts.com",
  "🦎 Our reptile care guides are written by experienced keepers with real hands-on husbandry knowledge. Education-first pet ownership = thriving animals.\n\nbeastlyfacts.com",
  "🌍 Learning about animals creates empathy — and empathy drives conservation. That's why we make wildlife content fun and accessible for everyone.\n\nbeastlyfacts.com",
  "📰 The Critter Digest newsletter is packed with reptile & exotic pet care guides. Subscribe free at beastlyfacts.com — straight to your inbox!",
  "🐍 Our team includes beardie, leopard gecko, ball python, and crested gecko keepers. Passion meets practice at Beastly Facts.\n\nbeastlyfacts.com",
];

async function refreshAccessToken(clientId, clientSecret, refreshToken) {
  const credentials = btoa(`${clientId}:${clientSecret}`);
  const res = await fetch('https://api.twitter.com/2/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  });

  const data = await res.json();
  console.log('Token refresh response status:', res.status, JSON.stringify(data));

  if (!data.access_token) {
    throw new Error(`Token refresh failed: ${JSON.stringify(data)}`);
  }

  return { accessToken: data.access_token, newRefreshToken: data.refresh_token };
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const clientId = Deno.env.get('X_CLIENT_ID');
    const clientSecret = Deno.env.get('X_CLIENT_SECRET');
    const refreshToken = Deno.env.get('X_REFRESH_TOKEN');

    if (!clientId || !clientSecret || !refreshToken) {
      return Response.json({ error: 'Missing OAuth 2.0 secrets' }, { status: 500 });
    }

    // Get a fresh access token
    const { accessToken, newRefreshToken } = await refreshAccessToken(clientId, clientSecret, refreshToken);

    // Fetch facts from the single source of truth
    const factsRes = await base44.asServiceRole.functions.invoke('getFacts', {});
    const facts = factsRes.facts;

    // Pick tweet content
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const hourUTC = now.getUTCHours();

    let tweetText;
    if (hourUTC >= 23 || hourUTC < 2) {
      tweetText = teamFacts[dayOfYear % teamFacts.length];
    } else {
      const slot = hourUTC >= 18 ? 1 : 0;
      const chosen = facts[(dayOfYear * 2 + slot) % facts.length];
      tweetText = `${chosen.emoji} ${chosen.animal}\n\n${chosen.fact}\n\n#BeastlyFacts #AnimalFacts #${chosen.animal.replace(/\s+/g, '')} #WildlifeEducation`;
    }

    // Post the tweet
    const res = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: tweetText }),
    });

    const data = await res.json();
    console.log('Tweet response status:', res.status, JSON.stringify(data));

    if (!data.data?.id) {
      return Response.json({ error: 'Failed to post tweet', details: data }, { status: 500 });
    }

    const note = newRefreshToken && newRefreshToken !== refreshToken
      ? 'New refresh token issued — update X_REFRESH_TOKEN secret with: ' + newRefreshToken
      : 'Refresh token unchanged';

    return Response.json({ success: true, tweet_id: data.data.id, preview: tweetText.slice(0, 80), note });
  } catch (error) {
    console.error('Exception:', error.message, error.stack);
    return Response.json({ error: error.message }, { status: 500 });
  }
});