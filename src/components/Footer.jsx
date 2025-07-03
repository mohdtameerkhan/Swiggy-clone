import react from 'react';


export default function Footer ()
{
    const footerlist=[  
      ['Company', 'About', 'Careers', 'Blog'],
      ['Help', 'Support', 'FAQs', 'Contact'],
      ['Legal', 'Privacy', 'Terms', 'Cookies'],
      ['Social', 'Facebook', 'Twitter', 'LinkedIn'],
   ]
    return(<>

    <div className='bg-slate-100'>
        <div className='max-w-[1050px] mx-auto p-3 grid grid-flow-col justify-around'>
            
            <div className='w-[180px] text-gray-600'><img src="./images/footer_logo-removebg-preview.png" alt="" />  © 2025 Swiggy Limited</div>
            
                {
                    footerlist.map((unorder,index)=>{
                        return(
                            <ul key={index} className=''>
                                {
                                    unorder.map((listitem, index2) => {
                                        return (
                                            <li key={index2} className='text-[15px] text-base p-2 text-gray-500 hover:text-blue-500 cursor-pointer'>{listitem}</li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            
        </div>
        </div>
    </>)
}

