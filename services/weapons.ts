import prisma from "../lib/prisma";

export async function getMeleeWeapons() {
  const weapons = await prisma.meleeWeaponPrototype.findMany()

  return weapons.map(x => ({ ...x, cost: x.cost.toNumber(), weight: x.weight.toNumber() }))
}