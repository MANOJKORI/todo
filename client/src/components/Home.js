import React from 'react'

import TodoFrom from './TodoForm'
import Todos from './Todos'

export const Home = () => {
  return (
    <div className="container my -3">

        <h1>Add Todo</h1>
       
        <TodoFrom />

        
        <Todos/>
    </div>
  )
}
