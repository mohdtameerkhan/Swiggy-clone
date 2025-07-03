import React,{useRef} from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import seafood from '../data/Seafoodimages';


export default function Category(){

  const listRef = useRef(); 
  const scrollLeft = () => {
    listRef.current.scrollLeft -= 250; 
  };

  const scrollRight = () => {
    listRef.current.scrollLeft += 250; 
  };
    
    return(

        <>
        <div className='max-w-[1050px] mx-auto p-4 border-b-2'>
        
            <div className='flex justify-between items-center'> 
                <div className='font-bold'>What's on your mind ?</div>
                <div className='flex gap-4 '><FaChevronLeft onClick={scrollLeft} className='ctgrybutton cursor-pointer'/> <FaChevronRight onClick={scrollRight} className='ctgrybutton cursor-pointer' /></div>
            </div>

            <div className='h-[200px]  mt-2 '>
                <ul ref={listRef} className='flex gap-3 h-full p-2 overflow-x-hidden transition-all  ease-in-out '>
                    {seafood.map((item,index)=>{
                        return(
                            <li key={index} className='  flex-shrink-0 text-center w-[150px] h-[150px] '><a href=""><img className=' rounded-full' src={item.src} alt="" /></a><span className='font-bold'>{item.name}</span></li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
        </>)  
}

