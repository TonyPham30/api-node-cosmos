import { Schema, model } from 'mongoose'

const TodoSchema = new Schema(
  {
    title: String,
    body: String
  },
  {
    timestamps: true
  }
)
const TodoModel = model('Todo', TodoSchema)

export default TodoModel
