import react, { useEffect, useState } from "react";
const Hooks = () =>{
    
    const[value,setValue]= useState(0);
    const [color,setColor] = useState({backgroundColor:""});

    useEffect(() => {
        value > 0 && setColor ({backgroundColor:"red"})
        value > 1 && setColor({backgroundColor:"black"})
        value > 2 && setColor ({ backgroundColor:"blue"})
        value > 3 && setColor ({backgroundColor : "white"})
        value > 4 && setValue(0)
    }, [value]);
    

    const myFunction=()=>{
        setValue(value + 1);
    }
    
    // setData(45);
    // console.log(data);
    return (
        <div className="flex flex">
           <button onClick={myFunction} className="p-2 px-4 bg-blue-400">RED</button>
            <span className="bg-black text-white text-3x1">{value}</span>
           <button onClick={myFunction} className="p-2 px-4 bg-blue-400">Black</button>
            <span className="bg-black text-white text-3x1">{value}</span>
           <button onClick={myFunction} className="p-2 px-4 bg-blue-400">blue </button>
            <span className="bg-black text-white text-3x1">{value}</span>
         <div style={color} className="w-full h-[20rem] border-2 border-black"></div>

         </div>
    )
}
export default Hooks