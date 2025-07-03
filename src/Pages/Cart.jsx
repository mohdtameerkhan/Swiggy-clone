import react from 'react';

export default function Cart() {
    return (
        <>
        <div className='max-w-[380px] h-screen m-auto text-center'>
            <img src="./images/cartbg.png" alt="" />
            <h2 className='font-bold mt-6'>Your cart is empty</h2>
            <p className='text-gray-600'>You can go to home page to view more restaurants</p>
            <button className='w-[300px] p-2 bg-orange-600 mt-2 text-white font-bold uppercase'>See restaurants near you</button>
        </div>
        </>
    )
}