import { Response, Request } from 'express'
import { returnErrFromServer } from '../configs/handlerError'
import { returnSuccess } from '../configs/handlerSuccess'
import TodoModel from '../model/todo'

class CreateTodo {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, body } = req.body
      if (!title || !body)
        return res.status(400).json({
          message: 'title or body is required'
        })
      const todo = new TodoModel({ title, body })
      const newTodo = await todo.save()
      return returnSuccess(res, newTodo)
    } catch (err) {
      return returnErrFromServer(res, err)
    }
  }
  public async getTodo(req: Request, res: Response): Promise<Response> {
    try {
      const todo = await TodoModel.find({ _id: req.params.id })
      if (!todo)
        return res.status(400).json({
          message: 'todo not found'
        })

      return returnSuccess(res, todo)
    } catch (err) {
      return returnErrFromServer(res, err)
    }
  }
  public async getTodos(req: Request, res: Response): Promise<Response> {
    try {
      const todos = await TodoModel.find()
      if (!todos)
        return res.status(400).json({
          message: 'todo not found'
        })

      return returnSuccess(res, todos)
    } catch (err) {
      return returnErrFromServer(res, err)
    }
  }
  public async deleteTodo(req: Request, res: Response): Promise<Response> {
    try {
      const todo = await TodoModel.findOneAndDelete({ _id: req.params.id })
      if (!todo)
        return res.status(400).json({
          message: 'todo not found'
        })
      return returnSuccess(res, todo)
    } catch (err) {
      return returnErrFromServer(res, err)
    }
  }
  public async updateTodo(req: Request, res: Response): Promise<Response> {
    try {
      const { title, body } = req.body
      const { id } = req.params
      if (!title || !body)
        return res.status(400).json({
          message: 'title or body not found'
        })
      const todo = await TodoModel.findOneAndUpdate(
        {
          _id: id
        },
        { title: title, body: body }
      )
      return returnSuccess(res, todo)
    } catch (err) {
      return returnErrFromServer(res, err)
    }
  }
}

export default new CreateTodo()
