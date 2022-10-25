import prisma from "../../lib/prisma";

export default function createAttributeModifiers() {
  Promise.all([])
    .then(() => console.log("Done seeding attribute modifiers"))
    .catch((e) => console.error("Failed seeding attribute modifiers", e));
}
