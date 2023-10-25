import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'tailwindcss/tailwind.css'
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='434926545434-8oe9j20qcntdesb6pa9gcbmi6k24inod.apps.googleusercontent.com'>
    </GoogleOAuthProvider>
    <App/>
  </React.StrictMode>,
)

