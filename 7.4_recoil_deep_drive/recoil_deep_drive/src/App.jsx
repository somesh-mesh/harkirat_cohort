// import { useEffect } from 'react';
// import './App.css';
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { notificationsFromApi, totalNotificationSelector } from './atoms';

// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   const [notifications, setNotifications] = useRecoilState(notificationsFromApi);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   return (
//     <>
//       <button>Home</button>
//       <button>My Network {notifications.network >= 100 ? "99+" : notifications.network}</button>
//       <button>Jobs ({notifications.jobs})</button>
//       <button>Messaging ({notifications.messaging})</button>
//       <button>Notification ({notifications.notifications})</button>
//       <button onClick={() => {
//         setNotifications(prevState => ({
//           ...prevState,
//           messaging: prevState.messaging + 1
//         }));
//       }}>
//         Me ({totalNotificationCount})
//       </button>
//     </>
//   );
// }

// export default App;



import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />
    <Todo id={5} />
    <Todo id={6} />
    <Todo id={7} />
    
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
