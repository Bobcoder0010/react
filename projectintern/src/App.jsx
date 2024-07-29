import React from 'react'
import { Home } from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NavBar from './components/Navbar'
import Login from './components/formlogin'
import ApiFetch from './components/Apifetch'
import Button from './components/Button'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
          { path: 'services', element: <Services /> },
          { path: 'apifetch', element: <ApiFetch /> },
          { path: 'formlogin', element: <Login /> },
          { path: '*', element: <div>Page not found</div> },
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
