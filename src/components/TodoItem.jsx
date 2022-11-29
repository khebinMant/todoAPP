import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'



export const TodoItem = ({todo, handleRemoveTodo,handleEditTodo, handleCompleteTodo}) => {

    const formValues = {
        newTitle: todo.title
    }
    const [isEdit, setIsEdit] = useState(false)
    const {newTitle, onInputChange} = useForm(formValues)

    const onFormSubmit = (event)=>{
        event.preventDefault()
    }

    const handleClickUpdateTodo = ()=>{
        handleEditTodo(todo.id,todo.completed, newTitle)
        setIsEdit(false)
    }


  return (
    <>
        {
            isEdit
            ?
            <li className="list-group-item d-flex justify-content-between">
                <span>
                    <form onSubmit={onFormSubmit}>
                        <input
                            type='text'
                            name='newTitle'
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                            value={newTitle}
                            onChange={onInputChange}
                        />
                        <button
                            onClick={handleClickUpdateTodo}
                            style={{marginTop:'10px', marginRight:'10px'}}
                            type='submit' 
                            className="btn btn-success"
                        >
                            Listo
                        </button>
                        <button
                            onClick={()=>setIsEdit(false)}
                            style={{marginTop:'10px'}}
                            type='submit' 
                            className="btn btn-danger"
                        >
                            Cancelar
                        </button>
                    </form>
                </span>
            </li>
            :
            <li className="list-group-item d-flex justify-content-between">
                <span 
                    className={`aling-self-center ${(todo.completed)? 'text-decoration-line-through':''}`}
                >
                {todo.title}
                </span>
                <span>
                    <button 
                        style={{marginRight:'10px'}}
                        className="btn btn-primary"
                        onClick={()=>setIsEdit(true)}
                    >
                        Editar
                    </button>
                    <button 
                        style={{marginRight:'10px'}}
                        className="btn btn-danger"
                        onClick={()=>handleRemoveTodo(todo.id)}
                    >
                        Borrar
                    </button>

                    <input checked={todo.completed} onClick={()=>handleCompleteTodo(todo.id)} type="checkbox" aria-label="Checkbox for following text input"/>

                </span>
            </li>
        }
    </>
    )
}
