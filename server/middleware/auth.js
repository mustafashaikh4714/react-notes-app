const jwt = require('jsonwebtoken')

const authenticate = (req, res, done) => {
  const token = req.headers.authorization

  let user = null
  try {
    user = jwt.verify(token, process.env.SECRET_KEY).user
  } catch (e) {
    return res.status(401).send(e.message)
  }
  req.user = user
  done()
}

export default authenticate
