import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { MeleeWeaponPrototype } from "../../../lib/prisma";
import { getMeleeWeapons } from "../../../services/weapons";
import Link from "next/link";

interface WeaponPageProps {
  weapons: any[]; // FIXME: Actually give this a weaponPrototype
  name: string;
}

function holdFormatter(hold) {
  switch (hold) {
    case "ONE_HANDED":
      return "One Handed";
    case "TWO_HANDED":
      return "Two Handed";
    case "BOTH":
      return "One Handed and Two Handed";
  }
}

export default function WeaponPage({ weapons, name }: WeaponPageProps) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <main>
        <h1>Manage {name}</h1>
        <Link href="/dungeon-master">Back</Link>
        {weapons.length === 0 && <p>No weapons</p>}
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
          }}
        >
          {weapons.map((weapon) => (
            <li key={weapon.id}>
              <article>
                {console.log(weapon)}
                <header>
                  <h3>{weapon.name}</h3>
                  <p>{weapon.description}</p>
                </header>
                <section>
                  {weapon.isThrowable && <span>Throwable</span>}
                  <table>
                    <thead>
                      <tr>
                        <th>Cost</th>
                        <th>Parry</th>
                        <th>Reach</th>
                        <th>Strength</th>
                        <th>Weight</th>
                        <th>Hold</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{weapon.cost.toString()}</td>
                        <td>{weapon.parry}</td>
                        <td>{weapon.reach}</td>
                        <td>{weapon.strength}</td>
                        <td>{weapon.weight.toString()}</td>
                        <td>{holdFormatter(weapon.hold)}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<WeaponPageProps> = async ({
  req,
  res,
  query,
}) => {
  let weapons;
  let name;
  switch (query.weaponType.toString().toLowerCase()) {
    case "melee-weapons":
      weapons = await getMeleeWeapons();
      name = "Melee Weapons";
      break;
    default:
      weapons = [];
      name = "Unknown";
      break;
  }

  return {
    props: { weapons, name },
  };
};
