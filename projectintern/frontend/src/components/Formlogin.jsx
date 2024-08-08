import react from "react";
import header from "./header";
import Header from "./header";
import Button from './Button'
const Formlogin = (probs) => {
    return(
        <div>
           <Header head = "Formlogin"></Header>
           
           <input type="text" placeholder="username" /><br /><br />
           <Header head = "Email or username"></Header>
        <input type="Email" placeholder="Email or username" required/><br/><br/>
        <Header head = "Password"></Header>
        <input type="password" placeholder="Password" /><br /><br></br>
        <Button text = "FormlogIn">Log In</Button>
        </div>
    )
}
export default Formlogin