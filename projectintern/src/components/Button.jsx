import React from "react";

const Button = (props)=>{
    return(
        <button className="rounded-md p-2 px-4 ml-5
        bg-blue-500">{props.text}</button>
    )
}
export default Button