import fastity from 'fastify'
import { memoriesRoutes } from './routes/memories'

const PORT = 3333

const app = fastity()

app.register(memoriesRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP Server running on http://localhost:${PORT}`)
  })
