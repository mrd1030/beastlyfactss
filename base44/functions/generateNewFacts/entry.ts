import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// All existing fact titles — keep this in sync with src/lib/data/facts.js
const EXISTING_TITLES = [
  "Three Hearts of Love","Spiny Situation","Century Talkers","Not-So-Related Pandas","Mood Ring Lizards",
  "Purring Bunnies","Dolphin Name Tags","Tongue Sniffers","Headbutt Means Love","Crow Detectives",
  "Immortal Jellyfish","Mantis Shrimp Vision","Elephants Mourn","Axolotl Superpowers","Wombat Cube Poop",
  "Honeybee Democracy","Sea Otter Hand-Holding","Gecko Toe Magic","Virgin Birth Dragons","Breath-Holding Sloths",
  "Pink From Shrimp","Dads Give Birth","Egg-Laying Mammal","The Chillest Animal","Indestructible Water Bears",
  "Unicorn of the Sea","22-Hour Sleepers","Taste With Their Feet","Arm Regeneration Masters","Super-Fast Hearts",
  "Spit Happens","Walking Pinecones","Underwater Makeover","10kg Hearts","Black Skin, Clear Fur",
  "Identical Quadruplets","Frozen But Alive","Balloon Defense","Months Without Eating","The Wave of Peace",
  "Tail Fat Reserves","Rediscovered in 1994","Color Means Communication","Three Eyelids","Unique Nose Prints",
  "Dogs Dream Too","Born Blind and Deaf","Mental Fatigue is Real","Meow is Just for Us","Healing Purr",
  "Always Landing Right","Lactose Intolerant Cats","70% of Life Asleep","Parrots Need Company",
  "Rabbits Need Exercise","Guinea Pigs Are Social","100-Year Commitment","Mimics Everything","Electric Sense",
  "Crow Tool Users","Hippo Sunscreen","Ants Farm Fungi","Mirror Test Passers","Sky-High Sleepers",
  "Finger-Snapping Shrimp","No Two Stripes Alike","Wolves Change Rivers","Velvet Antlers Grow Fast",
  "Born Male, Die Female","Snake Venom? No Thanks","Nature's Sound Thief","Hypnotic Skin",
  "The Ultimate Impostor","24 Eyes, Full Colour","Regional Accents","Hear With Their Feet",
  "Boiling Chemical Spray","Magpie Self-Awareness","Secrets in the Sound","Glimmer in the Dark",
  "Color-Changing Camouflage","The Tiny Yet Mighty","Silent Signals","Dancing Crickets",
  "Multiple Personality Parrots","The Tardigrade Resilience","Sharks Can Be Chatty","Chameleon Color Change",
  "Frog Rainmakers","Reptile Alarm Clock","The Snack Time Ant","Sloth Speedsters","Singing Spiders",
  "Surprising Sea Sponges","Octopus Ink Defense","The Purring Lemur","Birds Can Count","Frog Freeze",
  "Fluffy Fish Friends","Butterfly Birthdays","Bouncing Buddies","Silent Swimmers","Swimmers in the Desert",
  "Feline Mustache","Glowing Oceans, No Joke!","Mission Impossible Tails","Egg Layers of Mystery",
  "Armored Squirrels","Underwater Fireworks","Invisible Wings","Survival Specialists","Cuddle Drones",
  "Super Sneaky Narwhal","Rollercoaster Tails","Electric Eel Shock","Climbing the Walls","Can't Stop Purring",
  "Shrimp Anemone Alliance",
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Parse optional body params: { count: 5, existingIds: [...] }
    let body = {};
    try { body = await req.json(); } catch (_) {}
    const count = body.count || 5;
    const extraTitles = Array.isArray(body.existingTitles) ? body.existingTitles : [];
    const allExistingTitles = [...EXISTING_TITLES, ...extraTitles];

    const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt: `Generate exactly ${count} unique, surprising, and scientifically accurate animal facts suitable for a wildlife/pet education website called Beastly Facts.

Rules:
- Each fact must be about a DIFFERENT animal
- Do NOT use any of these already-published titles: ${allExistingTitles.slice(-60).join(', ')}
- Facts should be genuinely surprising and written in an engaging, fun tone
- Keep each fact to 2-3 sentences max
- Choose animals from a wide variety: mammals, birds, reptiles, ocean creatures, insects, exotic pets, etc.
- Categories must be one of: Mammals, Birds, Reptiles, Ocean, Weird & Wonderful, Dogs & Cats

Return a JSON object with a "facts" array of ${count} objects.`,
      response_json_schema: {
        type: "object",
        properties: {
          facts: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title:    { type: "string", description: "Short catchy 2-5 word title" },
                animal:   { type: "string", description: "Animal name" },
                emoji:    { type: "string", description: "One relevant emoji" },
                category: { type: "string", enum: ["Mammals", "Birds", "Reptiles", "Ocean", "Weird & Wonderful", "Dogs & Cats"] },
                fact:     { type: "string", description: "The full fact, 2-3 sentences" }
              },
              required: ["title", "animal", "emoji", "category", "fact"]
            }
          }
        }
      }
    });

    const newFacts = result.facts || [];

    // Build the JS snippet to append to facts.js
    // Each fact is a plain object — caller uses the nextId to assign sequential IDs
    const nextId = body.nextId || 119; // default: first id after the 118 baked-in facts
    const factsWithIds = newFacts.map((f, i) => ({
      id: nextId + i,
      ...f,
      image: f.emoji,
    }));

    // Produce the array entries as a JS source string, ready to paste into facts.js
    const jsEntries = factsWithIds.map(f =>
      `  { id: ${f.id}, title: ${JSON.stringify(f.title)}, emoji: ${JSON.stringify(f.emoji)}, animal: ${JSON.stringify(f.animal)}, category: ${JSON.stringify(f.category)}, fact: ${JSON.stringify(f.fact)}, image: ${JSON.stringify(f.emoji)} }`
    ).join(',\n');

    return Response.json({
      success: true,
      count: factsWithIds.length,
      facts: factsWithIds,
      // Paste these lines into the facts array in src/lib/data/facts.js
      jsSnippet: jsEntries,
      instructions: "Copy the jsSnippet lines and append them inside the facts array in src/lib/data/facts.js before the closing bracket ].",
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});