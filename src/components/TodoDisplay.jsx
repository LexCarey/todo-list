import React from 'react'

const TodoDisplay = (props) => {

    const handleDelete = (deleteIdx) => {
        const filteredList = props.todoList.filter((todo, i)=> {
            return (
                i !== deleteIdx
            )
        })
        props.update(filteredList)
    }

    const handleCheck = (idx) => {
        const filteredList = props.todoList.map((todo, i)=> {
            if (idx == i) {
                if (todo.checked == false) {
                    todo.checked = true;
                } else {
                    todo.checked = false;
                }
            }
            return todo
        })
        props.update(filteredList)
    }

    return props.todoList.map((todo, i) => {
        return(
            <div key={i} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{textDecoration: todo.checked==false?"none":"line-through"}}>{i+1}. {todo.activity}</p>
                <input style={{margin: "0 15px"}} type="checkbox" onClick={(e)=>handleCheck(i)} checked={todo.checked} />
                <button onClick={e => handleDelete(i)} >Delete</button>
            </div>
        )
    })
}

export default TodoDisplay