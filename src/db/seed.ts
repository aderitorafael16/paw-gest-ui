import { db } from '.'
import { user } from './schema'

async function seed() {
  await db
    .insert(user)
    .values({
      email: 'aderitobento16@gmail.com',
      address: 'Luanda / Viana / Capalanga',
      phoneNumber: '945754400',
      type: 'FACULTY',
      websiteUrl: 'https://website.com',
      image: 'https://github.com/aderitorafael16.png',
      instituteName: 'Paw Gest',
      password: '@der1toAR',
    })
    .onConflictDoNothing()
}

seed()
