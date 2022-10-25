import prisma from "../../lib/prisma";

export default function createSocialTraits() {
  Promise.all([
    prisma.socialTrait.create({
      data: {
        name: "Apperance",
        description:
          "You may choose any physical appearance you like it’s mostly a “special effect.” However, if your looks are good or bad enough, they will influence how people respond to you. They also have a point value, for which, appearance is rated in levels. Most people are “Average,” for 0 points. Pleasing looks give a bonus to reaction rolls, and are an advantage that costs points. Unappealing looks give a reaction penalty, making them a disadvantage that gives back points.",
        basePointsCost: 0,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Build - Weight",
        description:
          "If your physique differs significantly from the norm, you suffer penalties to your Disguise skill, and to Shadowing skill if trying to follow someone in a crowd. There are usually other consequences as well.",
        basePointsCost: 0,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Build - Height",
        description:
          "If your physique differs significantly from the norm, you suffer penalties to your Disguise skill, and to Shadowing skill if trying to follow someone in a crowd. There are usually other consequences as well.",
        basePointsCost: 0,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Charisma",
        description:
          "You have a natural ability to impress and lead others. Anyone can improve their looks, manners, and intelligence, but real charisma is independent of these things. Each level gives +1 on all reaction rolls when interacting with sapient beings, +1 to Influence rolls, and +1 to Fortune-Telling, Leadership, Panhandling, and Public Speaking skills.",
        basePointsCost: 5,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Odius Personal Habits",
        description:
          "You usually or always behave in a repugnant fashion. An Odious Personal Habit (OPH) is worth -5 points for every -1 to reaction rolls made by people who notice it. Specify the behaviour when you create your character, and work out the point value with the GM. Some examples: Body odour, constant scratching, or tuneless humming give -1 to reactions and are worth -5 points apiece. Constant bad puns or spitting on the floor would give -2 to reactions, worth -10 points apiece. We leave -15-point habits (-3 to reac- tions) to the imagination!",
        basePointsCost: 0,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Pitiable",
        description:
          "Something about you makes people pity you and want to take care of you. You get +3 on reaction rolls from those who consider you to be in a position of weakness or need. Taken in conjunction with above-average looks, Pitiable means you’re “cute” instead of “sexy”; in combination with below-average looks, it means you’re “appealingly homely.”",
        basePointsCost: 5,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Unnatural Features",
        description:
          "You are superficially “normal” but have one or more disturbing cosmetic features. To qualify for points, these must be unnatural for your race. Grey, stony skin would be unnatural for a human, but not for troll! Specify the origin of your Unnatural Features: magical curse, bungled surgery, rare disease, etc. Unnatural Features need not be unattractive, but they make it easy for others to identify you and hard for you to blend into a crowd.",
        basePointsCost: -1,
      },
    }),

    prisma.socialTrait.create({
      data: {
        name: "Vocal Features",
        description:
          "You may have a notably good or bad voice. This modifies reac- tion rolls when you have to talk to people, and it affects the skills Diplomacy, Fast-Talk, Mimicry, Performance, Politics, Public Speaking, Sex Appeal, and Singing.",
        basePointsCost: 0,
      },
    }),

    /////////////////////////////////////////

    prisma.socialTraitCategory.create({
      data: {
        name: "Hideous",
        description:
          "Any sort of disgusting looks: severe skin disease, walleye . . . preferably several things at once. This gives -4 on reaction rolls.",
        pointCost: -16,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Ugly",
        description:
          "Not as bad as hideous, maybe only stringy hair and snaggle teeth. Gives -2 on reaction rolls.",
        pointCost: -8,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Unattractive",
        description:
          "You look vaguely unappealing, but it’s nothing anyone can put a finger on. Gives -1 on reaction rolls.",
        pointCost: -4,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Average",
        description: "The default level.",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Attractive",
        description:
          "You don’t enter beauty contests, but are definitely good-looking. Gives +1 on reaction rolls.",
        pointCost: 4,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Handsome or Beautiful",
        description:
          "You could enter beauty contests. Gives +4 on reaction rolls made by those attracted to members of your sex, +2 from everyone else.",
        pointCost: 12,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Very Handsome or Very Beautiful",
        description:
          "You could regularly win beauty contests. Gives +6 on reaction rolls made by those attracted to members of your sex, +2 from others.",
        pointCost: 16,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Skinny",
        description:
          "Gives you -2 to your Disguise skill, and to your Shadowing skill. Also, results in -2 to ST when you resist knockback. Your HT may not exceed 14.",
        pointCost: -5,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Overweight",
        description:
          "Gives you -1 to your Disguise skill, and to your Shadowing skill. You get +1 to Swimming rolls, and +1 to ST to resist knockback.",
        pointCost: -1,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Fat",
        description:
          "Gives you -2 to your Disguise skill, and to your Shadowing skill. However, you get +3 to Swimming rolls, and +2 to ST to resist knockback. Your HT may not exceed 15.",
        pointCost: -3,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Very Fat",
        description:
          "Gives you -3 to your Disguise skill, and to your Shadowing skill. However, you get +5 to Swimming rolls, and +3 to ST to resist knockback. Your HT may not exceed 13.",
        pointCost: -5,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Dwarfism",
        description:
          "Gives you -2 to your Disguise skill, and to your Shadowing skill. You also have -1 Size Modifier relative to the norm for adults of your species, and -1 to Basic Move. In combat, your reach with any weapon is reduced by one point, because you have shorter arms and related problems with your build. This is a personal physical abnormality, and it has nothing to do with the race of dwarfs; indeed, it would be possible to be a dwarf with dwarfism. Humans with dwarfism will always be less than 4’4” tall.",
        pointCost: -15,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Gigantism",
        description:
          "Gives you -2 to your Disguise skill, and to your Shadowing skill. You also have +1 Size Modifier relative to the norm for your species and you get +1 to Basic Move (long legs).",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Barbarian Heroism",
        description:
          "It involves a lot of quaffing, shouting, brawling, moroseness when sober, petty thievery when short of cash, attacking anyone whom you take for an evil wizard, and interminable quotation of tribal epics, pedigree, and feuds. Other would-be heroes might not react negatively to this, but those who don’t will probably join in, competitively.",
        pointCost: -5,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "Throat-Staring",
        description:
          "This is only appropriate for known vampires, werewolves, and other “monsters.” If you can’t break the habit of noticeably contemplating human throats, humans either avoid you or prepare the stakes and silverware.",
        pointCost: -5,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "",
        description: "",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "",
        description: "",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "",
        description: "",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "",
        description: "",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),

    prisma.socialTraitCategory.create({
      data: {
        name: "",
        description: "",
        pointCost: 0,
        // socialTrait: { connect: { id: "gg" } },
      },
    }),
  ])
    .then(() => console.log("Done seeding social traits"))
    .catch((e) => console.error("Failed seeding social traits", e));
}
