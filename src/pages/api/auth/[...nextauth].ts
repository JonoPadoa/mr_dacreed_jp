import NextAuth from "next-auth";
// import { authOptions } from "~/server/auth";
// export default NextAuth(authOptions);
import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
// to read about clerk instead of Google in providers
// how to set up Clerk with NextAuth
