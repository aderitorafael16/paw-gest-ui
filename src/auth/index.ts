import NextAuth from 'next-auth'

import { authConfig } from './auth.config'

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
  unstable_update: update,
} = NextAuth(authConfig)
