import prisma from "../../lib/prisma";

export default function createCharacterClasses() {
  Promise.all([])
    .then(() => console.log("Done seeding character classes"))
    .catch((e) => console.error("Failed seeding character classes", e));
}
