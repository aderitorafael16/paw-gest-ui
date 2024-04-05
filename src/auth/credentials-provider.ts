import CredentialsProvider from 'next-auth/providers/credentials'

export const credentialsProvider = CredentialsProvider({
  credentials: {
    email: {
      label: 'E-mail',
      type: 'email',
      placeholder: 'use aderitobento16@gmail.com',
      value: 'aderitobento16@gmail.com',
    },
    password: {
      label: 'Password',
      type: 'password',
      value: '12345678',
      placeholder: 'use 12345678',
    },
  },
  async authorize(credentials) {
    if (
      credentials?.email === 'aderitobento16@gmail.com' &&
      credentials.password === '12345678'
    ) {
      return {
        id: '67tgr-54t5g-g54tgt-g54g4-54g5',
        email: credentials.email,
        name: 'Adérito Rafael',
        image: 'https://github.com/aderitorafael16.png',
      }
    }

    throw new Error('Unauthorized.')
  },
})
