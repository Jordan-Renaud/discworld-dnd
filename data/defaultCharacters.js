export const defaultCharacters = [
  {
    name: "Death",
    quote: (
      <>
        What is there in this world that truly makes living worthwhile? <br />
        Death thought about it. &quot;CATS&quot; he said eventually. &quot;CATS
        ARE NICE.&quot;
      </>
    ),
    image: "/death.jpeg",
    imageAlt: "Death playing the guitar.",
    description:
      "Death is not invisible. Most people just refuse to acknowledge him for who he is, unless he insists. Under normal circumstances, only those of a magical disposition, children and cats can see him, or allow themselves to see him.",
  },
  {
    name: "The Librarian",
    quote: "ook",
    image: "/librarian.webp",
    imageAlt: "A orang-utan reading a book.",
    description: (
      <>
        The Librarian is known for his violent reaction whenever he hears anyone
        refer to him as a &quot;monkey&quot; (orang-utans are apes). He speaks
        an elaborate language whose vocabulary consists of the single word Ook
        (and its antonym &quot;eek&quot; - where &quot;ook&quot; means yes,
        &quot;eek&quot; tends to mean no). Nonetheless, most people seem to be
        able to understand him.
      </>
    ),
  },
  // { name: "", quote: "", image: "", description: "" },
];

export const characterClasses = [
  {
    name: "Dwarf",
    startingPoints: 27,
    quote:
      "All dwarfs have beards and wear up to twelve layers of clothing. Gender is more or less optional.",
    image: "/character-types/dwarf.jpeg",
    imageAlt: "a dwarf",
    pros: ["Strength: +1", "Hit Points: +1"],
    cons: ["Intolerance (Trolls): -5", "Literal Minded: -10"],
    description:
      "They’re typically around 4’ tall, but very stocky and hence much heavier than a human of that height – around 130 lbs., even without all the armour they habitually wear.",
  },
  {
    name: "Gargoyle",
    startingPoints: 46,
    quote: "Wnt PigEon.",
    image: "/character-types/gargoyle.jpeg",
    imageAlt: "Gargoyle looking out happily with snacks in their mouth.",
    pros: ["Strength: +1", "Will: +4"],
    cons: ["Dexterity: -1", "Intelligence: -3"],
    description:
      "Gargoyles are a species of troll that have evolved to move slowly, speak with their mouth open, and overlook streets. They happily take payment in pidgeons.",
  },
  {
    name: "Gnomes and Pictsies",
    startingPoints: 18,
    quote: "The life of gnomes is nasty, brutish and short. So are they.",
    image: "/character-types/gnome.jpeg",
    imageAlt: "Gnome looking grumpy and stretching his back.",
    pros: ["Dexterity: +2", "Health: +1"],
    cons: ["Strength: -6"],
    description:
      "Gnomes and Pictsies are solitary and reclusive, with little culture of their own beyond a traditional fondness for setting up home in large mushrooms, which they outfit with windows and chimneys. Like many small creatures, they tend to be quick on their feet and good at hiding.",
  },
  {
    name: "Banshee",
    startingPoints: 72,
    quote: "SSKCEEROOOOWCH!!!!!",
    image: "/character-types/banshee.jpeg",
    imageAlt: "A cloaked figure looking suspicious.",
    pros: ["Dexterity: +2", "Health: +1", "Hit Points: +4"],
    cons: ["Strength: -6"],
    description:
      "A rare and largely solitary creature, they have no taste for small talk. They’re also aggressive, little-loved predators",
  },
  {
    name: "Goblins",
    startingPoints: -7,
    quote: (
      <>
        Whatever you thought about goblins, their cave had the kind of
        atmosphere about which people say, &quot;I should wait two minutes
        before going in there, if I was you.&quot;
      </>
    ),
    image: "/character-types/goblin.jpeg",
    imageAlt:
      "Goblin with eyes going in two different directions, holding a bone staff.",
    pros: ["Dexterity: +1", "Health: +1"],
    cons: ["Strength: -1", "Intelligence: -1"],
    description:
      "With all goblins, the male ones especially, you got the impression of sinews but they mostly consisted of sinews tied together with other sinews. Surely, the mind protested, there must be muscles in there somewhere, but quite possibly they had to fight for room among all those damn sinews.",
  },
  {
    name: "Gnolls",
    startingPoints: -14,
    quote: "Gnolls didn't look any better inside than out.",
    image: "/character-types/gnoll.jpeg",
    imageAlt: "Gnoll covered in trash.",
    pros: ["Strength: +2", "Health: +2", "Hit Points: +2", "Perception: +2"],
    cons: ["Intelligence: -2", "Basic Move: -1"],
    description:
      "Sometimes described as a kind of low-grade troll, if only to annoy trolls, gnolls are in fact a midway point between trolls and humans. While the former are made of stone and the latter are made of meat, gnolls seem to be made of soil. (If any wizards know more, their work hasn’t been widely published – but then, Gnoll Studies isn’t a fashionable field.) They appear to be covered in a matted mixture of hair, rags, and rubbish; actually, that is the gnoll.",
  },
  // { name: "", startingPoints: 0, quote: "", image: "/character-types/", imageAlt: "", pros: [""], cons: [""], description: "" },
  // { name: "", startingPoints: 0, quote: "", image: "/character-types/", imageAlt: "", pros: [""], cons: [""], description: "" },
  // { name: "", startingPoints: 0, quote: "", image: "/character-types/", imageAlt: "", pros: [""], cons: [""], description: "" },
  // { name: "", startingPoints: 0, quote: "", image: "/character-types/", imageAlt: "", pros: [""], cons: [""], description: "" },
  // { name: "", startingPoints: 0, quote: "", image: "/character-types/", imageAlt: "", pros: [""], cons: [""], description: "" },
];
