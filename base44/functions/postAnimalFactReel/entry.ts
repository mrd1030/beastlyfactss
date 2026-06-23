import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

async function waitForContainer(containerId, accessToken, maxAttempts = 15) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, 8000));
    const res = await fetch(`https://graph.instagram.com/${containerId}?fields=status_code&access_token=${accessToken}`);
    const data = await res.json();
    console.log(`Reel container status check ${i + 1}:`, data.status_code);
    if (data.status_code === 'FINISHED') return true;
    if (data.status_code === 'ERROR') throw new Error('Instagram Reel container processing failed');
  }
  throw new Error('Instagram Reel container timed out');
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    console.log('postAnimalFactReel started');

    // Fetch facts from the internal getFacts function (single source of truth)
    const factsRes = await base44.asServiceRole.functions.invoke('getFacts', {});
    const allFacts = factsRes.facts;
    if (!Array.isArray(allFacts) || allFacts.length === 0) {
      throw new Error('getFacts returned no facts');
    }
    console.log('Total facts loaded:', allFacts.length);

    // Read posted history (keyed by title)
    const postedRecords = await base44.asServiceRole.entities.PostedFact.list('-created_date', 1000);
    const postedTitles = new Set(postedRecords.map(r => r.fact_title));

    // Filter to unposted facts
    let unposted = allFacts.filter(f => !postedTitles.has(f.title));

    // All facts have been posted — reset cycle
    if (unposted.length === 0) {
      console.log('All facts have been posted. Resetting cycle...');
      await base44.asServiceRole.entities.PostedFact.deleteMany({});
      unposted = allFacts;
    }

    const chosen = unposted[Math.floor(Math.random() * unposted.length)];
    console.log('Chosen fact for Reel:', chosen.title);

    // Mark as posted
    await base44.asServiceRole.entities.PostedFact.create({ fact_title: chosen.title });

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[new Date().getDay()];
    const caption = `${chosen.emoji} ${chosen.title}\n\n${chosen.fact}\n\n🤖 This Reel was created using AI-generated visuals.\n\n#BeastlyFacts #AnimalFacts #${chosen.animal.replace(/\s+/g, '')} #${dayName}Facts #NatureLovers #AnimalScience #AIGenerated`;

    console.log('Generating video for:', chosen.animal);
    const videoResult = await base44.asServiceRole.integrations.Core.GenerateVideo({
      prompt: `Stunning cinematic footage of a ${chosen.animal} in its natural habitat. Close-up wildlife documentary style, dramatic lighting, vivid colors, smooth camera movement, high quality nature film. No text overlays.`,
      label: `${chosen.animal} Reel`
    });
    console.log('Generated video URL:', videoResult.url);

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("instagram");
    const meRes = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
    const meData = await meRes.json();
    if (!meData.id) {
      return Response.json({ error: 'Could not get Instagram user ID', details: meData }, { status: 500 });
    }

    const containerRes = await fetch(`https://graph.instagram.com/${meData.id}/media`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        media_type: 'REELS',
        video_url: videoResult.url,
        caption,
        share_to_feed: true,
        access_token: accessToken
      })
    });
    const containerData = await containerRes.json();
    if (!containerData.id) {
      return Response.json({ error: 'Failed to create Reel container', details: containerData }, { status: 500 });
    }

    await waitForContainer(containerData.id, accessToken);

    const publishRes = await fetch(`https://graph.instagram.com/${meData.id}/media_publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ creation_id: containerData.id, access_token: accessToken })
    });
    const publishData = await publishRes.json();
    if (!publishData.id) {
      return Response.json({ error: 'Failed to publish Reel', details: publishData }, { status: 500 });
    }

    return Response.json({ success: true, post_id: publishData.id, fact_id: chosen.id, fact: chosen.title, video_url: videoResult.url, day: dayName, remaining: unposted.length - 1 });
  } catch (error) {
    console.error('Error in postAnimalFactReel:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});