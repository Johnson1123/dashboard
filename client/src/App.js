import React from 'react'
import {RouterProvider, createBrowserRouter, outlet, } from  'react-router-dom'
import Home from './pages/admin/Home/Home'
import Dashboard from './pages/admin/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App