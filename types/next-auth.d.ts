import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    isDungeonMaster: boolean
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      isDungeonMaster: boolean
    } & DefaultSession["user"]
  }
}