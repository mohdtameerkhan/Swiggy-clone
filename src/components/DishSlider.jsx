import react  from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Card from './Card';
import restaurantChains from '/src/data/restaurantChains.json';

export default function DishSlider()
{
 return(
    <>
     <div className='max-w-[1050px] mt-2 mx-auto p-4'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-xl'>Top restaurant chains in Lucknow</h2>
           
         </div>

            <div className='flex gap-4 overflow-x-auto'>
                {restaurantChains.map((d,index)=>{
                    return(
                        <Card {...d} key={index} />
                    )
                })}
            </div>
         
     </div>
    </>
 )
}