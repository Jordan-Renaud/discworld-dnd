// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCharacter } from "../../services/character";

export default async function handler(req, res) {
  await createCharacter();
  res.status(200).json({ name: "John Doe" });
}
