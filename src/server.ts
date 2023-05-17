import fastity from 'fastify'
import { PrismaClient } from '@prisma/client'

const PORT = 3333

const app = fastity()
const prisma = new PrismaClient()

app.get('/hello', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP Server running on http://localhost:${PORT}`)
  })
