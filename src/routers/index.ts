import express, { Express } from 'express'
import routerTodo from './createTodo'
const createRouter = (app: Express) => {
  app.use('/todo', routerTodo)
}

export default createRouter
