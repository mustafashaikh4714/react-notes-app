import bcrypt from 'bcryptjs'
import validator from 'validator'
import User from '../models/user'
import genToken from '../utils/genToken'
export default app => {
  app.post('/register/user', async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password)
      return res.status(403).send({ message: 'Some fields are missing' })

    if (!validator.isEmail(email))
      return res.status(403).send({ message: 'Invalid email' })

    const hashPassword = await getHash(password)
    const newUser = await new User({
      username: username.trim(),
      email: email.toLowerCase(),
      password: hashPassword
    }).save()

    if (newUser)
      res.send({ success: true, message: 'User register successfully.' })
    res.send({ success: false, message: 'Unable to register new user!' })
  })
  app.post('/login/user', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(403).send({ message: 'Some fields are missing' })

    if (!validator.isEmail(email))
      return res.status(403).send({ message: 'Invalid email' })

    const user = await User.findOne({ email })
    if (!user) return res.status(400).send({ message: 'User does not exists.' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res
        .status(400)
        .send({ message: 'Invalid Password. Please try again.' })

    const data = {
      userId: user._id,
      email: user.email
    }

    res.send({
      success: true,
      message: 'User login successfully.',
      token: genToken(data)
    })
  })
}
