// Written analysis for the state pages, one entry per jurisdiction.
//
// The pages were shipping as a derived opener plus a table of cited rules. That
// is accurate and useful, and it leaves the reader to infer the mechanism by
// opening rows until the same reasoning repeats. It also meant 40 to 56% of each
// page's non-table text was word-for-word identical to every other state's,
// which is the shape Google discounts and the reason a herp society reads one
// page and not the other fifty-one.
//
// So each entry does three things the table cannot: explain why the page looks
// the way it does, name what is surprising, and say what a keeper should
// actually do about it. Every claim here comes from the statutes already quoted
// in legalStatus.json, the jurisdiction's own `scope` line, or a source note in
// that file. Nothing is written from memory and nothing needs new research.
//
// Plain paragraph strings rather than MDX. These are not articles: routing them
// through the content pipeline would put 52 of them in the /blog listings and
// the sitemap as posts, which is the opposite of what they are.
//
// A jurisdiction with no entry renders no section at all, so this fills in
// without the pages ever being broken. scripts/check-state-notes.mjs reports
// coverage.
export const STATE_NOTES = {
  HI: [
    "Hawaii's forty bans are not forty decisions about forty animals. Section 4-71-6.5 allows an animal to be introduced only if it appears on the conditionally approved list or the restricted list, so anything on neither is barred by default rather than left unregulated. The question to ask here is not whether Hawaii banned a species but whether anyone ever wrote it down, and forty of these fifty-two were never written down.",
    "Being listed is not the same as being keepable. Part A of the restricted list is headed for research and exhibition, which means a university or a licensed exhibitor can hold a ferret, a bearded dragon or a leopard gecko under permit and a household cannot, with no pet permit to apply for. The list that decides a pet question is the conditionally approved list, and it is the one almost never quoted: the axolotl, the chinchilla, the guinea pig, the African grey and the whole genus Testudo sit on it.",
    "Two entries are worth knowing before you read the table. Every snake is barred at the level of the suborder, Hawaii having no native snakes to protect, so a corn snake and a Burmese python get the same answer for the same reason. And the one animal with no restriction at all is the rabbit, which is not an approval: section 4-71-2 defines domesticated races of the European rabbit as a domestic animal and puts them outside the chapter entirely.",
  ],

  CA: [
    "Title 14 section 671 is a mammal list wearing the name of a general one. It restricts the order Rodentia as a whole and then names five exceptions, the hamster, rat, mouse, guinea pig and chinchilla, which is why the chinchilla clears and the degu does not despite being a close South American relative of it. The gerbil and the flying squirrel fail the same test the same way.",
    "The reptile half of the list is close to empty: crocodilians, snapping turtles, venomous snakes and the Gila monster, and nothing else. So monitors, tegus, bearded dragons, every gecko and every chameleon are unrestricted in California, which surprises people who expect the strictest mammal rules in the country to extend to large lizards. No arachnid appears anywhere in the manual either, so tarantulas and scorpions sit outside it.",
    "Where it does bite there is no way around it. Section 671.1 lists the permit types and none of them covers pet keeping; the only possession permit requires that the animal was already lawfully held in California before January 1992. The Burmese python is the reminder that a state answer is not the whole answer: unrestricted under section 671, and injurious wildlife under the federal Lacey Act since 2012, which is what stops one crossing a state line.",
  ],

  TX: [
    "Texas has a reputation built on the Dangerous Wild Animal statute, which answers fewer questions than people expect. Section 822.101(4) is a closed list of nineteen named mammals plus their hybrids, and it contains no reptile, no bird, no rodent and no invertebrate. The rule that decides most pet questions here is 31 TAC Chapter 65 Subchapter O, and it turns on one thing: whether the animal is native to Texas.",
    "That is why every conditional entry on this page is a Texas native carrying a number. A species on the section 65.331(d) list is capped at 25 without a permit and one on the 65.331(e) list at six, and at any number selling, offering for sale, exchanging or bartering is barred outright. The cap reaches captive-bred animals, because section 65.325(a) says nongame wildlife includes captive-bred nongame wildlife, so a pet shop receipt does not put a box turtle or a hognose outside it.",
    "The other side of the same rule is that an imported animal usually has no Texas rule at all. The bearded dragon, the tegu, the savannah monitor, the fennec fox and the sugar glider are all unrestricted, because the closed mammal list does not name them and the native caps cannot reach them. The exceptions are named one at a time: the serval needs a certificate issued by the local animal control office rather than by a state agency, so that answer is administered county by county, and the Burmese python needs an annual controlled exotic snake permit alongside five other named constrictors.",
  ],

  FL: [
    "Florida sorts all wildlife into three classes and then exempts a list from the scheme entirely, and most pet questions turn on the exemption rather than the classes. Class I, twenty-four taxa, may not be possessed for personal use at all. Class II, thirty-eight, needs a permit at $140 a year plus documented experience and approved caging. Class III is everything else and needs a permit that costs nothing.",
    "The four outright bans are about establishment risk rather than danger: the Argentine black and white tegu, the green iguana, the Nile monitor and the Burmese python. An animal that survives a hurricane season loose in a subtropical state is the kind Florida moves against, which is also why the February 2021 rule left a great deal of older advice describing Florida as the easy state for a green iguana reading backwards.",
    "Invertebrates are filed where a keeper would not think to look. Rule 5B-57.004 sits with the Department of Agriculture and Consumer Services rather than with FWC, so reading the captive wildlife chapters and concluding that a Madagascar hissing cockroach or a giant African millipede is unregulated gets it wrong. Both need an agriculture permit, and the test it applies is federal plant-pest status rather than anything in the wildlife code.",
  ],

  NV: [
    "Nevada runs two lists over a statutory default, and three lines of NAC 503.140 carry most of the pet trade between them: all felines except mountain lions and bobcats, all nonvenomous nonindigenous reptiles, and all nonindigenous amphibians except bullfrogs. That reptile line clears the entire pet reptile trade in one sweep, and the feline line disposes of the whole hybrid cat question without any argument about filial generations.",
    "Anything on neither list falls to NRS 503.597, which makes it unlawful to bring wildlife into the state without the Department's written consent. That default is what turns the prairie dog, the capybara, the degu and the flying squirrel into permit answers rather than free ones. Insects and arachnids sit outside all of it, because NRS 501.097 defines wildlife as mammals, birds, fish, reptiles, amphibians, mollusks and crustaceans, and stops there.",
    "The rabbit row cannot be read either way, and it is worth seeing why. NAC 503.110 names Oryctolagus cuniculus in its scientific column and Wild European Rabbit in its common name column, and the same body of rules carves out domesticated races explicitly for the chinchilla, mink, rat, mouse, turkey and duck. The rabbit entry does not. Nevada is also the state where the municipality matters most: subsection 4 preserves county and city ordinances in terms, and Clark County, Las Vegas and Henderson are all stricter than the state.",
  ],

  NJ: [
    "New Jersey is a closed-list state in the strict sense, and three lists decide everything on this page. Section 7:25-4.2(a) bars possession of any exotic or nongame species without a permit. Section 4.4 is a closed exempt list, the only route to keeping an animal here with no permit at all. Section 4.5 then sweeps everything else back in. The default is a permit rather than freedom, which is why twenty-eight of these fifty-two are permit answers.",
    "The permit list at 4.3 works by family as often as by species, so one entry answers several pet animals at once. Pythonidae takes every python, Monitor Varanus spp. takes every monitor, Skinks Family Scincidae takes the blue-tongue, and Geckos Family Gekkonidae other than Tokay Gecko takes every gecko but one. The exempt list is short beside it and names animals individually, sometimes under binomials that went out of use decades ago.",
    "Two entries are worth knowing before the table. The corn snake is state endangered here, listed at 4.13(b)7, and 4.10(a) means no permit may issue for it while 4.15(b) means it may not be kept as a pet, so the most ordinary beginner snake in the country is among the hardest to keep legally in New Jersey. And invertebrates are an open question: 4.5 reaches nongame species, 4.1 defines that without limiting it by class, and no Division list names an insect, so the tarantula, the scorpion, the millipede and the hissing cockroach have two available readings and no answer.",
  ],

  ME: [
    "Maine is a closed-list state, and 09-137 CMR ch. 7 § 7.06(4) is the sentence that makes it one: a person may not possess any species that has not been categorised, and an uncategorised species is not even eligible for a permit. That makes the Unrestricted Species List the document that decides a pet question here, and it works by naming species one at a time far more often than by clearing a group.",
    "Three headings on that list carry a condition rather than a clearance. Reptilia, Serpentes and Testudines each sit under Captive Bred Origin Only, which is what makes nine entries on this page conditional instead of clear. An asterisk on an entry removes anything on the federal injurious or threatened lists, so a species cleared at family or infraorder rank can still drop out from under the clearance, while one named individually never meets the filter at all.",
    "The list is dated 11 August 2017 and has not been reissued since, which shows in the taxonomy. The Argentine black and white tegu is cleared under Tupinambis, a genus it left in 2012. The Russian tortoise is labelled Greek Tortoise with the Horsfield's binomial beside it. The hognose shows why the species matters more than the common name: only the western is named, and the eastern is a Maine native that appears nowhere on the list.",
  ],

  DC: [
    "The District has one of the shortest wildlife rules in the country and it works by omission rather than by naming anything. Section 8-1808(j)(1) bars importing, possessing, selling or keeping as a household pet any living member of the animal kingdom, including animals born or raised in captivity, with seven exceptions: domestic dogs, domestic cats, domesticated rodents and rabbits, captive-bred common cage birds, non-venomous snakes and fish and turtles, ferrets, and racing pigeons.",
    "Read those seven for what is absent. No lizard appears among them, which bars the bearded dragon, the leopard gecko, the green iguana, every chameleon and every monitor in a single stroke, none of them ever individually considered. No amphibian appears, so the axolotl and the tiger salamander go the same way, and no invertebrate appears, so the tarantula, the scorpion and the millipede do too. The result reads oddly from a keeper's point of view: a leopard gecko is barred in the District and a Burmese python is permitted, because the snake category is written around venom and sets no size limit.",
    "The word doing the most work in the section is domesticated. A guinea pig and a hamster sit inside the rodent category; the prairie dog, the capybara, the degu and the flying squirrel are rodents that are not domesticated and fall outside it. There is no permit behind any of this for a household, either: subsections (j)(2) to (j)(5) reach public zoos, federally licensed exhibitors, rehabilitators, veterinarians and shelters, and nothing else.",
  ],

  NYC: [
    "The city rule is stricter than any state on this map, and it works in three layers rather than as one list. Health Code § 161.01 opens with a standard instead of a list, deeming a wild animal to be any animal naturally inclined to do harm and capable of inflicting harm upon human beings. Subsection (b)(ii) then prohibits any wildlife protected or endangered under federal, state or local law, which pulls New York State's whole protected wildlife scheme into the city wholesale. Twenty-four numbered clauses follow, and they work mostly by family.",
    "The family drafting is what catches the ordinary pets. The python clause reaches any member of the family Pythonidae, so a ball python goes the same way as a reticulated one. The Boidae clause takes the boa constrictor, which New York State leaves alone. The Varanidae clause takes every monitor, where the state names only six. And one clause needs a single word for the emperor scorpion: after the venomous spiders it says scorpion, with no genus, no species and no venom threshold, so one of the mildest scorpions in the pet trade is prohibited on the same word as a deathstalker.",
    "The Bengal cat is the strictest answer anywhere on this map. The cat clause ends with any hybrid or cross-breed offspring of a wild cat and domesticated or other cat, and there is no filial number, no weight test and no registry exception, where New York State allows a registered hybrid five generations clear of wild parentage. Section 161.01(d) is worth reading alongside any prohibition here: a prohibited animal may be seized by an authorised city employee, and the owner has three business days to request a hearing.",
  ],

  NY: [
    "New York answers exotic and native animals through two separate mechanisms, and the well-known one is the smaller. Section 11-0103(6)(e) is a closed wild animal list six clauses long: primates, Felidae, Canidae, Ursidae, a named set of large constrictors and monitors plus all venomous reptiles, and Crocodylia. Section 11-0512 then bars keeping any of them as a pet. Anything outside those six clauses is untouched by it, which is why the hedgehog, the sugar glider, the tegu and the tarantula are all clear here.",
    "The mechanism that catches more animals on this page is the native one. Section 3.3 of 6 NYCRR defines sixteen native snakes, among them the common garter, the eastern milk snake and the eastern hognose, and its next subdivision reads in its entirety: Open season. None. That sentence is what turns a small game classification into a prohibition, and it is why three ordinary beginner snakes are barred in New York while a ball python is not.",
    "Two carve-outs decide the rest. Canidae is banned as a family with captive-bred fennec foxes named as an exception, which makes New York one of the few states to permit one outright. Felidae and all hybrids thereof is a wild animal with a single exit, a Felis catus hybrid registered with the ACFA or TICA and five generations clear of wild parentage, which is the strictest generation rule on this map. The invasive species list also sounds worse than it reads: the monk parakeet and the red-eared slider sit on the regulated tier, which is lawful to possess, sell, buy and transport, and bars only knowing release into the wild.",
  ],

  PA: [
    "Pennsylvania splits the animal kingdom between two agencies, which is why the answers on this page look inconsistent with each other. The Game Commission holds wildlife, and 34 Pa.C.S. § 102 limits that to wild birds and wild mammals. The Fish and Boat Commission holds reptiles and amphibians under 58 Pa. Code Ch. 79, and that chapter reaches native species only. Terrestrial invertebrates fall to neither agency, so a tarantula or a scorpion has no Pennsylvania rule at all.",
    "All five unclear entries here come from one place. The exotic wildlife definition at 34 Pa.C.S. § 2961 names bears, coyotes, lions, tigers, leopards, cougars and wolves, and none of the animals on this page. The prohibition on small exotic mammals rests entirely on four words earlier in that sentence, includes, but is not limited to, which the Game Commission reads as reaching them. That is an agency interpretation of a definition rather than anything a legislature wrote about a hedgehog or a sugar glider, and it is why bills to reverse it keep coming back.",
    "The document that decides a Pennsylvania question is not the definition but the Commission's own prohibited list at 58 Pa. Code § 137.1. Eleven categories, of which three do most of the work here: all Felidae except house cats, the monk parakeet by name, and a catch-all barring possession of any wildlife held in captivity or captive bred in another state or nation. For native reptiles and amphibians the Fish and Boat rules are about wild take rather than ownership, with a one-per-day limit on unlisted natives and a permit under § 79.4 to keep one at all, whatever its origin.",
  ],
};

export const notesFor = (code) => STATE_NOTES[code] ?? null;
