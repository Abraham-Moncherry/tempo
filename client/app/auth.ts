import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
//import NodemailerProvider from "next-auth/providers/nodemailer";

import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
   ],
   adapter: PrismaAdapter(prisma)
 });