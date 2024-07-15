import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Inputfield from './components/Input'
import Register from './components/form'
import Login from './components/formlogin'
function App() {
  const [count, setCount] = useState(0)
function logbtn() {
return(
<Login/>

)
}
function regbtn() {
  return(
    <Register/>

  )
}
  return (
    <>
 <Login/>
 <Register/>
       
    </>

)

}

export default App
