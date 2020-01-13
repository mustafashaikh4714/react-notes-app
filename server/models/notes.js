import { Schema } from 'mongoose'
const NoteSchema = new Schema({
  title: String,
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Note = mongoose.model('Note', NoteSchema, 'notes')
export default Note
