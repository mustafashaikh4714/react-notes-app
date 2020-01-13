const jwt = require('jsonwebtoken')

const authenticate = (req, res, done) => {
  const token = req.headers.authorization

  let id = null
  try {
    id = jwt.verify(token, process.env.SECRET_KEY).id
  } catch (e) {
    return res.status(401).send(e.message)
  }
  req.id = id
  done()
}

export default authenticate
