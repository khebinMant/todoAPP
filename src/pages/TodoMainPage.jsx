import { TodoAdd } from '../components/TodoAdd'
import { TodoList } from '../components/TodoList'
import { useTodo } from '../hooks/useTodo'
import '../styles/TodoApp.css'

export const TodoMainPage = () => {

  const {todos, setTodos, handleRemoveTodo, handleEditTodo, handleCompleteTodo }= useTodo()


  return (
    <div className='todo-content'>
        <h1><small> Todos: {todos.length}</small></h1>
        <h1><small> Pendientes: {todos.filter(todo=>todo.completed!==true).length}</small></h1>
        <h1><small> Hechos: {todos.filter(todo=>todo.completed===true).length}</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos = {todos} 
                    handleRemoveTodo={handleRemoveTodo}
                    handleEditTodo={handleEditTodo}
                    handleCompleteTodo={handleCompleteTodo}
                  />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd 
                  setTodos={setTodos}
                  todos ={todos}
                />
            </div>
        </div>
    </div>
  )
}
