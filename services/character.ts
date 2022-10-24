import prisma from "../lib/prisma";

export async function getAllCharacters() {
  return prisma.character.findMany();
}

// TODO: Accept character
// export async function createCharacter() {
//   return prisma.character.create({ data: { name: 'test' } })
// }
