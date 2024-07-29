import React, { useEffect } from "react";

const ApiFetch = ()=>{
    const [data, setData] = React.useState([]);

    const handleApi =()=>{
axios.get('https://jsonplaceholder.typicode.com/todos/1').
then((res) => {
    console.log(res.data); 
    setData(res.data);
} ).catch(err => console.log(err));

} 
 return (
     <div className="grid grid-cols-4  border-black place-items-center">
        <div className ="p-8 flex-cols bg-slate-500 text-black">
            
            <span className="text-2xl">Id:2</span>
            <h1 className="text-4xl">Title: </h1>
            <p className ="text-xl">Body</p>
             </div>
        </div>
  
 )

}

export default ApiFetch;