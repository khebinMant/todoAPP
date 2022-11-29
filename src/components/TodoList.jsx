import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], handleRemoveTodo, handleEditTodo, handleCompleteTodo}) => {
  return (
      <ul className="list-group">
      {
          todos.map(todo =>(
              <TodoItem  
                  key={todo.id} 
                  todo = {todo} 
                  handleRemoveTodo={handleRemoveTodo}
                  handleEditTodo={handleEditTodo}
                  handleCompleteTodo={handleCompleteTodo}
              />
          ))
      }
      </ul>
  )
}
