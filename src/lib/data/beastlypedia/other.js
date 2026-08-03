// See ./reptiles.js for the documented Beastfile shape.
//
// "Other" is the group for animals that do not sit in any of the vertebrate
// buckets. It maps to the "Weird & Wonderful" fact category.
export const otherBeastfiles = [
  {
    id: 'tardigrade',
    // Not a binomial. Tardigrada is a phylum of roughly 1,300 described
    // species, so naming one would misrepresent the profile, which is about the
    // group. The field renders in italics, which is correct for a taxon name at
    // any rank.
    scientific: 'Tardigrada',
    name: 'Tardigrade',
    alsoKnownAs: ['Water Bear', 'Moss Piglet'],
    tagline: 'Survived open space, and dies easily in a warm puddle.',
    habitat: 'Freshwater',
    group: 'Other',
    overview:
      'A tardigrade is about half a millimetre long, walks on eight clawed legs, and has a reputation for being indestructible that is only half deserved. An active, hydrated tardigrade is a soft-bodied animal that dies about as easily as anything else its size. The famous survival happens in a different state entirely: as it dries out it pulls in its legs, expels most of its water and shrivels into a dormant barrel called a tun. In that form it has survived being frozen near absolute zero, boiled, pressurised and, in a 2007 orbital experiment, exposed directly to the vacuum and solar radiation of open space.',
    origin:
      'Everywhere there is a film of water, which is most places. Moss and lichen are the classic habitat, but they are also in leaf litter, freshwater sediment, deep sea trenches and Himalayan ice.',
    notableTraits: [
      'Survives drying out by shrivelling into a dormant tun',
      'Came back alive from direct exposure to open space',
      'Some species carry Dsup, a protein that shields their DNA',
      'Eight legs ending in claws, on a body half a millimetre long',
      'Fragile when active, which is the part nobody mentions',
    ],
    conservation:
      'Not assessed, and not a conservation concern. Tardigrades are among the most widely distributed animals on Earth, and the group has been through every mass extinction since the Cambrian.',
    funFacts: [
      'The tun state is the trick. A hydrated tardigrade going about its day is not especially tough.',
      'One species makes a protein called Dsup, short for damage suppressor, which physically shields its DNA from radiation.',
      'They have been revived from dried moss kept in a museum drawer for decades.',
    ],
    heroImage: null,
    heroAlt:
      'A tardigrade seen under high magnification, its plump segmented body and eight clawed legs clearly visible',
    secondaryImage: '/assets/facts/tardigrade.jpg',
    secondaryAlt: 'Close microscopic view of a tardigrade showing its claws and mouthparts',
    relatedFiles: ['tardigrades-the-toughest-creatures-on-earth-and-in-space'],
    draft: true,
  },
];
