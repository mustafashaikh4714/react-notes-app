import mongoose from 'mongoose'
module.exports = () => {
  return new Promise((resolve, reject) => {
    try {
      mongoose.connect(process.env.DATABASE_URL)
      resolve()
    } catch (error) {
      reject(error.message)
    }
  })
}
