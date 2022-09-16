import express from 'express'
import cors from 'cors'
import connectTodb from './configs/db.config'
import createRouter from './routers'
const PORT = 8000
const server = async () => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  connectTodb()
  createRouter(app)
  app.listen(PORT, () => {
    console.log('server listening on port ' + PORT)
  })
}
server()
