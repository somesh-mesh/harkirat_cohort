import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}


function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const networkAtomCount = useRecoilValue(notificationAtom); 
  const [messagingAtomCount,setMessagingCount] = useRecoilState(messagingAtom);
  return <>
  <button>Home</button>
    <button>My Network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
    <button>Jobs({jobCount})</button>
    <button>Messaging({messagingCount})</button>
    <button>Notification({networkAtomCount})</button>
    <button onClick={()=>{
      setMessagingCount(messagingAtomCount +1);
    }}>Me</button>

  </>
}

export default App
