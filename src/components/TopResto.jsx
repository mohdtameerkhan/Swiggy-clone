import react from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Card from './Card';
import restaurantChains from '/src/data/restaurantChains.json';


export default function TopResto() {

    return(
        <>
        <div className='max-w-[1050px] mt-2 mx-auto p-4 '>
        
            <div className='flex justify-between items-center'> 
                <div className='font-bold text-xl'>Restaurants with online food delivery in Lucknow</div>
            </div>
            {/* card is added here */}
            <div className='grid grid-cols-3'>
            {restaurantChains.map((d,index)=>{
                return(
                    <Card {...d} key={index}/>
                )
            })}
            </div>
 
        </div>
        </>
    )
}
