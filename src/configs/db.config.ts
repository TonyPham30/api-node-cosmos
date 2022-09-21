// eslint-disable-next-line prettier/prettier
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { serverUrl } from './enviroment.config'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const connectTodb = async () => {
  try {
    const connect = await mongoose.connect(serverUrl, () => {
      console.log('Connected to database: ' + process.env.AZURE_COSMOSDB_NAME)
    })
    return connect
  } catch (err) {
    console.error(err)
  }
}

export default connectTodb
