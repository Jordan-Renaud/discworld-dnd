import prisma, { AttackType, DamageType, Hold } from "../../lib/prisma";

function createMissileWeapons() {
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
        shots: 0,
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
        shots: 0,
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
        shots: 0,
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
        shots: 0,
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
        weight: 3.0,
        shots: 0,
        cost: 1.75,
        strength: 10,
        bulk: -3,
        hold: Hold.ONE_HANDED,
        description: "Step up from wacking stick, but like a bit smaller.",
      },
    }),
  ]);
}
