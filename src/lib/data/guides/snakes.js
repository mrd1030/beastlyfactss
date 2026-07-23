export const snakeGuides = [
  {
    id: "ball-python",
    name: "Ball Python",
    emoji: "🐍",
    difficulty: "Intermediate",
    petType: "Snakes",
    image: "/assets/guides/ball-python.jpg",
    tagline: "The gentle noodle that curls into a perfect ball when shy!",
    funFact: "Ball pythons can go up to 6 months without eating (though they shouldn't have to). When scared, they curl into a tight ball to protect their head, hence the name!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft PVC or wood enclosure", low: 150, high: 300 },
        { item: "Under-tank heater + thermostat", low: 40, high: 70 },
        { item: "Two snug hides", low: 15, high: 30 },
        { item: "Large soak-able water dish", low: 15, high: 25 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Infrared thermometer gun", low: 15, high: 30 },
        { item: "Coconut fiber or cypress mulch substrate", low: 20, high: 30 },
        { item: "Spray bottle", low: 5, high: 10 },
        { item: "Cork bark and branches", low: 20, high: 40 },
        { item: "Feeding tongs", low: 5, high: 10 },
      ],
      annual: [
        { item: "Frozen/thawed rats or mice", low: 100, high: 180 },
        { item: "Substrate replacement", low: 30, high: 50 },
        { item: "Electricity (heat)", low: 50, high: 90 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `Adult ball pythons require a minimum 4x2x2 ft enclosure (approximately 120 gallons equivalent). Smaller enclosures are frequently cited as the cause of the most common ball python husbandry problems: feeding refusals, chronic stress, and poor immune health. Despite their reputation as small snakes, ball pythons are muscular, heavy-bodied animals that need room to move, explore, and thermoregulate.

The thermal gradient is essential. Provide a warm side with belly heat of 88 to 92 degrees F (measured at the floor under the warm hide) using an under-tank heater on a thermostat, and an ambient cool side of 76 to 80 degrees F. The basking air temperature directly above the warm hide can reach 88 to 95 degrees F. An infrared temperature gun is the most accurate tool for measuring surface temperatures.

Humidity is a critical and frequently neglected parameter. Ambient humidity should stay at 50 to 60% and rise to 65 to 80% before and during shed. Low humidity causes retained shed, dehydration, and respiratory stress. Cypress mulch, coconut fiber, or a topsoil mix are all excellent substrate choices that hold humidity well. Avoid dry substrates like aspen for tropical species like ball pythons.

Two hides - one at the warm end and one at the cool end - are the minimum. Hides should be snug, sized so the snake just fits inside. A hide where the snake rattles around provides no security. Ball pythons in open, exposed spaces are chronically stressed animals, which is the root cause of the majority of feeding refusals in the hobby.`,
      diet: `Ball pythons eat appropriately sized frozen/thawed rodents. Prey should be approximately the same width as the snake's widest mid-body point. Feeding prey that is too large causes regurgitation, which is stressful and damages the esophagus if it happens repeatedly.

Always feed frozen/thawed prey, not live. Live rodents are dangerous - even mice have bitten and injured snakes during feeding. Thaw prey fully by placing it in a zip-lock bag in warm water for 20 to 30 minutes until it reaches 100 to 105 degrees F at the core. Use feeding tongs for every feeding. This builds the association between tongs and food in the snake's mind, not your hand.

Feeding schedule depends on age and size. Juveniles (under 300 grams) should eat every 5 to 7 days. Sub-adults eat every 7 to 10 days. Adults eat every 10 to 14 days. After feeding, leave the snake undisturbed for 48 to 72 hours to allow complete digestion. Handling within 48 hours of feeding risks regurgitation.

Feeding refusals are common in ball pythons, especially during winter months or breeding season, and do not automatically indicate illness. A healthy adult ball python can safely fast for 6 to 8 weeks. Before assuming illness, check temperatures, humidity, hide quality, and whether the snake recently shed. Offering a different prey type (e.g., switching from mouse to rat) sometimes resolves refusals.`,
      enrichment: `Ball pythons are more active and exploratory than their reputation suggests. When housed in correctly sized enclosures with proper thermal gradients, they regularly move between hides, investigate their environment, and soak in their water dish. Enrichment that supports these natural behaviors dramatically improves their wellbeing.

Provide branches for climbing - ball pythons are semi-arboreal, especially juveniles, and will use elevated branches when provided. Cork bark hides and rounds create varied hiding opportunities. A large water dish that the snake can fully coil in is essential for both hydration and thermoregulation. Many ball pythons spend extended time soaking before and during shed.

Leaf litter and varied substrate depths add texture to the enclosure floor and allow the snake to partially burrow, which is a natural behavior. A bioactive setup with live plants (pothos, bromeliads) is possible with ball pythons and creates a highly enriching environment.

Handle 2 to 3 times per week for 15 to 20 minutes once the snake is fully settled in its new home (usually 2 to 4 weeks after acquisition). Move slowly, support the body, and avoid rapid movements. Most ball pythons become remarkably calm and handleable with consistent, gentle interaction. Never handle within 48 hours of feeding or during shed.`,
      health: `Respiratory infections (RI) are one of the most common serious health problems in ball pythons and are almost always caused by temperatures that are too low or humidity that is too high without adequate ventilation. Signs include wheezing, clicking breathing sounds, mucus from the mouth or nostrils, open-mouth breathing, and head tilting (in severe cases). A respiratory infection requires veterinary treatment - typically antibiotics. Address the husbandry cause simultaneously or the infection will recur.

Mites are tiny external parasites (Ophionyssus natricis) that feed on the snake's blood. Signs include unusual soaking behavior, tiny black or red dots on the snake or in the water dish, and general restlessness. Mites spread rapidly between animals and require both enclosure decontamination and direct treatment of the snake. A reptile veterinarian can prescribe appropriate treatment. Quarantine any new snake for 60 to 90 days before introducing it to a collection.

Retained shed (dysecdysis) occurs when humidity is too low during shed. The most dangerous retained shed is on the eye caps (spectacles) - retained eye caps can cause permanent eye damage if not addressed. A humid hide (a hide with damp sphagnum moss) prevents most retained shed. Soak the snake in shallow lukewarm water for 20 to 30 minutes if retained shed is present, then gently roll the shed off.

Inclusion Body Disease (IBD) is a serious and fatal viral disease in boas and pythons caused by arenaviruses. Signs include neurological symptoms (head wobbling, inability to right itself, stargazing), regurgitation, and progressive neurological decline. There is no cure. It can spread to other boids through mites. Always quarantine new animals and source from reputable captive breeders.`,
      checklist: ["4x2x2 ft PVC or wood enclosure", "Under-tank heater + quality thermostat", "Two snug hides (warm and cool)", "Large water/soak dish", "Digital thermometer and hygrometer", "Coconut fiber or cypress mulch substrate", "Frozen/thawed rats or mice", "Feeding tongs", "Spray bottle for humidity boosts", "Cork bark and branches"],
    },
    faqs: [
      { q: "How big do ball pythons get?", a: "Female ball pythons typically reach 4 to 5 feet and 1,200 to 1,800 grams. Males are smaller, usually 3 to 3.5 feet and 800 to 1,200 grams. They are fully grown by 3 to 5 years of age and are one of the smallest python species, making them a manageable pet snake for most keepers." },
      { q: "How often do ball pythons eat?", a: "Feed juveniles (under 1 year) every 5 to 7 days and adults every 7 to 14 days. Ball pythons should eat frozen and thawed (pre-killed) rodents sized no wider than the thickest part of the snake. Always feed inside the enclosure and avoid handling within 48 hours of a meal to prevent regurgitation." },
      { q: "Why is my ball python not eating?", a: "Ball pythons are notorious for food refusals, which are often temporary and not medically concerning. Common causes include pre-shed (look for dull or bluish skin), breeding season from October through March (males especially), enclosure stress from incorrect temperatures or hides, or a prey-type change. A refusal of 2 to 4 weeks in an otherwise healthy adult is normal. Consult a vet if weight loss accompanies a refusal longer than 6 to 8 weeks." },
      { q: "Do ball pythons need humidity?", a: "Yes. Ball pythons require 60 to 80% ambient humidity to support healthy sheds and respiratory health. Humidity below 50% causes stuck shed and, over time, respiratory problems. A humid hide packed with damp sphagnum moss is essential. A sealed substrate like cypress mulch or coconut fiber helps maintain ambient humidity between mistings." },
      { q: "Are ball pythons good beginner snakes?", a: "Yes. Ball pythons are widely considered one of the best beginner snakes due to their small to medium size, slow movement, and generally calm temperament once acclimated. Their main challenge is occasional food refusals, which can worry new keepers but are usually not medically significant. Correct enclosure temperatures and hides resolve most husbandry-related behavioral issues." },
    ],
  },
  {
    id: "boa-constrictor",
    name: "Boa Constrictor",
    emoji: "🐍",
    difficulty: "Intermediate/Advanced",
    petType: "Snakes",
    image: "/assets/guides/boa-constrictor.jpg",
    tagline: "The powerful, graceful heavyweight of the pet snake world!",
    funFact: "Boa constrictors can sense the heartbeat of their prey using heat-sensitive pits. They literally feel your pulse!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "6x3x3 ft+ PVC or wood enclosure", low: 300, high: 600 },
        { item: "Heat source + quality thermostat", low: 50, high: 90 },
        { item: "Multiple large hides", low: 30, high: 60 },
        { item: "Large soak-able water dish", low: 25, high: 40 },
        { item: "Cypress mulch or coconut fiber substrate", low: 30, high: 50 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Sturdy climbing branches", low: 30, high: 50 },
        { item: "Mist system or spray bottle", low: 10, high: 20 },
      ],
      annual: [
        { item: "Frozen/thawed large prey items", low: 150, high: 300 },
        { item: "Substrate replacement", low: 50, high: 80 },
        { item: "Electricity (heat)", low: 70, high: 120 },
        { item: "Annual vet wellness check", low: 60, high: 100 },
      ],
    },
    sections: {
      housing: `Adult boa constrictors require a minimum 6x3x3 ft enclosure, and many adults - particularly female Colombian boas, which regularly exceed 8 ft - will benefit from 8x4x4 ft or larger. Boa constrictors are heavy-bodied, powerful snakes that deserve generous space. PVC or wooden enclosures retain heat and humidity far better than glass and are strongly preferred.

The thermal gradient is critical: a warm side with a basking spot of 88 to 92 degrees F (measured at the surface via infrared gun), an ambient warm-side air temperature of 80 to 84 degrees F, and a cool side of 76 to 80 degrees F. Use a quality thermostat on all heat sources. Never use heat rocks - they cause severe burns.

Humidity should be maintained at 50 to 70% in ambient conditions and raised to 70 to 80% during pre-shed periods. Cypress mulch, coconut fiber, and bioactive soil mixes are excellent substrates that hold humidity well. The substrate should be dry at the surface but retain moisture slightly deeper to allow humidity wicking.

Provide at least two hides large enough for the snake to fully conceal itself - a snake that cannot fully hide in its hide is a stressed snake. Juveniles are somewhat semi-arboreal and will use sturdy branches; adults are primarily terrestrial but appreciate elevated surfaces. A water dish large enough to soak in must always be available.`,
      diet: `Boa constrictors eat frozen/thawed prey exclusively - live prey is dangerous to the snake and ethically unnecessary. Juveniles eat appropriately sized mice, progressing to small rats, then large rats, and eventually to appropriately sized rabbits or large rats for adults. Prey should match the snake's widest mid-body diameter.

Feed juveniles every 7 to 10 days. Sub-adults every 10 to 14 days. Adults every 14 to 21 days. Boas have slower metabolisms than many snakes and do not need frequent feeding. Overfeeding leads to obesity, which stresses the cardiovascular system and shortens lifespan.

Always use feeding tongs and maintain the association between tongs and food. Allow 48 to 72 hours after feeding before handling to prevent regurgitation. Regurgitation is stressful and damages the esophagus. If a boa regurgitates, wait 2 weeks before attempting to feed again and reassess temperatures and prey size.

Fresh water in a large, clean dish must always be available. Change it at minimum twice per week. Many boas soak in their water dish, especially before shedding - this is normal and beneficial.`,
      enrichment: `Boa constrictors are often described as some of the most personable and manageable large snakes in the hobby. With consistent, calm handling from a young age, many individuals become genuinely relaxed and confident animals that seem comfortable with human interaction.

Provide sturdy branches for juvenile boas - they are significantly more arboreal as young animals. Large cork bark hides, varied substrate textures, and a water dish large enough to soak in constitute the core enrichment. Adults become increasingly terrestrial as they grow.

Handle regularly and with confidence. A bored, tense keeper makes a nervous snake. Move smoothly and support the full body length. Young boas may musque (release a foul-smelling secretion) initially - this reduces significantly with consistent handling. Most adult boas become very calm and curious animals.

Thermal enrichment - providing multiple temperature zones that the snake can choose between - is important. A snake that cannot regulate its own temperature is a stressed, immunosuppressed animal. Ensure the thermal gradient spans from 76 to 92 degrees F to give the boa full control over its thermoregulation.`,
      health: `Scale rot (necrotic dermatitis) is caused by chronic exposure to damp substrate or inadequate temperatures. It begins as discolored, soft, blistered scales and progresses to deep tissue infection if untreated. Keep substrate dry at the surface and temperatures correct. Any scale rot that does not respond to husbandry corrections within days requires veterinary antibiotics.

Respiratory infections result from temperatures that are too low, excess humidity without adequate ventilation, or both. Signs include wheezing, mucus from the mouth and nostrils, labored breathing, and lethargy. Respiratory infections in boas require veterinary antibiotics. Address the husbandry issue that caused the infection simultaneously.

Inclusion Body Disease (IBD) is a serious and fatal viral disease in boas and pythons caused by arenaviruses. It presents as neurological symptoms (head wobbling, stargazing, inability to right itself), chronic regurgitation, and progressive decline. There is no treatment. IBD spreads through mites. Source only from reputable captive breeders, quarantine all new animals for 60 to 90 days, and control mites aggressively.

Annual veterinary wellness checks are strongly recommended, particularly for adults. A reptile vet with experience in large snakes should be identified before acquisition. Boas can live 20 to 30 years - this is a multi-decade commitment.`,
      checklist: ["6x3x3 ft+ PVC or wood enclosure", "Heat source with quality thermostat", "Multiple large hides", "Large water dish (soak-able)", "Cypress mulch or coconut fiber substrate", "Frozen/thawed large prey items", "Digital thermometer and hygrometer", "Sturdy climbing branches", "Feeding tongs", "Quality mist system or spray bottle"],
    },
    faqs: [
      { q: "How big do boa constrictors get?", a: "Common boas (Boa imperator) typically reach 5 to 8 feet as adults, with females growing significantly larger than males. Females commonly reach 6 to 8 feet; males stay at 5 to 6 feet. At maturity, common boas are muscular and heavy-bodied - a 7-foot female can weigh 15 to 20 pounds. True South American Boa constrictor constrictors grow larger still, commonly reaching 8 to 10 feet. Their adult size is the primary reason prospective owners must research carefully before committing." },
      { q: "Are boa constrictors dangerous?", a: "Healthy adult boas command respect but are not inherently dangerous to experienced adult keepers. Bites from large individuals can cause significant lacerations from their many small, recurved teeth, and any large constrictor should never be handled alone. They do not attack people - bites almost always result from feeding responses or defensive reactions. Children and solo adult handling are the main risk scenarios. As constrictors, boas should never be draped unsupported around the neck." },
      { q: "How long do boa constrictors live?", a: "Boa constrictors are a long-term commitment. Well-cared-for boas routinely live 20 to 30 years in captivity, with documented individuals reaching 40 years. When acquiring a boa, you are making a multi-decade commitment. Their longevity makes proper research, appropriate housing investment, and a relationship with a reptile-experienced veterinarian especially important from day one." },
      { q: "How often do boa constrictors eat?", a: "Feed juvenile boas every 7 days and adults every 10 to 21 days depending on size. Adults commonly do well on a meal every 2 to 3 weeks. Always feed frozen and thawed prey - live rodents can seriously injure large constricting snakes. Prey should be no wider than the widest part of the snake's body. After a meal, avoid handling for 48 to 72 hours to prevent regurgitation." },
      { q: "Do boa constrictors need high humidity?", a: "Yes. Boa constrictors require 60 to 80% ambient humidity to support healthy sheds and respiratory health. A large water dish big enough to soak in helps maintain humidity and provides hydration. Cypress mulch and coconut fiber substrates retain moisture well. A humid hide packed with damp sphagnum moss is especially important during the shedding cycle. Humidity consistently below 50% causes stuck shed and contributes to respiratory infections over time." },
      { q: "What's the difference between a boa and a python?", a: "They're different families entirely, despite both being large, non-venomous constrictors that are frequently confused for each other. The clearest distinction: boas give live birth (the babies emerge fully formed), while pythons lay eggs and often coil around the clutch to incubate them. Geographically, boas are native to the Americas (plus Madagascar and a few Pacific islands), while pythons are native to Africa, Asia, and Australia - the two families never naturally overlapped until the exotic pet trade and reptile keeping brought them together. Ball Pythons and Burmese Pythons are pythons; the Boa Constrictor and Red-Tailed Boa are boas." },
    ],
  },
  {
    id: "california-kingsnake",
    name: "California Kingsnake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/california-kingsnake.jpg",
    tagline: "The boldly banded beginner snake that becomes a gem with handling!",
    funFact: "Kingsnakes are immune to the venom of rattlesnakes, copperheads, and cottonmouths, and they actively hunt and eat other snakes, including venomous ones! The name 'King' is well earned.",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft escape-proof enclosure", low: 130, high: 250 },
        { item: "Under-tank heater with thermostat", low: 35, high: 60 },
        { item: "Two snug hides", low: 15, high: 25 },
        { item: "Aspen or cypress mulch substrate", low: 15, high: 25 },
        { item: "Soak-able water dish", low: 10, high: 15 },
        { item: "Feeding tongs", low: 5, high: 10 },
        { item: "Digital thermometer", low: 15, high: 20 },
        { item: "Branches for enrichment", low: 15, high: 25 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 80, high: 150 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 4x2x2 ft enclosure is appropriate for most adult California kingsnakes. This species is active and curious and will use all available space meaningfully. California kingsnakes are determined, persistent escape artists - they methodically test every seam, hinge, and gap. A lockable lid is essential. Check all seams regularly.

Provide a warm end with a surface temperature of 85 to 88 degrees F via an under-tank heater on a thermostat, and a cool end at 72 to 75 degrees F. Two snug hides - one at each end - are required. Aspen shavings or cypress mulch work well as substrate. Ambient humidity of 30 to 50% is appropriate. A moist hide with damp sphagnum moss supports healthy shedding.

Fresh water in a soak-able dish must always be available, changed at least twice weekly.`,
      diet: `California kingsnakes are typically excellent, reliable feeders. Feed appropriately sized frozen/thawed mice - prey width should match the snake's widest mid-body. Always use feeding tongs at every feeding. Feed juveniles every 5 to 7 days, sub-adults every 7 to 10 days, adults every 10 to 14 days. Allow 48 to 72 hours after feeding before handling.

Thaw frozen prey fully in warm water until the core reaches 100 to 105 degrees F. Never feed live prey - it is dangerous to the snake and ethically unnecessary. If a kingsnake regurgitates, wait 2 full weeks before the next feeding attempt and reassess temperatures and prey size.

Note that kingsnakes are ophiophagous (snake-eaters) in the wild. Never house with other snakes under any circumstances.`,
      enrichment: `California kingsnakes are active explorers that investigate every inch of their enclosure. Provide branches for climbing, multiple hides in different sizes and shapes, cork bark pieces, and a water dish large enough to soak in. Rearranging the enclosure layout periodically gives the snake new territory to explore.

Handle regularly and with confidence. Juvenile California kings often musk and may strike defensively. This typically diminishes quickly with consistent calm handling. Most adults become very handleable snakes. Remain calm and still during any defensive displays - panicked movements escalate the snake's response.`,
      health: `California kingsnakes are very hardy when husbandry is correct. Respiratory infections from cold, damp conditions are the primary concern: signs include wheezing and mucus. Retained shed from low humidity is the second most common issue - the moist hide prevents it. Retained eye caps are the most serious form: soak and gently remove, or seek veterinary assistance.

Escape prevention is a practical safety issue - an escaped kingsnake faces cold, dehydration, and household hazards. Inspect all enclosure seals regularly. Annual wellness checks are recommended for all snakes even when they appear healthy.`,
      checklist: [
        "4x2x2 ft escape-proof enclosure (lockable lid)",
        "Under-tank heater with thermostat (85 to 88 degrees F warm end)",
        "Two snug hides (warm and cool ends)",
        "Aspen or cypress mulch substrate",
        "Shallow water dish (soak-able)",
        "Frozen/thawed appropriately-sized mice",
        "Feeding tongs",
        "Digital thermometer",
        "Branches for enrichment",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "Are California kingsnakes immune to snake venom?", a: "Yes. California kingsnakes are ophiophagous - they eat other snakes in the wild, including venomous species like rattlesnakes, copperheads, and cottonmouths, to whose venom they are largely immune. The name 'King' reflects this apex predatory status. Never house with other snakes; they will attempt to eat enclosure mates regardless of species." },
      { q: "How big do California kingsnakes get?", a: "Adults typically reach 3 to 4 feet in total length - a manageable, handleable size that makes them popular with first-time snake owners and experienced collectors alike. They are slender, muscular snakes that feel confident in the hand. They reach adult size by 2 to 3 years of age." },
      { q: "Are California kingsnakes good beginner snakes?", a: "Yes. They feed reliably on frozen/thawed prey, tame down quickly with consistent calm handling, and have straightforward temperature and humidity requirements. Juvenile kingsnakes can be defensive - musking, hissing, or striking - but this diminishes significantly with regular interaction. Most adults become calm, handleable snakes within weeks to months of consistent work." },
      { q: "What humidity do California kingsnakes need?", a: "Low to moderate - 30 to 50% ambient humidity is appropriate. This is generally achievable at room humidity in most homes without additional measures. The most important shedding support is a moist hide (a box packed with damp sphagnum moss) available at all times. Retained shed on eye caps is preventable with consistent access to a humid microhabitat." },
      { q: "Why is my California kingsnake musking?", a: "Musking - releasing a pungent musk from cloacal glands - is a normal defensive behavior in juveniles and newly acquired adults. It is not an indication of illness or permanent temperament. Most California kingsnakes reduce or eliminate musking with consistent, calm handling over weeks. Never react to musking with fear or by putting the snake down - this reinforces the behavior." },
    ],
  },
  {
    id: "corn-snake",
    name: "Corn Snake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/corn-snake.jpg",
    tagline: "The curious, colorful beginner snake that never stops exploring!",
    funFact: "Corn snakes are named for their distinctive belly pattern that resembles Indian corn kernels, not because they're found in corn fields (though they are)!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "4x2x2 ft escape-proof enclosure", low: 130, high: 250 },
        { item: "Heat source with thermostat", low: 35, high: 60 },
        { item: "Two hides", low: 15, high: 25 },
        { item: "Soak-able water dish", low: 10, high: 15 },
        { item: "Aspen or coconut fiber substrate", low: 15, high: 25 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 30 },
        { item: "Branches for climbing", low: 15, high: 25 },
        { item: "Feeding tongs", low: 5, high: 10 },
      ],
      annual: [
        { item: "Frozen/thawed mice and small rats", low: 80, high: 150 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 4x2x2 ft enclosure is appropriate for most adult corn snakes. Despite being considered a beginner species, corn snakes benefit from generous space - they are active, curious, and will use every inch of an enriched enclosure. Corn snakes are notorious and highly capable escape artists. Ensure every single seam, lid hinge, and ventilation gap is secured. They can compress their bodies and squeeze through openings that seem impossibly small.

Provide a warm end with a surface temperature of 85 to 88 degrees F using an under-tank heater on a thermostat, and a cool end at approximately 72 to 75 degrees F. Corn snakes originate from the eastern United States, where temperatures are moderate, and they do not require the extreme heat that tropical or desert species need. A simple warm/cool gradient with two hides - one at each end - meets their thermoregulatory needs.

Humidity should stay at 40 to 60%. This is generally achievable at ambient room humidity in most homes. During shed, raise humidity slightly by adding a moist hide (a hide box with damp sphagnum moss). Aspen shavings are an excellent substrate: they hold burrow tunnels, are affordable, easy to spot-clean, and maintain appropriate humidity levels when not over-misted.

Corn snakes are semi-arboreal and will use elevated branches and perches, especially juveniles. Providing height and branching in the enclosure gives them an outlet for this natural behavior and makes the enclosure more enriching.`,
      diet: `Corn snakes eat appropriately sized frozen/thawed mice, or small rats as they grow. Prey should roughly match the widest point of the snake's mid-body - a slight bulge after feeding is normal and healthy; a dramatically distended body indicates prey is too large.

Feed juveniles every 5 to 7 days, sub-adults every 7 to 10 days, and adults every 10 to 14 days. Always thaw frozen prey fully in warm water until the core reaches approximately 100 degrees F before offering. Always use feeding tongs - every single feeding. This prevents the snake from associating your hand with food and dramatically reduces the chance of accidental strikes during handling.

Corn snakes are generally reliable, enthusiastic feeders. If a corn snake refuses food, consider whether it is in pre-shed (the skin and eyes will appear dull and bluish), whether it is cold (check temperatures), or whether the prey is too warm or too cold. Most refusals in otherwise healthy corn snakes resolve without intervention. Allow 48 to 72 hours after feeding before handling.

Fresh water in a clean, soak-able dish must be available at all times. Corn snakes drink regularly and often soak before shedding. Change the water at least twice per week and clean the dish thoroughly with a reptile-safe disinfectant weekly.`,
      enrichment: `Corn snakes are one of the most active and exploratory snakes in captivity. Given appropriate space, they investigate every corner of their enclosure, climb branches, burrow through substrate, and soak in their water dish. Enriching their environment significantly improves their quality of life compared to a bare enclosure with only a hide.

Provide branches at varying heights for climbing, multiple hides of different sizes and shapes, cork bark for climbing and hiding, and a water dish large enough to coil in. Covering the exterior walls of the enclosure with backgrounds gives the snake a greater sense of security and reduces stress from seeing movement outside the enclosure constantly.

Corn snakes tame exceptionally well with consistent handling. Start with brief 5-minute sessions after the snake has been allowed to settle for 2 weeks following acquisition. Build up gradually to 15 to 30 minute sessions. Most corn snakes become remarkably calm and interactive - comfortable exploring their keeper's arms and shoulders without any defensiveness.

Substrate enrichment is underutilized. Providing aspen shavings deep enough to burrow in (3 to 4 inches), adding dried leaves on top, and hiding prey items in the substrate creates a more naturalistic and stimulating environment that supports natural foraging behavior.`,
      health: `Corn snakes are among the hardiest and most disease-resistant snakes available as pets. When husbandry is correct, they rarely develop serious health problems. The most common issues are all preventable with proper setup.

Respiratory infections result from temperatures that are too low, humidity that is too high without adequate ventilation, or both. Signs include wheezing, mucus from the mouth and nostrils, open-mouth breathing, and lethargy. Any suspected respiratory infection requires veterinary treatment. Address the underlying husbandry cause simultaneously to prevent recurrence.

Retained shed is caused by low humidity and/or lack of a moist hide. A complete shed should come off in one piece. Retained shed on the eye caps is the most serious - it blurs vision and if left in place can cause eye damage. Soaking in shallow lukewarm water for 20 to 30 minutes softens retained shed for gentle removal.

Escape prevention is not a health issue per se, but an escaped corn snake is at serious risk from dehydration, temperature extremes, household hazards, and being stepped on. Check the enclosure for gaps regularly. A corn snake that escapes and is not found within 24 to 48 hours has a dramatically reduced chance of being recovered safely.`,
      checklist: ["4x2x2 ft escape-proof enclosure", "Heat source with thermostat (85 to 88 degrees F warm end)", "Two hides (warm and cool)", "Water dish (soak-able size)", "Aspen or coconut fiber substrate", "Frozen/thawed mice and small rats", "Feeding tongs", "Branches for climbing", "Digital thermometer", "Secure, lockable lid"],
    },
    faqs: [
      { q: "How big do corn snakes get?", a: "Adult corn snakes typically reach 4 to 5 feet, with females often slightly larger than males. They are slender snakes and never feel heavy or cumbersome at full size. Juveniles hatch at about 8 to 12 inches and reach adult size by 2 to 3 years, though they continue filling out slowly until age 4 to 5." },
      { q: "Are corn snakes good beginner snakes?", a: "Yes - corn snakes are widely regarded as one of the best beginner snakes available. They are active and curious rather than sedentary, which makes them more engaging to watch than many other colubrids. They feed reliably, tolerate handling well with regular interaction, and have straightforward temperature and humidity requirements. The main challenge is their legendary escape-artist reputation - every gap in a corn snake enclosure will eventually be found." },
      { q: "How often do corn snakes eat?", a: "Feed juvenile corn snakes every 5 to 7 days and adults every 10 to 14 days. Always feed frozen and thawed prey sized to the widest part of the snake's body. Corn snakes are enthusiastic feeders and food-motivated, which also means they may strike at your hand if they smell prey - always wash hands before handling." },
      { q: "How long do corn snakes live?", a: "Corn snakes commonly live 15 to 20 years in captivity with proper care, and some individuals exceed 20 years. They are one of the longer-lived colubrid species. Longevity depends on consistent appropriate temperatures, annual fecal checks for parasites, and prompt veterinary care for any health concerns." },
      { q: "Do corn snakes need humidity?", a: "Corn snakes do well at 40 to 60% ambient humidity, which is achievable in most homes without additional measures. The most important provision is a humid hide - a box packed with damp sphagnum moss - available at all times and especially during the shedding cycle. Dry sheds from insufficient humidity are one of the most common corn snake health issues and can result in retained eye caps and constricting shed on the tail tip." },
    ],
  },
  {
    id: "hognose-snake",
    name: "Hognose Snake",
    emoji: "🐍",
    difficulty: "Intermediate",
    petType: "Snakes",
    image: "/assets/guides/hognose-snake.jpg",
    tagline: "The drama queen of snakes: all bluff and zero bite!",
    funFact: "When threatened, hognose snakes will flatten their neck, hiss, lunge (mouth closed), and if that fails, flip over and play dead complete with open mouth and tongue hanging out!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "36x18x18 in enclosure", low: 100, high: 180 },
        { item: "Under-tank heater + thermostat", low: 40, high: 70 },
        { item: "Warm, cool, and humid hides", low: 15, high: 30 },
        { item: "Digital thermometer and hygrometer", low: 15, high: 25 },
        { item: "Aspen or coconut fiber substrate", low: 15, high: 25 },
        { item: "Water dish", low: 8, high: 15 },
        { item: "Feeding tongs", low: 5, high: 10 },
        { item: "Branches and cork bark", low: 15, high: 30 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 60, high: 120 },
        { item: "Substrate replacement", low: 30, high: 50 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 36x18x18" or 36x18x12" enclosure with 4 to 6 inches of deep, loose substrate is the appropriate setup for an adult western hognose snake. Hognoses are fossorial (burrowing) animals that spend significant time underground in the wild. Deep substrate is not optional - it allows natural burrowing behavior, provides thermal insulation, and gives the snake psychological security.

Good substrate choices include aspen shavings, coconut fiber, organic topsoil (no fertilizers or perlite), or a mix of topsoil and playsand. The substrate should hold the shape of a burrow tunnel when the snake digs into it. Avoid sand-only substrates (too loose) and cedar or pine shavings (toxic resin).

Provide a warm hide with a belly-heat surface temperature of 85 to 90 degrees F on an under-tank heater with a thermostat, a cool hide at 72 to 76 degrees F, and a humid hide (a hide box with damp sphagnum moss) for shedding support. Ambient humidity of 40 to 60% is appropriate, rising during shed.

A secure, lockable lid is essential. Hognose snakes are surprisingly capable escape artists despite their stocky build. Ensure all ventilation gaps are snake-proof.`,
      diet: `Western hognose snakes eat frozen/thawed rodents (appropriately sized mice) as adults. Prey size should match the snake's widest mid-body point. Always use feeding tongs and always feed frozen/thawed prey - live prey can injure the snake.

Hatchlings and young juveniles can be notoriously reluctant feeders. In the wild, hognose snakes specialize in eating toads, and some hatchlings imprint strongly on amphibian prey. Common solutions include scenting prey with toad or frog shed, offering a smaller prey item, feeding in a separate enclosure, offering at night in a completely dark environment, and leaving pre-killed prey overnight. Most hognoses that refuse initially will convert to unscented mice within a few attempts. Patience is essential - stressing the snake by repeated handling or forcing prey makes refusals worse.

Adults should eat every 7 to 14 days. Juveniles every 5 to 7 days. After feeding, allow 48 to 72 hours before handling. Always provide fresh water in a soak-able dish.

Some hognose snakes are dramatic bluffers that flatten their necks, hiss loudly, and fake strike during feeding. This is normal defensive behavior. Use tongs consistently and do not offer prey by hand.`,
      enrichment: `Deep, burrowing substrate is the single most important enrichment for hognose snakes. Providing 4 to 6 inches of appropriate substrate allows them to burrow, thermoregulate underground, and behave naturally. A hognose snake in a bare enclosure with only paper towel substrate is a deprived animal.

Add cork bark hides at both temperature ends, branches for occasional climbing, and leaf litter or dried botanicals on the substrate surface for natural texture and cover. Change up the layout occasionally to provide novelty - hognose snakes investigate new objects with interest.

Hognose snakes are crepuscular, most active in the morning and evening. Handle regularly and gently to build trust. Many hognoses go through an initial defensive phase (dramatic bluffing displays, flattened neck, hissing, playing dead) that diminishes significantly with consistent calm handling. Most adult western hognoses become quite calm and handleable.

The famous death-feigning behavior (rolling upside down, going limp, mouth gaping) is one of the most charming and memorable aspects of this species. It is a hardwired defensive response and not a sign of illness or distress.`,
      health: `Feeding refusals are the most common concern with new hognose snakes and are usually behavioral rather than medical. Before assuming illness, ensure temperatures are correct, the snake is not in pre-shed, and that you have tried multiple feeding strategies. An established hognose that suddenly stops eating after months of reliable feeding warrants a veterinary assessment.

Retained shed - especially on the eye caps - results from low humidity. A moist hide filled with damp sphagnum moss prevents most shedding problems. If retained shed occurs, soak in shallow lukewarm water for 20 to 30 minutes before attempting gentle removal.

Wild-caught hognose snakes frequently carry internal parasites (pinworms, nematodes, coccidia). Always obtain a fecal exam from a reptile vet within 30 days of acquisition for any wild-caught or unknown-origin animal. Captive-bred animals from reputable breeders are far less likely to carry significant parasite loads.

Respiratory infections can result from temperatures that are too low or a substrate that is too damp without adequate ventilation. Signs include wheezing, mucus, and open-mouth breathing. Any suspected respiratory infection requires antibiotic treatment from a reptile veterinarian.`,
      checklist: ["36x18x18\" enclosure", "Deep substrate (4 to 6 inch aspen or coconut fiber)", "Thermostat-controlled heat source", "Warm and cool hides", "Humid hide with damp sphagnum", "Digital thermometer and hygrometer", "Frozen/thawed mice", "Feeding tongs", "Water dish", "Branches and cork bark"],
    },
    faqs: [
      { q: "Do hognose snakes really play dead?", a: "Yes, and it's one of the most dramatic defense displays in the reptile world. When threatened, a hognose snake flattens its neck, hisses loudly, and lunges with a closed mouth. If that fails, it rolls onto its back, opens its mouth, lets its tongue hang out, and goes completely limp - even emitting a musky odor. Remarkably, if you flip it right-side up, it rolls back over to maintain the death display, which somewhat undermines the performance." },
      { q: "Are hognose snakes venomous?", a: "Technically yes, but functionally no for humans. Hognose snakes produce a mild rear-fanged venom used to subdue amphibian prey, particularly toads. The venom is entirely harmless to humans - bites, which are rare and almost always defensive, cause minimal local irritation at most. A hognose snake's first line of defense is always dramatic bluffing, not biting. They are handled safely by keepers worldwide and are considered medically insignificant." },
      { q: "How big do hognose snakes get?", a: "Western hognose snakes - the most common pet species - are modest in size. Females typically reach 2 to 3 feet; males stay at 1 to 1.5 feet. Eastern hognose snakes can reach 2 to 4 feet. Both sexes are fully grown by 2 to 3 years. The notable size difference between males and females in the western species is more pronounced than in most other pet snakes." },
      { q: "How often should I feed my hognose snake?", a: "Feed juvenile hognose snakes every 5 to 7 days and adults every 7 to 14 days. Always offer frozen and thawed prey - live rodents can injure snakes. Prey size should not exceed the widest part of the snake's body. Western hognose snakes can be finicky eaters; scenting prey with toad or fish can encourage reluctant feeders." },
      { q: "Do hognose snakes need a humid hide?", a: "Yes. All hognose snakes benefit from a humid hide - a box packed with damp sphagnum moss - especially during pre-shed. Western hognose snakes prefer drier ambient conditions (40 to 60% humidity) than many other colubrids, but a moist microhabitat for shedding is still essential. Without it, retained shed on the eye caps is a common and preventable problem." },
    ],
  },
  {
    id: "milk-snake",
    name: "Milk Snake",
    emoji: "🐍",
    difficulty: "Beginner",
    petType: "Snakes",
    image: "/assets/guides/milk-snake.jpg",
    tagline: "The brilliantly banded mimic that wears venomous colors with no venom required!",
    funFact: "Milk snakes are harmless, but their red, black, and yellow banding mimics the deadly coral snake: a survival trick called Batesian mimicry. The rhyme 'Red touch yellow, kill a fellow; red touch black, friend of Jack' helps tell them apart!",
    // Rough starting ranges, not verified current pricing - needs a review pass.
    costs: {
      setup: [
        { item: "3x1.5x1.5 ft to 4x2x2 ft enclosure", low: 100, high: 250 },
        { item: "Under-tank heater with thermostat", low: 35, high: 60 },
        { item: "Multiple snug hides", low: 15, high: 25 },
        { item: "Aspen shavings substrate", low: 15, high: 25 },
        { item: "Soak-able water dish", low: 8, high: 15 },
        { item: "Digital thermometer", low: 15, high: 20 },
        { item: "Cork bark and branches", low: 15, high: 25 },
        { item: "Feeding tongs", low: 5, high: 10 },
      ],
      annual: [
        { item: "Frozen/thawed mice", low: 70, high: 130 },
        { item: "Substrate replacement", low: 25, high: 40 },
        { item: "Electricity (heat)", low: 40, high: 70 },
        { item: "Annual vet wellness check", low: 50, high: 90 },
      ],
    },
    sections: {
      housing: `A 3x1.5x1.5 ft to 4x2x2 ft enclosure suits most adult milk snakes depending on subspecies - they range from a compact 2 ft (scarlet king subspecies) to over 5 ft (Sinaloan milk snake). Milk snakes are secretive, semi-fossorial animals that spend most of their time hidden. Multiple snug hides are essential.

Provide a warm end (85 to 88 degrees F surface temperature via UTH on thermostat) and a cool end (72 to 75 degrees F). Maintain 40 to 60% humidity. Aspen shavings are an excellent substrate: they allow natural burrowing behavior, maintain appropriate humidity, and spot-clean easily. Provide 3 to 4 inches of substrate depth for burrowing.

A secure, lockable lid is non-negotiable. Milk snakes test every seam consistently and are skilled escape artists. Check all enclosure seals regularly.`,
      diet: `Feed appropriately sized frozen/thawed mice every 7 to 10 days for juveniles, every 10 to 14 days for adults. Milk snakes are typically strong, reliable feeders. Always use feeding tongs at every feeding - without exception.

Some subspecies and individual milk snakes can be defensive or nippy as juveniles. This usually diminishes rapidly with regular, calm handling. The smell of prey on your hands can trigger feeding responses, so always wash hands before handling and feed with tongs. Allow 48 to 72 hours after feeding before handling.

Like kingsnakes, milk snakes are ophiophagous (snake-eaters) in the wild. Never house with other snakes.`,
      enrichment: `Milk snakes are semi-fossorial and spend much of their time burrowed in or hiding under substrate. Providing substrate deep enough to burrow in (3 to 4 inches of aspen), multiple hides at both temperature ends, cork bark rounds and pieces, and a water dish large enough to soak in meets their enrichment needs.

Milk snakes explore their enclosure actively during the evening and night. Rearranging hide positions and adding varied objects (cork bark, small logs) periodically provides novelty. Handle regularly for taming - most adults become very calm and handleable with consistent interaction.`,
      health: `Milk snakes are extremely hardy when husbandry is correct. Respiratory infections from cold or damp conditions and retained shed from too-low humidity are the primary concerns. A moist hide with damp sphagnum moss prevents most shedding issues.

Their secretive nature means illness can be hidden until advanced. Monitor feeding response, alertness, and activity level as baseline health indicators. Any sudden change in these warrants investigation. Annual wellness checks with a reptile vet are recommended even for apparently healthy animals.`,
      checklist: [
        "3x1.5x1.5 ft to 4x2x2 ft escape-proof enclosure",
        "Under-tank heater with thermostat",
        "Multiple snug hides (warm and cool ends)",
        "Aspen shavings substrate (3 to 4 inch deep for burrowing)",
        "Shallow soak-able water dish",
        "Frozen/thawed appropriately-sized mice",
        "Feeding tongs",
        "Digital thermometer",
        "Cork bark and branches",
        "Reptile-savvy vet contact",
      ],
    },
    faqs: [
      { q: "Are milk snakes venomous?", a: "No. Milk snakes are completely harmless. Their vivid red, black, and yellow banding mimics the pattern of the coral snake - a venomous species - in a survival strategy called Batesian mimicry. The old rhyme helps: 'Red touches black, friend of Jack; red touches yellow, kill a fellow.' On a milk snake, red touches black. They have no venom and pose no danger to humans." },
      { q: "How big do milk snakes get?", a: "Size varies significantly by subspecies. The Eastern milk snake reaches 2 to 3 feet; Sinaloan milk snakes (one of the most popular) can reach 4 to 5 feet; the Mexican milk snake stays around 2.5 to 3 feet. Choose your enclosure and prey size based on your specific subspecies. All are slender, graceful snakes." },
      { q: "How do I tell a milk snake from a coral snake?", a: "Use the rhyme: 'Red touches black, friend of Jack; red touches yellow, kill a fellow.' Milk snakes have red bands bordered by black bands. Coral snakes have red bands bordered by yellow bands. This rhyme applies to North American species. In all cases, never handle an unidentified snake in the wild." },
      { q: "Are milk snakes good beginner snakes?", a: "Yes - once established, they are strong feeders and straightforward to care for. Juvenile milk snakes can be nippy initially, but this diminishes rapidly with consistent calm handling. Their smaller size (compared to ball pythons or corn snakes) makes them easy to manage. Ensure a secure, lockable lid - milk snakes are persistent escape artists that will test every seam." },
      { q: "How long do milk snakes live?", a: "12 to 20 years in captivity with appropriate care - correct temperatures, consistent prey, humidity appropriate for the subspecies, and annual wellness checks with a reptile-savvy veterinarian. A milk snake acquired as a hatchling is a long-term commitment." },
    ],
  },
];
