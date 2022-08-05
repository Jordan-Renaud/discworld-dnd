import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.isDungeonMaster = user.isDungeonMaster;
      return session;
    },
    async signIn({ user }) {
      const dmEmail = process.env.DUNGEON_MASTER_EMAIL;
      console.log(dmEmail);
      // Set/unset the DM
      try {
        const foundUser = await prisma.user.findFirst({
          where: { email: user.email },
        });

        if (!foundUser) {
          return true;
        }

        await prisma.user.update({
          where: { email: user.email },
          data: {
            isDungeonMaster: user.email === dmEmail,
          },
        });
      } catch (e) {
        console.error(e);
      }

      return true;
    },
  },
});
