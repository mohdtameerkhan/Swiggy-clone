import react from 'react';
import TopResto from './TopResto';
import restaurantChains from '/src/data/restaurantChains.json';




export default function DishCategory() {

    return(
        <>
        <div className='max-w-[1050px] mt-3 mx-auto p-4 '>
                
                    <div className='flex justify-between items-center'> 
                        <div className='font-bold text-xl'>Order Popular dishes online in Lucnkow</div>
                    </div>
                   
                    <div className='mt-4 grid grid-cols-4 gap-4'>
                        {
                  restaurantChains.map((d, index) => {
                            return (
                                <h2 className=' border text-center py-2 text-base rounded-xl   text-slate-950 inline-block hover:bg-slate-100 font-thin transition duration-400 ' key={index}>{d.name}</h2>
                            )
                        }
                    )}
                    </div>
                </div>
                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_3480,h_676/portal/m/seo/app_download_dweb_new.png" alt="Scan for download" />
        </>
    )
}