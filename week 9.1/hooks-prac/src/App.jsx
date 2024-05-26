import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const todos = useTodos();
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function useTodos() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return todos;

}



function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App