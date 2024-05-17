// import { useState } from 'react'
// import { lazy } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// const Dashboard = lazy(() => import('./components/dashboard'));
// const Landing = lazy(() => import('./components/landing'));

// function App() {



//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Dashboard />
//           <Landing />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {

//   const navigate = useNavigate();
//   return <div>
//     <div style={{ background: "black", color: "white" }}>
//       Hi this is the topbar
//     </div>
//     <button onClick={() => {
//       ///the below line refresh the page or reloads the pages,becoz of this we use navigate
//       //window.location.href = "/dashboard";
//       navigate("/dashboard")
//     }}>
//       Go to Dashboard
//     </button>
//     <button onClick={() => {
//       // window.location.href = "/";
//       navigate("/")
//     }}>
//       Go to Landing
//     </button>
//   </div>
// }


// export default App
import { useState, lazy, Suspense } from 'react'; // Import necessary hooks and Suspense for lazy loading
import reactLogo from './assets/react.svg'; // Import assets
import viteLogo from '/vite.svg'; // Import assets
import './App.css'; // Import styles
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import router components

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/dashboard'));
const Landing = lazy(() => import('./components/landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}> {/* Show loading indicator while lazy-loaded components are being fetched */}
          <Routes>
            {/* Define routes for lazy-loaded components */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  return (
    <div>
      <div style={{ background: 'black', color: 'white' }}>
        Hi, this is the topbar
      </div>
      <button onClick={() => navigate('/dashboard')}> {/* Use navigate function to change routes */}
        Go to Dashboard
      </button>
      <button onClick={() => navigate('/')}> {/* Use navigate function to change routes */}
        Go to Landing
      </button>
    </div>
  );
}

export default App;
