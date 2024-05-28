import { useEffect, useState } from 'react';
import axios from 'axios';
import useIsOnline from './useLine';
 // Import the useIsOnline hook

function App() {
  const [todos, loading] = useTodos(2);
  const isOnline = useIsOnline();

  if (!isOnline) {
    console.log("You're not online");
  } else {
    console.log("Yay, you are online");
  }

  if (loading) {
    return <div>loading.....</div>;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <Track key={index} todo={todo} />
      ))}
    </>
  );
}

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return [todos, loading];
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
