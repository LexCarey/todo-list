import React, {useState} from 'react'

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewTodo({activity:todo, checked:false})
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} type="text" onChange={e => setTodo(e.target.value)} placeholder="Make a new entry" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm