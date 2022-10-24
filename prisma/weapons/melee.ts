import prisma, { AttackType, DamageType, Hold } from "../../lib/prisma";

export default async function createMeleeWeapons() {
  Promise.all([
    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Axe",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 3.0,
        weight: 4.0,
        strength: 11,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          "Only two things in life are certain: death and axes. The former usually follows the latter.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Club",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 1.75,
        weight: 5.0,
        strength: 12,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description: "Now this is a stick.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Hatchet",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 2.0,
        weight: 2.0,
        strength: 8,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          "A hatchet is a light axe made for chopping wood... Mainly.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Mace",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 2.5,
        weight: 5.0,
        strength: 12,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description: "Step up from wacking stick.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Small Mace",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 1.75,
        weight: 3.0,
        strength: 10,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description: "Step up from wacking stick, but like a bit smaller.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Pick",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.SWING,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 3.5,
        weight: 3.0,
        strength: 10,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          'You get to "pick" which part of an enemies\' body impale! *Warning may get stuck in people/things',
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Large Truncheon",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 0.25,
        weight: 3.0,
        strength: 10,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description: "Definitely not compensating for anything.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Broadsword",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 30.0,
        weight: 3.0,
        strength: 10,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "Some say the pen is mightier than the sword, obviously they haven't been stabbed before.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Agatean Numknuts",
        dexterity: 6,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 1,
        weight: 2,
        strength: 7,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "Consists of two sticks connected at their ends with a short chain or rope. In the hands of an expert, these are intimidating and potent weapons in hand-to-hand combat. Most people end up hitting their own ear.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Morningstar",
        dexterity: 6,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 4,
        weight: 6,
        strength: 12,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "The morning star is a piece of wood about a foot long with a chain at one end. Attached to the chain is a ball with lots of nasty spikes sticking out of it. It gives you a sudden urge to visit your mother in law.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Large Knife",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "0, 1",
        parry: -1,
        cost: 2.0,
        weight: 1.0,
        strength: 6,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          'This is large butchering knife. Its blade has an outward curve, to make it easier to cut through large cuts of "meat" with ease.',
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Small Knife",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "0",
        parry: -1,
        cost: 1.5,
        weight: 0.5,
        strength: 5,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          "This small knife might be the sort of thing you'd use to peel an apple, slice carrots or stab in someone's kidney. You could say that it's a multi-purpose utensil.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Dagger",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "0, 1",
        parry: -1,
        cost: 1.0,
        weight: 0.25,
        strength: 5,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description: "This is a largish looking knife. Good for stabbing.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Hatpin",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "0",
        parry: -2,
        cost: 0.3,
        weight: 0.1,
        strength: 2,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          "Hatpins are long pins that can be skewered into a witch's hat or used to make a (sharp) point more tangible. All hatpins judge the same.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Halberd",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 5,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 4,
              attackType: AttackType.SWING,
              damageType: DamageType.IMPALING,
            },
            {
              modifier: 3,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1, 2, 3",
        parry: 0,
        cost: 7.5,
        weight: 12,
        strength: 13,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "This weapon is what you get when someone thinks that a spear isn't impressive enough, and an axe wasn't long enough, and so decides to combine the two. It's about six feet long, and has a wickedly sharp point and axe-like head.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Short Glaive",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 3,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 4.0,
        weight: 6,
        strength: 9,
        isThrowable: false,
        hold: Hold.BOTH,
        description: "Basically a sword but *fancy*.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Rapier",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 25.0,
        weight: 2.75,
        strength: 9,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "This is a long and slender-bladed sword. Emphasising the thrust over the cut, this rapier is double-edged and sharpened to fine edges on both sides. A complex leather-bound hilt completes its thin blade, which looks very fancy and potentially adept at both slashing and stabbing.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Small Truncheon",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
            {
              modifier: 0,
              attackType: AttackType.THRUST,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 1,
        weight: 1,
        strength: 6,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description: "Like a stick, a small stick. Good for wacking.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Shortsword",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 20.0,
        weight: 2.0,
        strength: 8,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description: "Picture a sword, now make it shorter. Perfection.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Sickle Sword",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 20.0,
        weight: 3.0,
        strength: 10,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "This weapon is curved so much that the handle and the sharp point of the blade are pointing in the same direction. Its balance and edge indicate that it was not made for use as a simple farm tool. The blade is highly polished, almost shiny enough to use as a makeshift mirror. Sorry I'm out of jokes.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Smallsword",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 20.0,
        weight: 1.5,
        strength: 5,
        isThrowable: false,
        hold: Hold.ONE_HANDED,
        description:
          "A highly decorative weapon with a jewelled hilt and engraved blade, this sword looks more for show than combat.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Spear",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 2.0,
        weight: 4.0,
        strength: 9,
        isThrowable: true,
        hold: Hold.BOTH,
        description:
          "Made from a long piece of wood with a steel spearhead attached to one end. It looks quite sharp and could cause considerable damage in the right hands.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Javelin",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 1.5,
        weight: 2.0,
        strength: 6,
        isThrowable: true,
        hold: Hold.ONE_HANDED,
        description:
          "This is a javelin. It is like a spear only somewhat shorter.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Quarterstaff",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
            {
              modifier: 2,
              attackType: AttackType.THRUST,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1, 2",
        parry: 2,
        cost: 0.5,
        weight: 4.0,
        strength: 7,
        isThrowable: false,
        hold: Hold.BOTH,
        description:
          "Wait no, hang on, now *this* is a stick. Good for wacking.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Big Club",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 4,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 4.0,
        weight: 12.0,
        strength: 13,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "This club is a crude weapon, yet effective when in the right hands.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Very Big Club",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 5,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 5.0,
        weight: 15.0,
        strength: 16,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "This (now quite large) club is a crude weapon, yet effective when in the right hands.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Huge Club",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 7,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 7.0,
        weight: 21.0,
        strength: 23,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "This (ok, this is getting rediculous) club is a crude weapon, yet effective when in the right hands.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Monster Club",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 9,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 9.0,
        weight: 27.0,
        strength: 29,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description: "Look you get the idea. This is a big fuck off stick.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Great Axe",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 5.0,
        weight: 8.0,
        strength: 12,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "Axe made of high quality dwarfish steel. Many a dwarf owe their lives to keeping one at their sides at all times although it can be a bit creepy when they take to sleeping with them as well.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Scythe",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1",
        parry: 0,
        cost: 0.75,
        weight: 5.0,
        strength: 11,
        isThrowable: false,
        hold: Hold.TWO_HANDED,
        description:
          "The scythe can not possibly be sharpened any more, as it is beyond the human capacity to believe that it is this sharp in the first place. Maybe a hand of one of the many Gods about the place could get it sharper, but then such a deity would have a problem.",
      },
    }),

    prisma.meleeWeaponPrototype.create({
      data: {
        name: "Greatsword",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
            {
              modifier: 3,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        reach: "1, 2",
        parry: 0,
        cost: 45.0,
        weight: 7.0,
        strength: 12,
        isThrowable: false,
        hold: Hold.BOTH,
        description:
          "A nice long sword. It is made of steel and has sharp edges. Be careful how you handle it, you don't want to lose a finger.",
      },
    }),
  ])
    .then(() => console.log("Done seeding Melee Weapons"))
    .catch((e) => console.error("Failed seeding Melee Weapons", e));
}
