import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


export default function Search()

{
    const inputRef = useRef(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
    
  }, []);
  
  // State to manage the input value
    const [enter,setenter]=useState('');
    const enteredvalue =(e)=>{
        setenter(e.target.value);
    }
    const clear = ()=>{
        setenter('');
    }
    //return
    return(
     <>
     <form className="w-[900px] border border-gray-400 mx-auto mt-10 rounded-lg grid grid-cols-[1fr_40px] p-2">
        <input type="text" ref={inputRef} className="outline-none p-2 font-semibold" value={enter} onChange={enteredvalue} placeholder="Search for restaurant and food" />
       {
        enter ? (<RxCross1 className="text-[20px] m-2 cursor-pointer text-orange-600" onClick={clear} />) :
        ( <FiSearch className="text-[20px] m-2" />)
       }
 
     </form>
     

     </>

    )
}
