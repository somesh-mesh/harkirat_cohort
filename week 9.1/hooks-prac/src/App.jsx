import React, { useState, useEffect } from 'react';
// import React from 'react'
import './App.css'

function App() {

const [render,setRender] = useState(true);

    useEffect(()=>{
      setInterval(()=>{
        setRender( r=> !r);
      },5000)
    },[]);


  return (
    <>
      {render ? <MyComponent/> : <div></div>}      
    </>
  )
}

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <div>
//         <p>{count}</p>
//         <button onClick={incrementCount}>Increament</button>
//       </div>
//     </>
//   )



// }


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }

function MyComponent() {
  useEffect(() => {

    console.error("Component: mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.error("Component: unmounted");
    };
  }, []);

  // Render UI

  return <div>
    From inside my compoenent
  </div>

}

// }





export default App
