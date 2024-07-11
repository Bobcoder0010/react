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
    <div>
    <Button onClick={regbtn} text="Register"></Button>
    {/* <Register/> */}

    </div>
    <div>
   <Button onClick={logbtn} text="Login"></Button>
    </div>
   {/* <Login/> */}
       
    </>

)

}

export default App
