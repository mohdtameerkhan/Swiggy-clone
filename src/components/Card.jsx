import react from 'react';
import { FaStarHalfAlt } from "react-icons/fa";



export default function Card(props) {
     console.log(props);
    return(
        <>
        <div className='mt-4 m-auto '>
        <div className='h-[200px]  w-[300px]  relative hover hover:scale-95 duration-300 overlay'> 
           <img className='h-full w-full  rounded-lg object-cover -z-10'  src={props.image} alt="" />
           <h2 className='absolute bottom-2 left-4 text-white font-bold z-10 bg-black bg-opacity-40'>{props.offer}</h2>
           </div>
           <div className='pl-2'> 
            <h2 className='font-bold'>{props.title}</h2>    
            <div className='flex items-center'><FaStarHalfAlt className='text-orange-600' /> <span className='font-bold'> {props.rating} - {props.minTime}-{props.maxTime} min</span> </div>
            <p className='text-slate-600 font-thin'>{props.name}</p>
            </div>
            </div>
        
         
        
        </> 
    )
}