import React, { use, useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CgSearchLoading } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';





export default function Header() {

  // State to manage the location input
 const[location,setLocation]=useState('');
 const [suggestion,setSuggestions]=useState([])
   const [finalAddress, setFinalAddress] = useState("");
// Function to handle input change and fetch suggestions
    const fetchSuggestions = async (query) => {
    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/search?key=pk.c11a0d3221499447f3321c5ed6b76d79&q=${query}&format=json&countrycodes=in`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };
  // handle input
  const handlechange =(e)=>{
    const input = e.target.value;
    setLocation(input);
    if(input.length >2){
      fetchSuggestions(input);
    }else{

      setSuggestions([location]);
    }
  };
  const handleSelectSuggestion = (address) => {
    setFinalAddress(address);
    setLocation(address); // input box में वही सेट करना
    setSuggestions([]);   // suggestions छुपा देना
  };

  


  const [loggedInUser, setLoggedInUser] = useState(
  JSON.parse(localStorage.getItem('loggedInUser')));
  // Function to allow only numbers
  const [number, setNumber] = useState('');
  // Local storage to store the number and check if it exists

// Allow only numbers
  const onlynumber = (e)=>{
    const input = e.target.value;
    const filtered = input.replace(/[^0-9]/g, '');
    setNumber(filtered);
  }
  // Function to allow only characters and spaces
  const [Firstname, setFirstname] = useState('')
  const handleFirstNameChange =(e)=>{
  const input = e.target.value;
  // Allow only letters and spaces
    const filtered = input.replace(/[^a-zA-Z\s]/g, '');
    setFirstname(filtered);

  }
// usestate 
const[islogin,setLogin]=useState(true)
const[open,setopen]=useState(false)
const [toggle,setToggle]=useState(false)
const links = [
  { icon: <CgSearchLoading />, name: 'Search', path: '/search' },
  { icon: <BiSolidOffer />, name: 'Offers', path: '/offer' },
  { icon: <RiShoppingCart2Line />, name: 'Cart', path: '/cart' },
  { icon: <FaHandsHelping />, name: 'Help', path: '/help' },
  { icon: <FiUserPlus onClick={()=>setopen(!open)}   />, name: 'SignUp' },
];
  //localstorage part to check if user exists
  const handleNumbercheck=()=>{
    const users = JSON.parse(localStorage.getItem('users')) || [];
     const userExits = users.find((user)=> user.number === number);

    if(userExits){
      alert(`✅ Welcome back, ${userExits.username}`);
      localStorage.setItem('loggedInUser', JSON.stringify(userExits)); 
    setLoggedInUser(userExits); 
    setopen(false);

  
    }
      else{ 
      alert("⚠️ No account found. Please click create an account.");
      setLogin(false);
      }
  }
 //localstorage part signup
 const handleSifgnup =()=>{
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExits = users.find((user)=> user.number === number);
  if(userExits){
    alert('User already exists please login');
    setLogin(true);
  }
  else{
    const newUser={username:Firstname,number: number}
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser)); 
    setLoggedInUser(newUser); 
    alert('✅ Account created successfully!');
    setLogin(false);
  }

  }





  return (
    <>
    {/* search are for location.....left slider */}
    <div className={`sidebar ${toggle ? 'active': ''}`}> <ImCross onClick={()=>setToggle(!toggle)} className='float-right m-4 cursor-pointer text-orange-500' />
      <div className=' w-[300px] text-center mx-auto mt-10'>
        <h2 className='text-lg font-bold'> Delivery Location</h2>
        <form action="">
          <input className=' p-2 w-full rounded-lg border' value={location} onChange={handlechange} placeholder='Search Location' type="search" />
          
        </form>
      </div>

       {/* Suggestions */}
      {suggestion.length > 0 && (
        <ul className="border mt-1 rounded bg-white shadow">
          {suggestion.map((sug) => (
            <li
              key={sug.place_id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(sug.display_name)}
            >
              {sug.display_name}
            </li>
          ))}
        </ul>
      )}
       {/* Final Address */}
      {finalAddress && (
        <div className="mt-4 p-3 bg-green-100 rounded">
          <strong>Selected address:</strong><br />
          {finalAddress}
        </div>
      )}
    </div>

    {/* sign up slider ............right slider*/}
    <div className={`w-[430px] z-50 h-screen text-black bg-white top-0 fixed ${open ? 'right-0' : '-right-[500px]'}`}>
      <div className='w-[330px] mx-auto mt-10'>
      <ImCross onClick={()=>setopen(!open)} className='bg-slate-50 text-orange-500 mt-[100px]'/>
        <div className='grid grid-cols-[1fr_80px] gap-4 '>
          <div>
        <h1 className='text-[30px] font-semibold mt-6'>{islogin ? 'Login' : 'Signup' }</h1>
        <p>or <a className='text-orange-500 font-semibold cursor-pointer' onClick={()=>setLogin(!islogin)}>{islogin ? 'create an account':"Login to your account"}</a></p>
        </div>
        <img className='w-[80px]'  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
        </div>
        <hr className=' mt-4 w-[50px]' />
        <form className='w-[300px] '>
          { islogin ?
          (
            <>
        <input className='w-full p-4 border'  type="text" value={number} required onChange={onlynumber} maxLength={10} placeholder='NUMBER'/> <br />
          </>)
        :
        (
        <div className='grid'>
        <input className='w-full p-4 border'  type="text" maxLength={10} required value={Firstname} onChange={handleFirstNameChange} placeholder='FIRST NAME'/> <br />
        <input className='w-full p-4 border'  type="text" maxLength={10} required  placeholder='LAST NAME'/> <br />
        <input className='w-full p-4 border'  type="text" maxLength={10} required placeholder='NUMBER' value={number} onChange={onlynumber}/> <br />
        </div>)
        }
        <button
  onClick={islogin ? handleNumbercheck : handleSifgnup}
  className='bg-orange-500 text-white font-bold w-full p-4 mt-4'>
  {islogin ? 'Login' : 'Sign up'}
</button>

        </form>
        <p className='text-[12px] font-bold'> <span className='text-slate-400'>{islogin ? 'By clicking on Login' :'By creating an account'} I accept the</span>  Terms & Conditions & Privacy Policy</p>
      </div>
    </div>

{/* ----------Header-------------- */}
    <header className='p-[15px] shadow-xl sticky top-0 bg-white z-50'>
      <div className='max-w-[1050px] mx-auto p-0 flex'>
        <Link to='/'> 
        <div className='w-[68px] hover:scale-125  duration-300 ease-in-out' >
            <img  src="/images/swigy_logo.png" className='w-full cursor-pointer' alt="" />
           </div> </Link>
           
           <div className='w-full  p-1 flex justify-between items-center'>
            <div>
              <ul  className='flex gap-1'>
                <li className='font-bold'>Lucknow</li>
                <li>Banglore</li>
                <li>Delhi</li>
                <li className='p-1' ><RxCaretDown onClick={()=>setToggle(!toggle)} className='text-orange-500 text-lg cursor-pointer'/> </li>
              </ul>
            </div>

            <div>
              <ul className='flex gap-4 text-sm from-neutral-50 '>
  {/* -----------current logged in user-------------- */}
  {loggedInUser && (
    <>
      <li className='text-white text-[15px] font-bold p-2 bg-orange-500 rounded-lg'>
        Welcome, {loggedInUser.username}
      </li>
        
      <li
        className='cursor-pointer text-red-500 font-bold p-2'
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          setLoggedInUser(null);
          alert('🚪 Logged out successfully!');
        }}
      >
        Logout
      </li>
    </>
  )}

  {links.map((link, index) => (
    <li key={index} className='flex items-center gap-1 hover:text-orange-500'>
      <Link to={link.path}>
        {link.icon} {link.name}
      </Link>
    </li>
  ))}
</ul>

            </div>
           </div>
      </div>
    </header>
    </>)}