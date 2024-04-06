import type { NextAuthConfig, Session } from 'next-auth'

import { credentialsProvider } from './credentials-provider'
import { drizzleAuthAdapter } from './drizzle-auth-adapter'

export const authConfig = {
  adapter: drizzleAuthAdapter,
  pages: {
    signIn: '/auth/sign-in',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [credentialsProvider],
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === 'credentials') {
        return true
      }

      return false
    },
    jwt({ token, session, trigger }) {
      function isSessionAvailable(session: unknown): session is Session {
        return !!session
      }

      if (trigger === 'update' && isSessionAvailable(session)) {
        token.name = session.user.name
      }

      return token
    },
    session({ session, ...params }) {
      if ('token' in params && session.user) {
        session.user.id = params.token.sub!
      }

      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user

      const isOnPublicPages = nextUrl.pathname.startsWith('/auth')
      const isOnPublicAPIRoutes = nextUrl.pathname.startsWith('/api/auth')
      const isOnAPIRoutes = nextUrl.pathname.startsWith('/api')
      const isOnPrivatePages = !isOnPublicPages

      if (isOnPublicAPIRoutes) {
        return true
      }

      if (isOnPublicPages && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }

      if (isOnAPIRoutes && !isLoggedIn) {
        return Response.json({ message: 'Unauthorized.' }, { status: 401 })
      }

      if (isOnPrivatePages && !isLoggedIn) {
        return Response.redirect(new URL('/auth/sign-in', nextUrl))
      }

      return true
    },
  },
} satisfies NextAuthConfig
