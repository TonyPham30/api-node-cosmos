import express from 'express'
import CreateTodo from '../controllers/createTodo'

const router = express.Router()

router.post('/create', CreateTodo.create)
router.get('/:id', CreateTodo.getTodo)
router.get('/', CreateTodo.getTodos)
router.put('/:id', CreateTodo.updateTodo)
router.delete('/:id', CreateTodo.deleteTodo)

export default router
