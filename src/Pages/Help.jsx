import react, { useState } from 'react';

export default function Help(){
      const[items,setItems]= useState('Partner onboarding');

    const headline =['Partner onboarding', 'Legal', 'FAQS', 'Instamat onboarding', 'IRCTC FAQ'];

    const content = {
            'Partner onboarding':['I want to partner my restaurant with Swiggy',
                    'What are the mandatory documents needed to list my restaurant on Swiggy?'
                    ,'I want to opt-out from Google reserve'
                    ,'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?'
                    ,'What is this one time Onboarding fees? Do I have to pay for it while registering?',
                    'How do I onboard my restaurant on Swiggy?'
                    ,'What are the benefits of partnering with Swiggy?'
                    ,'How long does the onboarding process take for my restaurant to go live on Swiggy?'
              ],
              'Legal':['What is the legal process for partnering with Swiggy?'
                    ,'What are the legal requirements for listing my restaurant on Swiggy?'
                    ,'How do I opt-out from Google reserve legally?'
                    ,'How long does the legal process take for my restaurant to go live on Swiggy?',
                    'What are the legal documents required to partner with Swiggy?',
                    'What are the legal implications of partnering with Swiggy?',
                    'What are the legal requirements for food safety and hygiene when partnering with Swiggy?'
                ]
                    ,'FAQS':['What are the frequently asked questions about partnering with Swiggy?'
                    ,'What documents are frequently required to list my restaurant on Swiggy?'
                    ,'How do I opt-out from Google reserve?',
                    'How long does it take for my restaurant to go live on Swiggy after submitting all documents?',
                    'What is the one-time onboarding fee for partnering with Swiggy?',
                    'How do I onboard my restaurant on Swiggy?']

                    ,'Instamat onboarding':['What is Instamat onboarding?'
                    ,'How do I onboard my restaurant using Instamat?',
                    'What are the benefits of using Instamat for onboarding?'
                    ,'How long does the Instamat onboarding process take?',
                    'What are the requirements for using Instamat onboarding?',
                        'What are the steps involved in Instamat onboarding?']

                    ,'IRCTC FAQ':['What is the process for partnering with IRCTC?'
                    ,'What documents are required for IRCTC partnership?'
                    ,'How do I opt-out from IRCTC services?',
                    'How long does it take for my restaurant to go live on IRCTC after submitting all documents?',
                    'What are the benefits of partnering with IRCTC?',
                    'How do I onboard my restaurant on IRCTC?']
                    
    }
          

    return(
        <>
        <header/>
        <div className='bg-[#37718e] mb-0'>
            <div className='max-w-[1150px] mx-auto p-4 text-white '>
                <h1 className='text-[30px] font-bold'>Help & Support</h1>
                <p>Let's take a step ahead and help you better.</p>
            </div> 
            <div className='max-w-[1200px] max-[500px]: 	   mx-auto text-[18px] font-medium bg-slate-100 flex'>
                <div className='w-[25%]  text-slate-800'>
                     <ul className='p-4  '> 
                        {headline.map((list,index)=>{
                            return(
                                <><li className='p-4 hover:bg-white' key={index} onClick={()=>setItems(list)}>{list}</li></>
                            )
                        })}
                    </ul></div>
                <div  className='w-[75%] border  text-gray-500 '>
                    <ul className='p-4 bg-white'>
                       <h2 className='p-4 text-black '>{items}</h2>
                    {content[items].map((item,index)=>{
                        return(
                            <li className='p-4 border-b-2' key={index}><a href="">{item}</a></li>
                        )
                    })}
                    </ul>
                </div>
            </div>

        </div>

        </>
    )
}