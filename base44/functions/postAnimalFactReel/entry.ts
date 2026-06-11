import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// ── Single source of truth ──────────────────────────────────────────────────
// Keep this in sync with src/lib/data/facts.js (id + animal + emoji + fact + title)
const facts = [
  { id: 1, title: "Three Hearts of Love", emoji: "🐙", animal: "Octopus", category: "Ocean", fact: "Octopuses have three hearts. Two pump blood to the gills, and one pumps it to the rest of the body. When they swim, the heart that delivers blood to the body actually stops beating, which is why they prefer crawling!" },
  { id: 2, title: "Spiny Situation", emoji: "🦔", animal: "Hedgehog", category: "Mammals", fact: "Hedgehogs have between 5,000 and 7,000 spines on their back! Each spine lasts about a year before it falls out and a new one grows in its place. Baby hedgehogs are born with their spines just below the skin." },
  { id: 3, title: "Century Talkers", emoji: "🦜", animal: "Parrot", category: "Birds", fact: "Some parrot species can live over 80 years! The oldest known parrot, Cookie the cockatoo, lived to be 83. They can also learn over 100 words and even understand context." },
  { id: 4, title: "Not-So-Related Pandas", emoji: "🐼", animal: "Red Panda", category: "Mammals", fact: "Despite their name, red pandas are NOT related to giant pandas. They are actually more closely related to raccoons, skunks, and weasels! They were named 'panda' nearly 50 years before the giant panda." },
  { id: 5, title: "Mood Ring Lizards", emoji: "🦎", animal: "Bearded Dragon", category: "Reptiles", fact: "Bearded dragons can change color based on their mood and body temperature! They darken when cold or stressed, and lighten up when warm and happy. Their 'beard' puffs out and turns black when they're showing off." },
  { id: 6, title: "Purring Bunnies", emoji: "🐰", animal: "Rabbit", category: "Mammals", fact: "Rabbits purr when they're happy! Unlike cats, they do it by softly grinding their teeth together. They also do 'binkies' (joyful leaps and twists in the air) when they're feeling playful." },
  { id: 7, title: "Dolphin Name Tags", emoji: "🐬", animal: "Dolphin", category: "Ocean", fact: "Each dolphin develops its own unique signature whistle, essentially a name! They use these to call out to specific friends. Dolphins can remember these 'names' for over 20 years." },
  { id: 8, title: "Tongue Sniffers", emoji: "🐍", animal: "Snake", category: "Reptiles", fact: "Snakes smell with their tongues! They flick their forked tongue to collect chemical particles from the air, then press it into the Jacobson's organ on the roof of their mouth to 'read' the smells." },
  { id: 9, title: "Headbutt Means Love", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "When your cat headbutts you, it's called 'bunting' and it means they love and trust you! They have scent glands on their forehead, and bunting is their way of marking you as 'theirs.'" },
  { id: 10, title: "Crow Detectives", emoji: "🐦", animal: "Crow", category: "Birds", fact: "Crows can recognize individual human faces for years and will teach other crows who is 'friend' or 'foe.' They've been known to bring gifts to people who feed them, from shiny buttons to earrings!" },
  { id: 11, title: "Immortal Jellyfish", emoji: "🪼", animal: "Jellyfish", category: "Ocean", fact: "The Turritopsis dohrnii jellyfish is biologically immortal! When it gets old or stressed, it can revert its cells back to a younger state, essentially hitting the reset button on aging." },
  { id: 12, title: "Mantis Shrimp Vision", emoji: "🦐", animal: "Mantis Shrimp", category: "Ocean", fact: "Mantis shrimp have 16 types of color receptors (humans have just 3). They can see ultraviolet, infrared, AND polarized light. They also punch with the force of a bullet!" },
  { id: 13, title: "Elephants Mourn", emoji: "🐘", animal: "Elephant", category: "Mammals", fact: "Elephants hold funerals for their dead. They'll gently touch the bones of deceased family members with their trunks and stand vigil for hours. They've even been seen crying." },
  { id: 14, title: "Axolotl Superpowers", emoji: "🦎", animal: "Axolotl", category: "Weird & Wonderful", fact: "Axolotls can regenerate entire limbs, their heart, spinal cord, and even parts of their brain with zero scarring! Scientists study them hoping to unlock regeneration secrets for humans." },
  { id: 15, title: "Wombat Cube Poop", emoji: "🐻", animal: "Wombat", category: "Weird & Wonderful", fact: "Wombats produce cube-shaped poop! Their intestines have varying elasticity that molds their droppings into cubes so they don't roll away, perfect for territorial marking on rocks and logs." },
  { id: 16, title: "Honeybee Democracy", emoji: "🐝", animal: "Honeybee", category: "Weird & Wonderful", fact: "When honeybees need a new home, they hold a democratic vote! Scout bees dance to advertise locations, and the swarm 'votes' by joining the dance of their preferred spot until consensus is reached." },
  { id: 17, title: "Sea Otter Hand-Holding", emoji: "🦦", animal: "Sea Otter", category: "Ocean", fact: "Sea otters hold hands while sleeping so they don't drift apart! They also wrap themselves in kelp for the same reason. A group of otters floating together is adorably called a 'raft.'" },
  { id: 18, title: "Gecko Toe Magic", emoji: "🦎", animal: "Gecko", category: "Reptiles", fact: "Geckos can walk on walls and ceilings thanks to millions of tiny hair-like structures on their toes called setae. Each toe has about 500,000 of them, using molecular forces to stick to surfaces!" },
  { id: 19, title: "Virgin Birth Dragons", emoji: "🦎", animal: "Komodo Dragon", category: "Reptiles", fact: "Female Komodo dragons can reproduce without males through parthenogenesis! Their eggs develop into healthy offspring that are genetic clones of the mother." },
  { id: 20, title: "Breath-Holding Sloths", emoji: "🦥", animal: "Sloth", category: "Mammals", fact: "Sloths can hold their breath underwater for up to 40 minutes, longer than dolphins! They slow their heart rate to just one-third of normal to conserve oxygen." },
  { id: 21, title: "Pink From Shrimp", emoji: "🦩", animal: "Flamingo", category: "Birds", fact: "Flamingos are born gray and turn pink from the shrimp and algae they eat! The carotenoid pigments in their food are what give them their signature color." },
  { id: 22, title: "Dads Give Birth", emoji: "🐎", animal: "Seahorse", category: "Ocean", fact: "Seahorses are the only animals where the male gives birth! The female deposits eggs into the male's pouch, where he fertilizes and carries them until they hatch." },
  { id: 23, title: "Egg-Laying Mammal", emoji: "🦫", animal: "Platypus", category: "Weird & Wonderful", fact: "The platypus is one of the few mammals that lays eggs! It also has a venomous spur on its hind legs and can detect electric fields with its bill." },
  { id: 24, title: "The Chillest Animal", emoji: "🦫", animal: "Capybara", category: "Mammals", fact: "Capybaras are so relaxed they often let other animals sit on them: birds, monkeys, even caimans! They're the largest rodents in the world and native to South America." },
  { id: 25, title: "Indestructible Water Bears", emoji: "🐻", animal: "Tardigrade", category: "Weird & Wonderful", fact: "Tardigrades (water bears) can survive in space, extreme temperatures from -328 degrees F to 300 degrees F, and even being completely dried out for decades!" },
  { id: 26, title: "Unicorn of the Sea", emoji: "🐳", animal: "Narwhal", category: "Ocean", fact: "Narwhals have a long spiral tusk (up to 10 feet!) that is actually a tooth. Scientists believe they use it to sense water temperature and salinity." },
  { id: 27, title: "22-Hour Sleepers", emoji: "🐨", animal: "Koala", category: "Mammals", fact: "Koalas sleep up to 22 hours a day! Their diet of eucalyptus leaves is so low in nutrients and hard to digest that they need constant rest to conserve energy." },
  { id: 28, title: "Taste With Their Feet", emoji: "🦋", animal: "Butterfly", category: "Weird & Wonderful", fact: "Butterflies taste with their feet! They have taste receptors on their tarsi (feet) to check if a plant is suitable for laying eggs before they do." },
  { id: 29, title: "Arm Regeneration Masters", emoji: "⭐", animal: "Starfish", category: "Ocean", fact: "A single starfish arm can regenerate an entire new body! Some species can even split in half and grow into two complete starfish." },
  { id: 30, title: "Super-Fast Hearts", emoji: "🐦", animal: "Hummingbird", category: "Birds", fact: "A hummingbird's heart can beat up to 1,260 times per minute! Their wings also beat up to 80 times per second, allowing them to hover perfectly still." },
  { id: 31, title: "Spit Happens", emoji: "🦙", animal: "Alpaca", category: "Mammals", fact: "Alpacas spit when they're annoyed, threatened, or competing for food! It's their main defense mechanism and can travel up to 10 feet." },
  { id: 32, title: "Walking Pinecones", emoji: "🦔", animal: "Pangolin", category: "Weird & Wonderful", fact: "Pangolins are the only mammals covered in scales! When threatened, they roll into a tight ball, making them look like living pinecones." },
  { id: 33, title: "Underwater Makeover", emoji: "🐟", animal: "Blobfish", category: "Ocean", fact: "The blobfish only looks like a sad blob on land! In the deep ocean (where it lives), the pressure keeps it looking like a normal fish with a big nose." },
  { id: 34, title: "10kg Hearts", emoji: "🦒", animal: "Giraffe", category: "Mammals", fact: "A giraffe's heart weighs up to 25 pounds (11 kg) to pump blood all the way up its 6-foot neck! Their blood pressure is twice that of humans." },
  { id: 35, title: "Black Skin, Clear Fur", emoji: "🐻‍❄️", animal: "Polar Bear", category: "Mammals", fact: "Polar bears have black skin (to absorb heat) and transparent fur! Their fur only appears white because it reflects visible light, like snow." },
  { id: 36, title: "Identical Quadruplets", emoji: "🛡️", animal: "Armadillo", category: "Mammals", fact: "Nine-banded armadillos always give birth to four identical babies from a single egg that splits: nature's own cloning!" },
  { id: 37, title: "Frozen But Alive", emoji: "🐸", animal: "Wood Frog", category: "Weird & Wonderful", fact: "Wood frogs can freeze solid during winter. Their heart stops, blood stops flowing, and up to 65% of their body water turns to ice! They thaw and hop away in spring." },
  { id: 38, title: "Balloon Defense", emoji: "🐡", animal: "Pufferfish", category: "Ocean", fact: "Pufferfish can inflate to three times their normal size when threatened! They also contain a toxin 1,200 times more deadly than cyanide." },
  { id: 39, title: "Months Without Eating", emoji: "🐍", animal: "Ball Python", category: "Reptiles", fact: "Ball pythons can go months without eating when they're in breeding season, and that's totally normal. It's a natural fasting behavior, not a sign of illness." },
  { id: 40, title: "The Wave of Peace", emoji: "🦎", animal: "Bearded Dragon", category: "Reptiles", fact: "Bearded dragons wave one arm as a submissive gesture to other dragons. It's their version of 'no threat here!' and a polite greeting in dragon language." },
  { id: 41, title: "Tail Fat Reserves", emoji: "🦎", animal: "Leopard Gecko", category: "Reptiles", fact: "Leopard geckos store fat reserves in their thick tails. A skinny tail can signal poor health or stress. A healthy gecko should have a plump, rounded tail." },
  { id: 42, title: "Rediscovered in 1994", emoji: "🦎", animal: "Crested Gecko", category: "Reptiles", fact: "Crested geckos were thought to be extinct until they were rediscovered in 1994 in New Caledonia! They're now one of the most popular gecko species in the hobby." },
  { id: 43, title: "Color Means Communication", emoji: "🦎", animal: "Chameleon", category: "Reptiles", fact: "Chameleons don't change color primarily for camouflage. They do it to communicate mood and temperature. Color changes signal stress, excitement, readiness to mate, and more." },
  { id: 44, title: "Three Eyelids", emoji: "🐶", animal: "Dog", category: "Dogs & Cats", fact: "Dogs have three eyelids. A third one called a nictitating membrane helps protect and moisten the eye. You can sometimes spot it when a dog is sleepy!" },
  { id: 45, title: "Unique Nose Prints", emoji: "🐶", animal: "Dog", category: "Dogs & Cats", fact: "A dog's nose print is as unique as a human fingerprint. No two are alike! Some kennel clubs have started using nose prints for identification." },
  { id: 46, title: "Dogs Dream Too", emoji: "🐶", animal: "Dog", category: "Dogs & Cats", fact: "Dogs dream just like humans do. Their REM sleep looks remarkably similar to ours. You'll notice twitching paws and little whimpers as they relive their day." },
  { id: 47, title: "Born Blind and Deaf", emoji: "🐶", animal: "Dog", category: "Dogs & Cats", fact: "Puppies are born completely blind and deaf. They rely entirely on smell and touch for their first two weeks of life. Their eyes and ears open around 2 weeks old." },
  { id: 48, title: "Mental Fatigue is Real", emoji: "🐶", animal: "Dog", category: "Dogs & Cats", fact: "Regular mental stimulation is just as tiring for dogs as physical exercise. Puzzle feeders and training sessions work wonders for a calmer, happier pup." },
  { id: 49, title: "Meow is Just for Us", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "Cats only meow at humans, not at other cats. They invented the meow specifically to communicate with people, and each cat develops its own unique vocabulary." },
  { id: 50, title: "Healing Purr", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "A cat's purr vibrates at 25 to 150 Hz, a frequency known to promote bone healing and reduce stress, for both the cat and the human nearby!" },
  { id: 51, title: "Always Landing Right", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "Cats have a specialized collarbone that lets them always land on their feet. It's called the 'righting reflex' and kicks in within milliseconds of a fall." },
  { id: 52, title: "Lactose Intolerant Cats", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "Adult cats are technically lactose intolerant, despite what cartoons suggest. Skip the milk bowl, it can cause upset stomachs and digestive issues." },
  { id: 53, title: "70% of Life Asleep", emoji: "🐱", animal: "Cat", category: "Dogs & Cats", fact: "Cats spend up to 70% of their lives sleeping. They are crepuscular, most active at dawn and dusk, and conserve energy the rest of the time." },
  { id: 54, title: "Parrots Need Company", emoji: "🦜", animal: "Parrot", category: "Birds", fact: "Parrots need social interaction daily. Isolation can cause feather plucking and behavioral issues. They're highly intelligent birds that thrive on engagement." },
  { id: 55, title: "Rabbits Need Exercise", emoji: "🐰", animal: "Rabbit", category: "Mammals", fact: "Rabbits are not low-maintenance pets. They need at least 3 hours of exercise outside their enclosure every day to stay healthy and mentally stimulated." },
  { id: 56, title: "Guinea Pigs Are Social", emoji: "🐹", animal: "Guinea Pig", category: "Mammals", fact: "Guinea pigs are highly social and should ideally be kept in pairs or small groups. A lone guinea pig can become lonely, anxious, and even depressed." },
  { id: 57, title: "100-Year Commitment", emoji: "🐢", animal: "Tortoise", category: "Reptiles", fact: "Tortoises can live for over 100 years, so adopting one is genuinely a lifelong commitment. You may need to include them in your will!" },
  { id: 58, title: "Mimics Everything", emoji: "🦜", animal: "Parrot", category: "Birds", fact: "Many exotic birds can mimic not just words but full sentences, tones, and even laughs. Some African Greys have been recorded with vocabularies exceeding 1,000 words." },
  { id: 59, title: "Electric Sense", emoji: "🦈", animal: "Shark", category: "Ocean", fact: "Sharks have special jelly-filled pores called ampullae of Lorenzini that detect the tiny electrical fields produced by other animals' heartbeats. They can sense a heartbeat from over a meter away!" },
  { id: 60, title: "Crow Tool Users", emoji: "🐦", animal: "Crow", category: "Birds", fact: "New Caledonian crows craft hooked tools from twigs and leaves to extract grubs from bark, and they pass these techniques on to their young, making it a form of animal culture." },
  { id: 61, title: "Hippo Sunscreen", emoji: "🦛", animal: "Hippo", category: "Mammals", fact: "Hippos secrete a reddish, oily fluid that acts as a natural sunscreen and antibiotic! Scientists once thought it was blood, earning it the nickname 'blood sweat.'" },
  { id: 62, title: "Ants Farm Fungi", emoji: "🐜", animal: "Leafcutter Ant", category: "Weird & Wonderful", fact: "Leafcutter ants don't eat the leaves they carry. They use them to grow a special fungus inside their colony, which is their actual food source. They've been farming for over 50 million years!" },
  { id: 63, title: "Mirror Test Passers", emoji: "🐬", animal: "Dolphin", category: "Ocean", fact: "Dolphins are one of only a handful of animals that pass the mirror self-recognition test, placing them alongside humans, great apes, and elephants as animals with a sense of self-awareness." },
  { id: 64, title: "Sky-High Sleepers", emoji: "🦅", animal: "Swift", category: "Birds", fact: "Common swifts can stay airborne for up to 10 months without landing. They eat, sleep, and even mate in the sky. They only land to breed!" },
  { id: 65, title: "Finger-Snapping Shrimp", emoji: "🦐", animal: "Pistol Shrimp", category: "Ocean", fact: "Pistol shrimp snap their claws so fast it creates a cavitation bubble that reaches the temperature of the sun's surface (briefly!) and stuns or kills prey instantly." },
  { id: 66, title: "No Two Stripes Alike", emoji: "🦓", animal: "Zebra", category: "Mammals", fact: "Every zebra's stripe pattern is completely unique, like a fingerprint. Foals recognize their mothers by their stripe pattern alone within hours of being born." },
  { id: 67, title: "Wolves Change Rivers", emoji: "🐺", animal: "Wolf", category: "Mammals", fact: "When wolves were reintroduced to Yellowstone in 1995, they triggered a trophic cascade. Their predation changed elk grazing patterns, which allowed vegetation to recover, stabilizing riverbanks and literally altering the course of rivers." },
  { id: 68, title: "Velvet Antlers Grow Fast", emoji: "🦌", animal: "Deer", category: "Mammals", fact: "Deer antlers are the fastest-growing tissue in the animal kingdom, growing up to an inch per day! They're covered in 'velvet,' a soft skin rich in blood vessels, until they harden each autumn." },
  { id: 69, title: "Born Male, Die Female", emoji: "🐟", animal: "Clownfish", category: "Ocean", fact: "All clownfish are born male. When the dominant female of a group dies, the largest male changes sex to become female permanently. Finding Nemo got it backwards!" },
  { id: 70, title: "Snake Venom? No Thanks", emoji: "🦡", animal: "Honey Badger", category: "Mammals", fact: "Honey badgers are nearly immune to snake venom. They've been filmed getting bitten by cobras, going limp for a few minutes, then waking up and continuing to eat the snake." },
  { id: 71, title: "Nature's Sound Thief", emoji: "🐦", animal: "Lyrebird", category: "Birds", fact: "The lyrebird can perfectly mimic almost any sound it hears: chainsaws, car alarms, camera shutters, other bird species, and even human voices. They've been recorded mimicking entire construction sites." },
  { id: 72, title: "Hypnotic Skin", emoji: "🦑", animal: "Cuttlefish", category: "Ocean", fact: "Cuttlefish hypnotize prey by rippling hypnotic patterns across their skin at high speed. The dazzling light show freezes crabs and shrimp in place just long enough to strike." },
  { id: 73, title: "The Ultimate Impostor", emoji: "🐙", animal: "Mimic Octopus", category: "Ocean", fact: "The mimic octopus can impersonate over 15 different species, including lionfish, flatfish, and sea snakes, by reshaping its body and changing colour in real time to avoid predators." },
  { id: 74, title: "24 Eyes, Full Colour", emoji: "🪼", animal: "Box Jellyfish", category: "Ocean", fact: "Box jellyfish have 24 eyes arranged in four clusters, and unlike most jellyfish they can see in full colour. Despite having no brain, their eyes are structurally similar to human eyes." },
  { id: 75, title: "Regional Accents", emoji: "🐐", animal: "Goat", category: "Mammals", fact: "Goats develop regional accents. Kids raised in different social groups develop distinct bleats. Scientists say it's evidence of social learning in animals previously thought to have fixed vocalisations." },
  { id: 76, title: "Hear With Their Feet", emoji: "🐘", animal: "Elephant", category: "Mammals", fact: "Elephants communicate through seismic vibrations in the ground, detecting low-frequency rumbles with specialised receptors in their feet and trunk. They can 'hear' messages from other elephants up to 20 miles away." },
  { id: 77, title: "Boiling Chemical Spray", emoji: "🪲", animal: "Bombardier Beetle", category: "Weird & Wonderful", fact: "Bombardier beetles fire a boiling chemical spray from their abdomen at 100 degrees C with a rapid-fire popping sound, up to 500 pulses per second. The reaction between two stored chemicals creates an explosive defence." },
  { id: 78, title: "Magpie Self-Awareness", emoji: "🐦", animal: "Magpie", category: "Birds", fact: "Magpies are the only non-mammal known to pass the mirror self-recognition test. When shown their reflection with a coloured dot on their feathers, they immediately try to investigate and remove it." },
  { id: 79, title: "Secrets in the Sound", emoji: "🐬", animal: "Dolphin", category: "Ocean", fact: "Dolphins communicate using unique signature whistles that function like names! Each dolphin develops its own distinct whistle, allowing them to identify and call one another, much like how we use names to socialize." },
  { id: 80, title: "Glimmer in the Dark", emoji: "✨", animal: "Firefly", category: "Weird & Wonderful", fact: "Fireflies are not just beautiful; they're natural born chemists! These glowing insects produce light through a chemical reaction involving a substance called luciferin, which allows them to light up summer nights." },
  { id: 81, title: "Color-Changing Camouflage", emoji: "🦎", animal: "Chameleon", category: "Reptiles", fact: "Chameleons are famous for their ability to change color, but did you know it's primarily a way to communicate? They alter their hues depending on their mood and social signals." },
  { id: 82, title: "The Tiny Yet Mighty", emoji: "🐝", animal: "Honey Bee", category: "Weird & Wonderful", fact: "A single honey bee can visit up to 2,000 flowers in one day! Their tireless work as pollinators helps produce about one-third of the food we eat." },
  { id: 83, title: "Silent Signals", emoji: "🐙", animal: "Octopus", category: "Ocean", fact: "Octopuses can rapidly change their skin color and pattern to send signals to each other or confuse predators, making them masters of disguise." },
  { id: 84, title: "Dancing Crickets", emoji: "🐜", animal: "Cricket", category: "Weird & Wonderful", fact: "Male crickets perform elaborate moves while singing to attract females, showcasing their fitness and charm in a rhythmic ballet of nature." },
  { id: 85, title: "Multiple Personality Parrots", emoji: "🦜", animal: "African Grey Parrot", category: "Birds", fact: "African Grey Parrots mimic human speech with astonishing accuracy and can learn to combine different phrases based on context, displaying personalities that change depending on their environments!" },
  { id: 86, title: "The Tardigrade Resilience", emoji: "🌌", animal: "Tardigrade", category: "Weird & Wonderful", fact: "Tardigrades can endure boiling water, freezing temperatures, and even the vacuum of space while going into a state of cryptobiosis!" },
  { id: 87, title: "Sharks Can Be Chatty", emoji: "🐋", animal: "Humpback Whale", category: "Ocean", fact: "Humpback Whales produce complex songs that can last for 20 minutes and can be heard over vast distances, possibly for mating purposes." },
  { id: 88, title: "Chameleon Color Change", emoji: "🦎", animal: "Chameleon", category: "Reptiles", fact: "Chameleons change colors in response to mood, temperature, and even social signals, making them masters of both disguise and emotion!" },
  { id: 89, title: "Frog Rainmakers", emoji: "🌧️", animal: "Cuban Tree Frog", category: "Weird & Wonderful", fact: "The Cuban Tree Frog's croaking can be heard from miles away, echoing in the tropical night as they call for mates." },
  { id: 90, title: "Reptile Alarm Clock", emoji: "🐢", animal: "Green Sea Turtle", category: "Ocean", fact: "Green Sea Turtles can hold their breath for up to 5 hours while resting on the sea floor, making them one of the ocean's most efficient swimmers." },
  { id: 91, title: "The Snack Time Ant", emoji: "🍃", animal: "Leafcutter Ant", category: "Weird & Wonderful", fact: "Leafcutter Ants cut leaves to cultivate a special fungus that they eat, showcasing advanced farming techniques thousands of years before humans thought of agriculture." },
  { id: 92, title: "Sloth Speedsters", emoji: "🦥", animal: "Three-Toed Sloth", category: "Mammals", fact: "Despite their slow reputation, Three-Toed Sloths can hold their breath for up to 40 minutes while swimming, using their long arms to paddle gracefully." },
  { id: 93, title: "Singing Spiders", emoji: "🕷️", animal: "Common House Spider", category: "Weird & Wonderful", fact: "Some Common House Spiders produce low-frequency vibrations to attract mates, turning quiet corners into a surprising concert hall!" },
  { id: 94, title: "Surprising Sea Sponges", emoji: "🧽", animal: "Sea Sponge", category: "Ocean", fact: "If you cut a sea sponge in half, it can regrow itself completely, showcasing a form of resilience that not many animals can match." },
  { id: 95, title: "Octopus Ink Defense", emoji: "🐙", animal: "Octopus", category: "Weird & Wonderful", fact: "When threatened, octopuses release a cloud of ink that obscures their escape and can temporarily impair a predator's sense of smell!" },
  { id: 96, title: "The Purring Lemur", emoji: "🐒", animal: "Lemur", category: "Mammals", fact: "Lemurs purr just like cats to communicate with family members, helping strengthen social bonds and keep everyone feeling safe." },
  { id: 97, title: "Birds Can Count", emoji: "🦜", animal: "African Grey Parrot", category: "Birds", fact: "African Grey Parrots can understand numerical concepts, proving they are true brainiacs of the avian world." },
  { id: 98, title: "Frog Freeze", emoji: "🐸", animal: "Wood Frog", category: "Reptiles", fact: "The Wood Frog can survive being frozen solid during winter! Once temperatures warm up, it thaws out and hops away as if nothing ever happened!" },
  { id: 99, title: "Fluffy Fish Friends", emoji: "🐠", animal: "Clownfish", category: "Ocean", fact: "Clownfish thrive among sea anemone stinging tentacles thanks to their protective mucus coating, showcasing one of nature's most iconic symbiotic relationships." },
  { id: 100, title: "Butterfly Birthdays", emoji: "🦋", animal: "Mayfly", category: "Weird & Wonderful", fact: "Mayflies spend years developing underwater before emerging as adults, mating, and dying — sometimes all in the same day!" },
  { id: 101, title: "Bouncing Buddies", emoji: "🦘", animal: "Kangaroo", category: "Mammals", fact: "Kangaroos are born the size of a grape and crawl into their mother's pouch, where they continue developing. They can hop at speeds of up to 40 mph!" },
  { id: 102, title: "Silent Swimmers", emoji: "🐙", animal: "Octopus", category: "Ocean", fact: "Octopuses have three hearts and blue blood. When they swim, one heart pumps blood to their body, while the other two focus on their gills!" },
  { id: 103, title: "Swimmers in the Desert", emoji: "🐀", animal: "Kangaroo Rat", category: "Mammals", fact: "The kangaroo rat can survive without ever drinking water, getting all moisture from the seeds it eats and thriving in extreme desert conditions." },
  { id: 104, title: "Feline Mustache", emoji: "😺", animal: "Sphynx Cat", category: "Dogs & Cats", fact: "Sphynx cats are naturally hairless due to a genetic mutation and are known for their affectionate nature and unique whiskers." },
  { id: 105, title: "Glowing Oceans, No Joke!", emoji: "🐬", animal: "Dolphins", category: "Ocean", fact: "When dolphins swim at night, their skin can reflect light from bioluminescent organisms, creating a spectacular glowing effect in the water." },
  { id: 106, title: "Mission Impossible Tails", emoji: "🐒", animal: "Tamarin Monkeys", category: "Mammals", fact: "Some tamarin monkeys communicate through tail movements, conveying complex messages in a social network as intricate as any involving humans." },
  { id: 107, title: "Egg Layers of Mystery", emoji: "🐢", animal: "Sea Turtles", category: "Reptiles", fact: "Female sea turtles travel thousands of miles to return to the beach where they were born to lay their eggs, making them one of the most fascinating ocean explorers!" },
  { id: 108, title: "Armored Squirrels", emoji: "🦚", animal: "Pangolin", category: "Weird & Wonderful", fact: "Pangolins are the only mammals covered in scales. When threatened, they curl into a tight ball, using these scales as armor against predators." },
  { id: 109, title: "Underwater Fireworks", emoji: "🦑", animal: "Cuttlefish", category: "Ocean", fact: "Cuttlefish change color and texture using specialized skin cells called chromatophores, making them mesmerizing underwater performers!" },
  { id: 110, title: "Invisible Wings", emoji: "🦅", animal: "Red-footed Booby", category: "Birds", fact: "Red-footed boobies dive from up to 30 feet into the ocean to catch fish and can see clearly underwater thanks to their unique eye structure!" },
  { id: 111, title: "Survival Specialists", emoji: "🐢", animal: "Box Turtle", category: "Reptiles", fact: "Box turtles can live over 100 years and survive months without food by entering a hibernation-like state to preserve energy!" },
  { id: 112, title: "Cuddle Drones", emoji: "🦔", animal: "Hedgehog", category: "Dogs & Cats", fact: "Hedgehogs can run at speeds up to 6 miles per hour! But despite their spiny exterior, they love to curl up into little balls for cuddles when feeling safe." },
  { id: 113, title: "Super Sneaky Narwhal", emoji: "🐋", animal: "Narwhal", category: "Ocean", fact: "Narwhals' long spiral tusks can grow up to 10 feet long and scientists believe they detect environmental changes, helping them navigate frigid Arctic waters." },
  { id: 114, title: "Rollercoaster Tails", emoji: "🦜", animal: "Kookaburra", category: "Birds", fact: "Kookaburras have a laugh so distinctive it sounds like hearty human laughter! They use these calls to establish territory across the Australian outback." },
  { id: 115, title: "Electric Eel Shock", emoji: "⚡", animal: "Electric Eel", category: "Weird & Wonderful", fact: "Electric eels produce jolts of electricity up to 600 volts — enough to stun a horse! They use this for hunting and self-defense in the Amazon river basin." },
  { id: 116, title: "Climbing the Walls", emoji: "🦎", animal: "Gecko", category: "Reptiles", fact: "Geckos have microscopic hairs on their feet that allow them to stick to surfaces and run on ceilings using van der Waals forces!" },
  { id: 117, title: "Can't Stop Purring", emoji: "🐆", animal: "Cheetah", category: "Mammals", fact: "Unlike other big cats, cheetahs purr continuously even while exhaling. This signals contentment and makes them the only large felines that never truly roar." },
  { id: 118, title: "Shrimp Anemone Alliance", emoji: "🐠", animal: "Clownfish", category: "Ocean", fact: "Clownfish and sea anemones share one of nature's most iconic partnerships — shelter for the clownfish, cleaning services for the anemone." },
];
// ────────────────────────────────────────────────────────────────────────────

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
    console.log('postAnimalFactReel started. Total facts:', facts.length);

    // Read posted history — stored as fact id (numeric, as string in fact_title field)
    const postedRecords = await base44.asServiceRole.entities.PostedFact.list('-created_date', 1000);
    const postedIds = new Set(postedRecords.map(r => Number(r.fact_title)));

    // Filter to unposted facts
    let unposted = facts.filter(f => !postedIds.has(f.id));

    // All facts have been posted — reset cycle
    if (unposted.length === 0) {
      console.log('All facts have been posted. Resetting cycle...');
      for (const r of postedRecords) {
        await base44.asServiceRole.entities.PostedFact.delete(r.id);
      }
      unposted = facts;
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