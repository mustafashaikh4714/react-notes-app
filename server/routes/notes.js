import { Types } from 'mongoose'
import authenticate from '../middleware/auth'
import Note from '../models/notes'
import User from '../models/user'

export default app => {
  app.post('/add/note', authenticate, async (req, res) => {
    const { title, description } = req.body
    const { email } = req.user

    if (!title || !description)
      return res.status(403).send({ message: 'Some fields are missing' })

    const user = User.findOne({ email })
    if (!user) return res.status(401).send({ message: 'Invalid user token.' })

    const newNote = await new Note({ title, description, user }).save()

    if (newNote)
      res.send({ success: true, message: 'Note added successfully.' })
    res.send({ success: false, message: 'Unable to add a note!' })
  })
  app.get('/get/notes', authenticate, async (req, res) => {
    const { userId } = req.user
    const notes = await Note.find({ user: userId }).lean()
    return res.send({ notes })
  })
  app.delete('/delete/note/:id', authenticate, async (req, res) => {
    if (!Types.ObjectId.isValid(id))
      return res.status(400).send({ message: 'Invalid note id' })

    const deletedNote = await Note.findOneAndDelete({ _id: id })
    if (deletedNote)
      res.send({ success: true, message: 'Note deleted successfully.' })
    res.send({ success: false, message: 'Unable to delete note.' })
  })
  app.put('/update/note/:id', authenticate, async (req, res) => {
    const { title, description } = req.body

    if (!Types.ObjectId.isValid(id))
      return res.status(400).send({ message: 'Invalid note id' })

    const updatedNote = await Note.findOneAndUpdate(
      { _id: id },
      { $set: { title, description } },
      { new: true }
    )
    if (updatedNote)
      res.send({ success: true, message: 'Note updeted successfully.' })
    res.send({ success: false, message: 'Unable to update note.' })
  })
}
