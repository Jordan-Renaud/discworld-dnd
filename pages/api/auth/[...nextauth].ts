import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

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
      session.user.isDungeonMaster = user.isDungeonMaster
      return session
    },
    async signIn({ user }) {
      const dmEmail = process.env.DUNGEON_MASTER_EMAIL
      // Set/unset the DM
      await prisma.user
        .update({
          where: { email: user.email },
          data: {
            isDungeonMaster: user.email === dmEmail
          }
        })

      return true
    }
  }
})