import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DungeonMasterDashboard() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/"); //redirect home if the user is not authenticated
    },
  });

  useEffect(() => {
    if (status === "authenticated" && !session.user.isDungeonMaster) {
      router.push("/"); //redirect home if the user is not the DM
    }
  }, [status]);

  return (
    <>
      <Head>
        <title>Dungeon Master Dashboard </title>
      </Head>
      <main>
        <h1>Dungeon Master Dashboard</h1>
        <h2>Manage Weapons</h2>
        <Link href="/dungeon-master/melee-weapons/">Melee Weapons</Link>
      </main>
    </>
  );
}
