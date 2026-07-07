import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const FACTS_URL = 'https://raw.githubusercontent.com/mrd1030/beastlyfactss/main/public/facts.json';

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

   // Fetch facts from remote source
    const factsRes = await fetch(FACTS_URL);
    const fullData = await factsRes.json(); // This is the object: { facts: [...], categories: [...] }
    
    // Explicitly grab the array
    const allFacts = fullData.facts; 
    console.log('Total facts loaded:', allFacts.length);

    // Read posted history
    const postedRecords = await base44.asServiceRole.entities.PostedFact.list('-created_date', 1000);
    const postedIds = new Set(postedRecords.map(r => Number(r.fact_title)));

    // Filter to unposted facts (Use allFacts instead of facts)
    let unposted = allFacts.filter(f => !postedIds.has(f.id));

    // All facts have been posted - reset cycle
    if (unposted.length === 0) {
      console.log('All facts have been posted. Resetting cycle...');
      for (const r of postedRecords) {
        await base44.asServiceRole.entities.PostedFact.delete(r.id);
      }
      unposted = allFacts; // Use allFacts here, not the full object
    }

    const chosen = unposted[Math.floor(Math.random() * unposted.length)];
    console.log('Chosen fact for Reel:', chosen.id, chosen.title);

    // Mark as posted
    await base44.asServiceRole.entities.PostedFact.create({ fact_title: String(chosen.id) });

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