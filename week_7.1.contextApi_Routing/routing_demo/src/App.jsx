// // export default App
// import { useState, lazy, Suspense } from 'react'; // Import necessary hooks and Suspense for lazy loading
// import reactLogo from './assets/react.svg'; // Import assets
// import viteLogo from '/vite.svg'; // Import assets
// import './App.css'; // Import styles
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import router components

// // Lazy load components for better performance
// const Dashboard = lazy(() => import('./components/dashboard'));
// const Landing = lazy(() => import('./components/landing'));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Suspense fallback={<div>Loading...</div>}> {/* Show loading indicator while lazy-loaded components are being fetched */}
//           <Routes>
//             {/* Define routes for lazy-loaded components */}
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='/' element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate(); // useNavigate hook to programmatically navigate

//   return (
//     <div>
//       <div style={{ background: 'black', color: 'white' }}>
//         Hi, this is the topbar
//       </div>
//       <button onClick={() => navigate('/dashboard')}> {/* Use navigate function to change routes */}
//         Go to Dashboard
//       </button>
//       <button onClick={() => navigate('/')}> {/* Use navigate function to change routes */}
//         Go to Landing
//       </button>
//     </div>
//   );
// }

// export default App;
// export default App

import { useState } from 'react'; // Import useState hook for state management

function App() {
  const [count, setCount] = useState(0); // Initialize state variable 'count' with 0 and 'setCount' to update it

  return (
    <div>
      {/* Pass count as a prop to the Count component */}
      <Count count={count} />
      {/* Pass count and setCount as props to the Buttons component */}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count }) {
  return (
    <div>
      {/* Display the current count */}
      {count}
    </div>
  );
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          // Increase the count by 1
          setCount(count + 1);
        }}
      >
        Add Value
      </button>

      <button
        onClick={() => {
          // Decrease the count by 1
          setCount(count - 1);
        }}
      >
        Remove Value
      </button>
    </div>
  );
}

export default App; // Export the App component as the default export
