import { useForm } from '../hooks/useForm'


export const TodoAdd = ({setTodos, todos}) => {

    const formValues = {
        title: ''
    }
    
    const {title, onInputChange, onResetFormContent} = useForm(formValues)

    const onFormSubmit = (event)=>{
        event.preventDefault();
        if (title.length <=1) return;
        const newTodo ={
            id: crypto.randomUUID(),
            title,
            completed:false
        }
        let temp = [...todos]
        temp.unshift(newTodo)
        setTodos(temp)
        onResetFormContent()
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input
            type='text'
            name='title'
            placeholder="¿Que se debe hacer?"
            className="form-control"
            value={title || ''}
            onChange={onInputChange}
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-2"
        >
            Crear
        </button>
    </form>
  )
}
