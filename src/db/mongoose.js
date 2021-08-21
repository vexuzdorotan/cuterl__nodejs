const mongoose = require('mongoose')
require('dotenv').config({ path: './config/config.env' })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI_PROD || process.env.MONGODB_URI_LOCAL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
