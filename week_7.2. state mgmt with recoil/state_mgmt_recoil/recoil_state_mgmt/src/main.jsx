import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot> {/* Wrap the App component with RecoilRoot */}
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
