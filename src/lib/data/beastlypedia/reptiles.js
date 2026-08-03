// Beastfile shape, documented once here since every group file follows it.
//
// Required:
//   id              slug, lowercase and hyphenated, drives /beastlypedia/<id>/
//   name            common name
//   scientific      binomial, rendered in italics
//   tagline         one line, used in the card and the meta description
//   habitat         single label from HABITATS in ./index.js
//   group           one of beastfileGroups
//   overview        3-5 sentences
//   origin          where it is found
//   notableTraits   3-5 short strings
//   conservation    IUCN status plus a sentence of context
//   funFacts        2-4 strings
//   heroImage       landscape preferred; ALWAYS a new image, never a fact photo
//   heroAlt         descriptive alt text
//   secondaryImage  portrait preferred; may reuse an existing /assets/facts photo
//   secondaryAlt    descriptive alt text
//
// Optional:
//   alsoKnownAs     array of alternative common names
//   relatedFiles    article slugs, resolved against mdx-meta at render time
//   encyclopediaId  cross-link to a pet-care Encyclopedia entry where one exists
//
// On images: hero is landscape by preference and secondary is portrait, but
// neither is enforced - the layout handles either. The hard rule is that the
// hero must be its own image. Reusing a fact photo there would put the same
// picture on the card, the profile and the fact feed.
export const reptileBeastfiles = [
  {
    id: 'thorny-devil',
    name: 'Thorny Devil',
    scientific: 'Moloch horridus',
    alsoKnownAs: ['Mountain Devil', 'Thorny Dragon', 'Moloch'],
    tagline: 'A desert lizard that drinks through its skin.',
    habitat: 'Desert',
    group: 'Reptiles',
    overview:
      'The thorny devil is a small lizard of the Australian arid zone, rarely longer than 20 centimetres and covered in conical spines that make it awkward to swallow. It eats almost nothing but ants, taking them one at a time at a rate of a few thousand a day. Its most remarkable trick is not the armour but the plumbing: a network of channels between its scales draws water across the body and into the corners of its mouth by capillary action alone. Standing on damp sand is enough to drink. It moves in a slow, rocking shuffle that reads less like a lizard walking than a leaf caught in a breeze.',
    origin:
      'Endemic to the arid and semi-arid interior of Australia, across Western Australia, the Northern Territory, South Australia and western Queensland.',
    notableTraits: [
      'Skin channels move water to the mouth by capillary action',
      'Eats ants almost exclusively, thousands per day',
      'A false head on the back of the neck to present to predators',
      'Changes colour with temperature, paler when hot',
      'Rocking gait that disguises its outline as it moves',
    ],
    conservation:
      'Least Concern. The species is widespread across a vast and largely undeveloped range, though it depends on healthy ant populations and is vulnerable to habitat change at the edges of its distribution.',
    funFacts: [
      'It can draw water from wet sand without ever lowering its head to drink.',
      'The spiny lump behind its head is a decoy: it tucks the real head down and offers the false one instead.',
      'Despite the name and the armour, it is entirely harmless and has no venom.',
    ],
    // null until a dedicated hero exists. Deliberately not pointed at
    // /assets/facts/thorny-devil.jpg: that photo is the secondary image below,
    // and the hero has to be its own picture or the same image appears twice on
    // this page and again on the card. A null hero renders a visible "image
    // pending" block, so an unfinished Beastfile cannot quietly ship looking
    // finished. Target path once shot: /assets/beastlypedia/thorny-devil-hero.jpg
    heroImage: null,
    heroAlt:
      'A thorny devil lizard walking across red desert sand, its conical spines catching the low sunlight',
    secondaryImage: '/assets/facts/thorny-devil.jpg',
    secondaryAlt:
      'Close view of a thorny devil showing the spines along its back and the false head behind its neck',
    relatedFiles: [],
  },
];
