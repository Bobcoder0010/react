import react from "react";
import header from "./header";
import Header from "./header";
import Button from './Button'
const Login = (probs) => {
    return(
        <div>
           <Header head = "Login"></Header>
           
           <input type="text" placeholder="username" /><br /><br />
           <Header head = "Email or username"></Header>
        <input type="Email" placeholder="Email or username" required/><br/><br/>
        <Header head = "Password"></Header>
        <input type="password" placeholder="Password" /><br /><br></br>
        <Button text = "LogIn"></Button>
        </div>
    )
}
export default Login