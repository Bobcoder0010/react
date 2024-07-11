import react from "react";
import Header from "./header";
const Register = (props)=>{
    return(
        <div>
            
          <Header head = "Register"></Header>  
          <Header head = "Username"></Header>  
        <input type="text" placeholder="username" /><br /><br />
        <Header head = "Email"></Header>
        <input type="Email" placeholder="Email" /><br /><br />
          <Header head = "Username"></Header>  
        <input type="password" placeholder="Password" /><br /><br />
        </div>
    )
}
export default Register