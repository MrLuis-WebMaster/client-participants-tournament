import NextAuth from "next-auth"
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"


const options: NextAuthOptions = {
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        profile(profile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
          }
        },
      }),
  ],

  callbacks: {
    async signIn({ profile }) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/participants/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: profile.name,
          email: profile.email
        })
      });
      if (!response.ok) {
        console.log(response.statusText)
      }
      return true
    },
    async session({ session }) {
      return session
    },
    async redirect({ url }) {
      return Promise.resolve(url)
    },
    async jwt({ token }) {
      return token
    },
  },
  pages: {
    signOut: ''
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }