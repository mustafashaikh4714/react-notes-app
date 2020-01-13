import jwt from 'jsonwebtoken'
const genToken = user => jwt.sign({ user }, process.env.SECRET_KEY)
export default genToken
