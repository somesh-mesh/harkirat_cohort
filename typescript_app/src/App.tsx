import './App.css'

function App() {
  

  return (
    <>
     <Todo title={'Go to gym'} description={'Gym will help you to feel good'} done={false} ></Todo>
    </>
  )
}

interface TodoProp {
  title:string,
  description:string,
  done:boolean
}

function Todo(props:TodoProp){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div> 
}





export default App
