import express from 'express';
import { addTodo ,getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';
const route = express.Router();


route.post('/todos', addTodo)
route.get('/todos',getAllTodos)
route.put('/todos/:id',toggleTodoDone)
route.patch('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)

export default route;
