import { useEffect } from 'react';
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notificationsFromApi, totalNotificationSelector } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [notifications, setNotifications] = useRecoilState(notificationsFromApi);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network {notifications.network >= 100 ? "99+" : notifications.network}</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messaging ({notifications.messaging})</button>
      <button>Notification ({notifications.notifications})</button>
      <button onClick={() => {
        setNotifications(prevState => ({
          ...prevState,
          messaging: prevState.messaging + 1
        }));
      }}>
        Me ({totalNotificationCount})
      </button>
    </>
  );
}

export default App;
