import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Static facts — keep in sync with postAnimalFact
const staticFacts = [
  { title: "Three Hearts of Love", animal: "Octopus", emoji: "🐙", category: "Ocean", fact: "Octopuses have three hearts — two pump blood to the gills, and one pumps it to the rest of the body. When they swim, the heart that delivers blood to the body actually stops beating, which is why they prefer crawling!" },
  { title: "Spiny Situation", animal: "Hedgehog", emoji: "🦔", category: "Mammals", fact: "Hedgehogs have between 5,000 and 7,000 spines on their back! Each spine lasts about a year before it falls out and a new one grows in its place. Baby hedgehogs are born with their spines just below the skin." },
  { title: "Century Talkers", animal: "Parrot", emoji: "🦜", category: "Birds", fact: "Some parrot species can live over 80 years! The oldest known parrot, Cookie the cockatoo, lived to be 83. They can also learn over 100 words and even understand context." },
  { title: "Not-So-Related Pandas", animal: "Red Panda", emoji: "🐼", category: "Mammals", fact: "Despite their name, red pandas are NOT related to giant pandas. They're actually more closely related to raccoons, skunks, and weasels! They were named 'panda' nearly 50 years before the giant panda." },
  { title: "Mood Ring Lizards", animal: "Bearded Dragon", emoji: "🦎", category: "Reptiles", fact: "Bearded dragons can change color based on their mood and body temperature! They darken when cold or stressed, and lighten up when warm and happy. Their 'beard' puffs out and turns black when they're showing off." },
  { title: "Purring Bunnies", animal: "Rabbit", emoji: "🐰", category: "Mammals", fact: "Rabbits purr when they're happy! Unlike cats, they do it by softly grinding their teeth together. They also do 'binkies' — joyful leaps and twists in the air — when they're feeling playful." },
  { title: "Dolphin Name Tags", animal: "Dolphin", emoji: "🐬", category: "Ocean", fact: "Each dolphin develops its own unique signature whistle — essentially a name! They use these to call out to specific friends. Dolphins can remember these 'names' for over 20 years." },
  { title: "Tongue Sniffers", animal: "Snake", emoji: "🐍", category: "Reptiles", fact: "Snakes smell with their tongues! They flick their forked tongue to collect chemical particles from the air, then press it into the Jacobson's organ on the roof of their mouth to 'read' the smells." },
  { title: "Headbutt = I Love You", animal: "Cat", emoji: "🐱", category: "Dogs & Cats", fact: "When your cat headbutts you, it's called 'bunting' — and it means they love and trust you! They have scent glands on their forehead, and bunting is their way of marking you as 'theirs.'" },
  { title: "Crow Detectives", animal: "Crow", emoji: "🐦", category: "Birds", fact: "Crows can recognize individual human faces for years and will teach other crows who is 'friend' or 'foe.' They've been known to bring gifts to people who feed them — from shiny buttons to earrings!" },
  { title: "Immortal Jellyfish", animal: "Jellyfish", emoji: "🪼", category: "Ocean", fact: "The Turritopsis dohrnii jellyfish is biologically immortal! When it gets old or stressed, it can revert its cells back to a younger state — essentially hitting the reset button on aging." },
  { title: "Elephants Mourn", animal: "Elephant", emoji: "🐘", category: "Mammals", fact: "Elephants hold funerals for their dead. They'll gently touch the bones of deceased family members with their trunks and stand vigil for hours. They've even been seen crying." },
  { title: "Axolotl Superpowers", animal: "Axolotl", emoji: "🦎", category: "Weird & Wonderful", fact: "Axolotls can regenerate entire limbs, their heart, spinal cord, and even parts of their brain — with zero scarring! Scientists study them hoping to unlock regeneration secrets for humans." },
  { title: "Wombat Cube Poop", animal: "Wombat", emoji: "🐻", category: "Weird & Wonderful", fact: "Wombats produce cube-shaped poop! Their intestines have varying elasticity that molds their droppings into cubes so they don't roll away — perfect for territorial marking on rocks and logs." },
  { title: "Sea Otter Hand-Holding", animal: "Sea Otter", emoji: "🦦", category: "Ocean", fact: "Sea otters hold hands while sleeping so they don't drift apart! They also wrap themselves in kelp for the same reason. A group of otters floating together is adorably called a 'raft.'" },
  { title: "Virgin Birth Dragons", animal: "Komodo Dragon", emoji: "🦎", category: "Reptiles", fact: "Female Komodo dragons can reproduce without males through parthenogenesis! Their eggs develop into healthy offspring that are genetic clones of the mother." },
  { title: "Electric Sense", animal: "Shark", emoji: "🦈", category: "Ocean", fact: "Sharks have special jelly-filled pores called ampullae of Lorenzini that detect the tiny electrical fields produced by other animals' heartbeats — they can sense a heartbeat from over a meter away!" },
  { title: "Wolves Change Rivers", animal: "Wolf", emoji: "🐺", category: "Mammals", fact: "When wolves were reintroduced to Yellowstone in 1995, they triggered a trophic cascade — changing elk grazing patterns, allowing vegetation to recover, and literally altering the course of rivers." },
  { title: "Indestructible Water Bears", animal: "Tardigrade", emoji: "🐻", category: "Weird & Wonderful", fact: "Tardigrades (water bears) can survive in space, extreme temperatures from -328°F to 300°F, and even being completely dried out for decades!" },
  { title: "Pink From Shrimp", animal: "Flamingo", emoji: "🦩", category: "Birds", fact: "Flamingos are born gray and turn pink from the shrimp and algae they eat! The carotenoid pigments in their food are what give them their signature color." },
];

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

    // Combine static facts with dynamic facts from DB
    const dynamicFacts = await base44.asServiceRole.entities.DynamicFact.list('-created_date', 200);
    const facts = [...(dynamicFacts || []), ...staticFacts];
    console.log('Total facts:', facts.length);

    // Get already-posted fact titles
    const postedRecords = await base44.asServiceRole.entities.PostedFact.list('-created_date', 500);
    const postedTitles = new Set(postedRecords.map(r => r.fact_title));

    // Filter to unposted; reset cycle if all have been posted
    let unposted = facts.filter(f => !postedTitles.has(f.title));
    if (unposted.length === 0) {
      for (const r of postedRecords) {
        await base44.asServiceRole.entities.PostedFact.delete(r.id);
      }
      unposted = facts;
    }

    const chosen = unposted[Math.floor(Math.random() * unposted.length)];
    console.log('Chosen fact for Reel:', chosen.title);

    await base44.asServiceRole.entities.PostedFact.create({ fact_title: chosen.title });

    // Caption with AI disclosure label as required
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[new Date().getDay()];
    const dayHashtag = `#${dayName}Facts`;

    const caption = `${chosen.emoji} ${chosen.title}\n\n${chosen.fact}\n\n🤖 This Reel was created using AI-generated visuals.\n\n#BeastlyFacts #AnimalFacts #${chosen.animal.replace(/\s+/g, '')} ${dayHashtag} #NatureLovers #AnimalScience #AIGenerated`;

    // Generate video using Base44 GenerateVideo
    console.log('Generating video for:', chosen.animal);
    const videoResult = await base44.asServiceRole.integrations.Core.GenerateVideo({
      prompt: `Stunning cinematic footage of a ${chosen.animal} in its natural habitat. Close-up wildlife documentary style, dramatic lighting, vivid colors, smooth camera movement, high quality nature film. No text overlays.`,
      label: `${chosen.animal} Reel`
    });
    const videoUrl = videoResult.url;
    console.log('Generated video URL:', videoUrl);

    // Get Instagram access token + user ID
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("instagram");
    const meRes = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
    const meData = await meRes.json();
    console.log('ME response:', meData);
    if (!meData.id) {
      return Response.json({ error: 'Could not get Instagram user ID', details: meData }, { status: 500 });
    }
    const igUserId = meData.id;

    // Step 1: Create Reel container
    const containerRes = await fetch(`https://graph.instagram.com/${igUserId}/media`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        media_type: 'REELS',
        video_url: videoUrl,
        caption,
        share_to_feed: true,
        access_token: accessToken
      })
    });
    const containerData = await containerRes.json();
    console.log('Reel container response:', containerRes.status, JSON.stringify(containerData));

    if (!containerData.id) {
      return Response.json({ error: 'Failed to create Reel container', details: containerData }, { status: 500 });
    }

    // Step 2: Wait until Reel is processed (reels take longer than images)
    await waitForContainer(containerData.id, accessToken);

    // Step 3: Publish
    const publishRes = await fetch(`https://graph.instagram.com/${igUserId}/media_publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ creation_id: containerData.id, access_token: accessToken })
    });
    const publishData = await publishRes.json();
    console.log('Reel publish response:', publishRes.status, JSON.stringify(publishData));

    if (!publishData.id) {
      return Response.json({ error: 'Failed to publish Reel', details: publishData }, { status: 500 });
    }

    return Response.json({ success: true, post_id: publishData.id, fact: chosen.title, video_url: videoUrl, day: dayName });
  } catch (error) {
    console.error('Error in postAnimalFactReel:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});