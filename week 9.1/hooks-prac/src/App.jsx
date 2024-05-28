import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import useIsOnline from './useLine'; // Assuming this is the correct import
import useMousePointer from './useMousePointer'; // Assuming this is the correct import

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [todos, loading] = useTodos(2);
  const isOnline = useIsOnline();
  const { x, y } = useMousePointer();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

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
      <div>
        Mouse Position: X: {x}, Y: {y}
      </div>
      {todos.map((todo, index) => (
        <Track key={index} todo={todo} />
      ))}
      <div>
        Timer is at {count}
      </div>
    </>
  );
}

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, n * 1000);

    return () => clearInterval(interval);
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
