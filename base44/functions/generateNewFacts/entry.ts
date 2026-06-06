import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Existing fact titles to avoid duplicates
const EXISTING_TITLES = [
  "Three Hearts of Love","Spiny Situation","Century Talkers","Not-So-Related Pandas","Mood Ring Lizards","Purring Bunnies","Dolphin Name Tags","Tongue Sniffers","Headbutt = I Love You","Crow Detectives","Immortal Jellyfish","Mantis Shrimp Vision","Elephants Mourn","Axolotl Superpowers","Wombat Cube Poop","Honeybee Democracy","Sea Otter Hand-Holding","Gecko Toe Magic","Virgin Birth Dragons","Breath-Holding Sloths","Pink From Shrimp","Dads Give Birth","Egg-Laying Mammal","The Chillest Animal","Indestructible Water Bears","Unicorn of the Sea","22-Hour Sleepers","Taste With Their Feet","Arm Regeneration Masters","Super-Fast Hearts","Spit Happens","Walking Pinecones","Underwater Makeover","10kg Hearts","Black Skin, Clear Fur","Identical Quadruplets","Frozen But Alive","Balloon Defense","Months Without Eating","The Wave of Peace","Tail Fat Reserves","Rediscovered in 1994","Color = Communication","Three Eyelids","Unique Nose Prints","Dogs Dream Too","Born Blind and Deaf","Mental Fatigue is Real","Meow is Just for Us","Healing Purr","Always Landing Right","Lactose Intolerant Cats","70% of Life Asleep","Parrots Need Company","Rabbits Need Exercise","Guinea Pigs Are Social","100-Year Commitment","Mimics Everything","Electric Sense","Crow Tool Users","Hippo Sunscreen","Ants Farm Fungi","Mirror Test Passers","Sky-High Sleepers","Finger-Snapping Shrimp","No Two Stripes Alike","Wolves Change Rivers","Velvet Antlers Grow Fast","Born Male, Die Female","Snake Venom? No Thanks","Nature's Sound Thief","Hypnotic Skin","The Ultimate Impostor","24 Eyes, Full Colour","Regional Accents","Hear With Their Feet","Boiling Chemical Spray",
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Fetch any already-generated dynamic fact titles to avoid duplicates
    const existing = await base44.asServiceRole.entities.DynamicFact.list('-created_date', 200);
    const existingTitles = [...EXISTING_TITLES, ...existing.map(f => f.title)];

    const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt: `Generate exactly 5 unique, surprising, and scientifically accurate animal facts suitable for a wildlife/pet education website called Beastly Facts.

Rules:
- Each fact must be about a DIFFERENT animal
- Do NOT use any of these already-published titles: ${existingTitles.slice(-50).join(', ')}
- Facts should be genuinely surprising and written in an engaging, fun tone
- Keep each fact to 2-3 sentences max
- Choose animals from a wide variety: mammals, birds, reptiles, ocean creatures, insects, exotic pets, etc.
- Categories must be one of: Mammals, Birds, Reptiles, Ocean, Weird & Wonderful, Dogs & Cats

Return a JSON array of 5 objects.`,
      response_json_schema: {
        type: "object",
        properties: {
          facts: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string", description: "Short catchy 2-5 word title" },
                animal: { type: "string", description: "Animal name" },
                emoji: { type: "string", description: "One relevant emoji" },
                category: { type: "string", enum: ["Mammals", "Birds", "Reptiles", "Ocean", "Weird & Wonderful", "Dogs & Cats"] },
                fact: { type: "string", description: "The full fact, 2-3 sentences" }
              },
              required: ["title", "animal", "emoji", "category", "fact"]
            }
          }
        }
      }
    });

    const newFacts = result.facts || [];
    const created = [];

    for (const f of newFacts) {
      const record = await base44.asServiceRole.entities.DynamicFact.create(f);
      created.push(record);
    }

    return Response.json({ success: true, created: created.length, facts: created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});