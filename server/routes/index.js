import notes from './notes'
import user from './user'
user(app)
notes(app)
// const genToken = require('../utils/genToken')
// const getHash = require('../utils/getHash')
// const {authenticate} = require('../middleware/auth')
// const User = require('../models/user')
// const bcrypt = require('bcryptjs')

// module.exports = (app) => {

//  // User Signup
//  app.post('/user/signup', async (req, res) => {
//      let {email, password} = req.body

//      const hashPassword = await getHash(password)

//      new User({email, password:hashPassword})
//      .save()
//      .then(user => {

//          res.header('authorization', genToken(user._id)).send({
//              success:true,
//              message:'user registered successfully',
//          })
//      }

//         )
//         .catch(err =>
//             res.status(400)
//             .send({
//                 success:false,
//                 message: 'Database Server error'
//             })
//             )
//  })

//  // User login
//  app.post('/user/login', async (req, res) => {
//      let { email, password } = req.body

//      const user = await User.findOne({email})

//      if (!user) {
//         return res
//           .status(400)
//           .send({ success: false, message: "User not exists." })
//       }

//       const isMatch = await bcrypt.compare(password, user.password)

//       if(!isMatch) {
//           return res.status(400)
//           .send({
//               success:false,
//               message:'password not matched'
//           })
//       }

//       return res.header('authorization', genToken(user._id)).send({
//         success: true,
//         message: 'User Login successfully',
//       })

//  })

//  //Protected
//  app.get('/protected', authenticate ,(req, res) => {

//     User.findById({_id:req.id})
//     .then(user => {
//         if(!user) {
//             return res.status(403)
//             .send({
//                 success:false,
//                 message:'User not found'
//             })
//         }

//         res.send(`user email: ${user.email}`)
//     })
//     .catch(err =>
//       res.status(400).send({ success: false, message: err.message })
//      )
// })
// }
