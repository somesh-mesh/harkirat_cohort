import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserForm from './App.tsx'
import UserList from './userlist.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserForm/>
    <UserList/>
  </React.StrictMode>,
)
