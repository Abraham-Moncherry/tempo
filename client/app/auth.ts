import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import NodemailerProvider from "next-auth/providers/nodemailer";
import { render } from "@react-email/render";

import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import TempoMagicLinkEmail from "@/components/tempo-magic-link";

export const runtime = 'nodejs';

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      NodemailerProvider({
         server: {
            host: process.env.EMAIL_SERVER_HOST!,
            port: Number(process.env.EMAIL_SERVER_PORT!),
            auth: {
               user: process.env.EMAIL_SERVER_USER!,
               pass: process.env.EMAIL_SERVER_PASSWORD!,
            },
         },
         from: process.env.EMAIL_FROM!,
         async sendVerificationRequest({ identifier: email, url, provider }) {
            const nodemailer = require("nodemailer");
            const transport = nodemailer.createTransport(provider.server);

            const emailHtml = await render(TempoMagicLinkEmail({
               magicLink: url,
               userEmail: email
            }));

            await transport.sendMail({
               to: email,
               from: provider.from,
               subject: `Sign in to Tempo`,
               html: emailHtml,
               text: `Sign in to Tempo\n${url}\n\n`,
            });
         },
      }),
   ],
   adapter: PrismaAdapter(prisma),
   callbacks: {
      async redirect({ baseUrl }) {
         // Always redirect to dashboard after successful sign in
         return `${baseUrl}/dashboard`;
      },
      async signIn({ user }) {
         // If user doesn't have a name and we have an email, extract name from email
         if (!user.name && user.email) {
            const emailName = user.email.split('@')[0];
            // Capitalize first letter and replace dots/underscores with spaces
            user.name = emailName
               .replace(/[._]/g, ' ')
               .replace(/\b\w/g, l => l.toUpperCase());
         }
         return true;
      },
   },
   pages: {
      signIn: "/login",
      error: "/login",
   }
 });