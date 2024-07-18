import React from "react";

const Button = (props)=>{
    return(
        <div>
        <button className="rounded-md p-2 px-4 ml-5
        bg-blue-500">{props.text}</button>


        <button className="rounded-md p-2 px-4 ml-5 bg-red-500"></button>
        </div>
    )
}
export default Button