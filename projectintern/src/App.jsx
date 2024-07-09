import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Button1 from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <Button text="sign in "/>
      <Button text = "sign up"/>
      <Button text = "About us"/>
      <Button text = "Home"/>
      <Button text = "college"/>
    </>

)

}

export default App
