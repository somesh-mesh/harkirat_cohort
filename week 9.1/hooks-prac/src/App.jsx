import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
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


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }



}





export default App