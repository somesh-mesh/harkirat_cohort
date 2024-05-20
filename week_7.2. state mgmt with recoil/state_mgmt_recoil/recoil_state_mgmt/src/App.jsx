import reactLogo from './assets/react.svg'; // Importing the React logo
import viteLogo from '/vite.svg'; // Importing the Vite logo
import './App.css'; // Importing the CSS file for styling
import { useRecoilValue, useSetRecoilState } from 'recoil'; // Importing Recoil hooks for state management
import { countAtom } from './store/atoms/count'; // Importing the count atom from the Recoil store

function App() {
  // Using Recoil's useRecoilValue hook to get the current value of countAtom
  const count = useRecoilValue(countAtom);
  // Using Recoil's useSetRecoilState hook to get a setter function for countAtom
  const setCount = useSetRecoilState(countAtom);

  return (
    <>
      {/* Displaying the current count value */}
      <h3>Count value : {count} </h3>
      
      {/* Button to add value to count */}
      <button onClick={() => {
        setCount(count + 1); // Increment the count value by 1
      }}>
        Add Value
      </button>
      
      {/* Button to remove value from count */}
      <button onClick={() => {
        setCount(count - 1); // Decrement the count value by 1
      }}>
        Remove Value
      </button>
    </>
  );
}

export default App; // Exporting the App component as the default export
