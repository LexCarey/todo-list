import React, {useState} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';

function App() {
  const [todoList, setTodoList] = useState([])

  const handleNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
    console.log(todoList)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onNewTodo={handleNewTodo}/>
      <TodoDisplay todoList={todoList} update={setTodoList} />
    </div>
  )
}

export default App;
