import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // Corrected destructuring syntax and adjusted return value from useTodos
  const [todos, loading] = useTodos(5);

  if (loading) {
    return <div>loading.....</div>
  }

  return (
    <>
      {todos.map((todo, index) => (
        // Added key prop to each Track component
        <Track key={index} todo={todo} />
      ))}
    </>
  )
}

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

      setInterval(()=>{
        const n = 5000;
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });

      }, n *1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  // Corrected return to use array syntax
  return [todos, loading];
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  )
}

export default App;
