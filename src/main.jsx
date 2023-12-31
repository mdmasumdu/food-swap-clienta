import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedroute from './Route/Route.jsx'
import AuthProvider from './Authprovider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='container mx-auto'>
  <AuthProvider><RouterProvider router={mycreatedroute}></RouterProvider></AuthProvider>
  </div>
  </React.StrictMode>,
)
