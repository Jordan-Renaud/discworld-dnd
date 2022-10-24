import prisma, { AttackType, DamageType, Hold } from "../../lib/prisma";

export default async function createMissileWeapons() {
  Promise.all([
    prisma.missileWeaponPrototype.create({
      data: {
        name: "Axe",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        accuracy: 2,
        range: "x1/x1.5",
        weight: 4.0,
        shots: 1,
        preparationTime: 0,
        cost: 3.0,
        strength: 11,
        bulk: -3,
        hold: Hold.ONE_HANDED,
        description:
          "Only two things in life are certain: death and axes. The former usually follows the latter.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Hatchet",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        accuracy: 1,
        range: "x1/x1.5",
        weight: 2.0,
        shots: 1,
        preparationTime: 0,
        cost: 2.0,
        strength: 8,
        bulk: -2,
        hold: Hold.ONE_HANDED,
        description:
          "A hatchet is a light axe made for chopping wood... Mainly.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Mace",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        accuracy: 1,
        range: "x0.5/x1",
        weight: 5.0,
        shots: 1,
        preparationTime: 0,
        cost: 2.5,
        strength: 12,
        bulk: -4,
        hold: Hold.ONE_HANDED,
        description: "Step up from wacking stick.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Small Mace",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 2,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        accuracy: 1,
        range: "x1.5/x1.5",
        weight: 3.0,
        shots: 1,
        preparationTime: 0,
        cost: 1.75,
        strength: 10,
        bulk: -3,
        hold: Hold.ONE_HANDED,
        description: "Step up from wacking stick, but like a bit smaller.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Large Knife",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 0,
        range: "x0.8/x1.5",
        weight: 1.0,
        shots: 1,
        preparationTime: 0,
        cost: 2,
        strength: 6,
        bulk: -2,
        hold: Hold.ONE_HANDED,
        description: `This is large butchering knife. Its blade has an outward curve, to make it easier to cut through large cuts of "meat" with ease.`,
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Small Knife",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: -1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 0,
        range: "x0.5/x1",
        weight: 0.5,
        shots: 1,
        preparationTime: 0,
        cost: 1.5,
        strength: 5,
        bulk: -1,
        hold: Hold.ONE_HANDED,
        description:
          "This small knife might be the sort of thing you'd use to peel an apple, slice carrots or stab in someone's kidney. You could say that it's a multi-purpose utensil.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Dagger",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: -1,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 0,
        range: "x0.5/x1",
        weight: 0.5,
        shots: 1,
        preparationTime: 0,
        cost: 1,
        strength: 5,
        bulk: -1,
        hold: Hold.ONE_HANDED,
        description: "This is a largish looking knife. Good for stabbing.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Spear",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 2,
        range: "x1/x1.5",
        weight: 4,
        shots: 1,
        preparationTime: 0,
        cost: 2,
        strength: 9,
        bulk: -6,
        hold: Hold.ONE_HANDED,
        description:
          "Made from a long piece of wood with a steel spearhead attached to one end. It looks quite sharp and could cause considerable damage in the right hands.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Javelin",
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
        accuracy: 3,
        range: "x1.5/x2.5",
        weight: 2,
        shots: 1,
        preparationTime: 0,
        cost: 1.5,
        strength: 6,
        bulk: -4,
        hold: Hold.ONE_HANDED,
        description:
          "This is a javelin. It is like a spear only somewhat shorter.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Boomerang Croissant",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.CRUSHING,
            },
          ],
        },
        accuracy: 2,
        range: "x6/x10",
        weight: 1,
        shots: 1,
        preparationTime: 0,
        cost: 1,
        strength: 6,
        bulk: -2,
        hold: Hold.ONE_HANDED,
        description:
          "Dwarf bread is as hard as stone and can hold an edge, allowing a skilled baker to create effective weapons.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Thowing Star",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: -1,
              attackType: AttackType.THRUST,
              damageType: DamageType.CUTTING,
            },
          ],
        },
        accuracy: 1,
        range: "x0.5/x1",
        weight: 0.1,
        shots: 1,
        preparationTime: 0,
        cost: 0.15,
        strength: 5,
        bulk: 0,
        hold: Hold.ONE_HANDED,
        description:
          "Throwing stars are small star-shaped throwing blades that are easily concealable in clothing. Just don't forget they are there.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Blowpipe",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: -1,
              attackType: AttackType.THRUST,
              damageType: DamageType.SMALL_PIERCING,
            },
          ],
        },
        accuracy: 1,
        range: "x4",
        weight: 1,
        shots: 1,
        preparationTime: 2,
        cost: 0.15,
        strength: 5,
        bulk: 6,
        hold: Hold.ONE_HANDED,
        description:
          "Throwing stars are small star-shaped throwing blades that are easily concealable in clothing. Just don't forget they are there.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Longbow",
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
        accuracy: 3,
        range: "x15/x20",
        weight: 3,
        shots: 1,
        preparationTime: 2,
        cost: 10,
        strength: 11,
        bulk: 8,
        hold: Hold.TWO_HANDED,
        description: "Think short bow but longer.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Short Bow",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 1,
        range: "x10/x15",
        weight: 2,
        shots: 1,
        preparationTime: 2,
        cost: 2.5,
        strength: 7,
        bulk: 6,
        hold: Hold.TWO_HANDED,
        description: "Think long bow but shorter.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Composite Bow",
        dexterity: 5,
        damageProperties: {
          create: [
            {
              modifier: 3,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 3,
        range: "x20/x25",
        weight: 4,
        shots: 1,
        preparationTime: 2,
        cost: 45,
        strength: 10,
        bulk: 7,
        hold: Hold.TWO_HANDED,
        description:
          "Now this is a bow. A traditional bow made from horn, wood, sinew, and various other materials laminated together. Don't look closely.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Crossbow",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 4,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 4,
        range: "x20/x25",
        weight: 6,
        shots: 1,
        preparationTime: 4,
        cost: 7.5,
        strength: 7,
        bulk: 6,
        hold: Hold.TWO_HANDED,
        description:
          'Much smaller than any other sort, this crossbow is simply a long cylinder and a spring combined to propel a bolt forward at incredible speed. Difficult to load and small enough to be concealed in an item of clothing, it is nicknamed a "one-shot" as it is the one shot that no one expects.',
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Troll Crossbow",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 5,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 4,
        range: "x22/x28",
        weight: 12,
        shots: 1,
        preparationTime: 4,
        cost: 10,
        strength: 16,
        bulk: 9,
        hold: Hold.TWO_HANDED,
        description:
          "Adapted from small siege engines for the use of troll watchmen in Ankh-Morpork, not usually within troll society manufacturing capability.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Pistol Crossbow",
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
        accuracy: 1,
        range: "x15/x20",
        weight: 4,
        shots: 1,
        preparationTime: 4,
        cost: 7.5,
        strength: 7,
        bulk: 4,
        hold: Hold.ONE_HANDED,
        description:
          "Combine a pistol with a crossbow and you have a terrifying weapon, provided you have the time to get it ready.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Spring Gun",
        dexterity: 4,
        damageProperties: {
          create: [
            {
              modifier: 4,
              attackType: AttackType.THRUST,
              damageType: DamageType.IMPALING,
            },
          ],
        },
        accuracy: 3,
        range: "x20/x25",
        weight: 5,
        shots: 1,
        preparationTime: 4,
        cost: 7.5,
        strength: 20,
        bulk: 4,
        hold: Hold.ONE_HANDED,
        description:
          "Basically a metal tube with an extremely powerful internal spring and an ingenious built-in cocking mechanism. The user is only expected to get one shot per fight, but that should be by surprise.",
      },
    }),

    prisma.missileWeaponPrototype.create({
      data: {
        name: "Sling",
        dexterity: 6,
        damageProperties: {
          create: [
            {
              modifier: 0,
              attackType: AttackType.SWING,
              damageType: DamageType.SMALL_PIERCING,
            },
          ],
        },
        accuracy: 0,
        range: "x6/x10",
        weight: 0.5,
        shots: 1,
        preparationTime: 2,
        cost: 1,
        strength: 6,
        bulk: 4,
        hold: Hold.ONE_HANDED,
        description:
          "Something you can rest your arm in if it gets... wait no, the other one.",
      },
    }),
  ])
    .then(() => console.log("Done seeding Missile Weapons"))
    .catch((e) => console.error("Failed seeding Missile Weapons", e));
}
