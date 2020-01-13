import authenticate from '../middleware/auth'

export default app => {
  app.post('/add/note', authenticate, async (req, res) => {})
  app.get('/get/notes', authenticate, async (req, res) => {})
  app.delete('/delete/note/:id', authenticate, async (req, res) => {})
  app.put('/update/note/:id', authenticate, async (req, res) => {})
}
