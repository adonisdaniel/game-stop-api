import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/dbRuletas'

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL)

    console.log('CONNECTED TO MONGODB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

connectDatabase()
