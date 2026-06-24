const {getTasks, postTask, updateTask, deleteTask, toggleTask} = require ('./tasks.controller')
const express = require ('express')
const tasksRouter = express.Router()

tasksRouter.get('/', getTasks)
tasksRouter.post('/', postTask)
tasksRouter.put('/:id', updateTask)
tasksRouter.delete('/:id', deleteTask)
tasksRouter.patch('/:id/toggle', toggleTask)

module.exports=tasksRouter