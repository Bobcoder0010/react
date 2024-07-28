import React from 'react'
import { Home } from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NavBar from './components/Navbar'
import Login from './components/formlogin'
// import {Routes,Route,Link} from "react-router-dom"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"



function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    )
  }
const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/services', element: <Services /> },
      ]
    },{

    path: '/formlogin',
    element: <Login/>

  },
  { path: '/formlogin',
    element: <Login/>
  },
  {path: '*',
    element: <div>Page not found</div>
  },
  ]
)
  return (
    <div>
      <RouterProvider router={route}/>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul> */}
     {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      </Routes>     */}


    </div>
  )
}

export default App