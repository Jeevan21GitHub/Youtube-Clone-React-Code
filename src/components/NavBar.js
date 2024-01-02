import React, { useState } from 'react'
import { MdMic } from "react-icons/md";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import Logo from "../assets/yt-logo-white.png"
import { signInWithPopup,signOut } from 'firebase/auth';
import {auth,provider} from '../firebase';
import { useSelector,useDispatch } from 'react-redux';
import { setUser,getUser,logOut } from '../slices/userSlice';

const NavBar = ({setSideBarHidden,setSelectedCategory}) => {
    const [searchBox,setSearchBox]=useState('');
    const [searchActice,setSearchActive]=useState(false);
    //console.log(searchBox);
    const dispatch=useDispatch();
    const user=useSelector(getUser);

    const handleSearchBox=(e)=>{
          e.preventDefault();
          setSelectedCategory(searchBox);
    }
   
    const handleLogin=async()=>{
        const response=await signInWithPopup(auth,provider);
        dispatch(setUser(response.user));
    }

    const handleLogOut=async()=>{
        dispatch(logOut());
        await signOut(auth);
    }
  return (
    <section className='bg-black text-white fixed w-full top-0 z-20 h-24 md:h-14'>
       <div className='container-fluid px-5'>
            <div className='flex flex-wrap items-center justify-between'>
                <div className='flex items-center w-1/2 md:w-auto'>
                    <div className='p-2 rounded-full hover:bg-gray-800 cursor-pointer hidden md:flex'>
                        <HiOutlineBars3 onClick={()=>setSideBarHidden((prev)=>!prev)} />
                    </div>
                    <div>
                        <img src={Logo} alt='' className='w-20 md:w-24 object-fill cursor-pointer' />
                    </div>
                </div>
                <div className='items-center hidden md:flex'>
                    <form onSubmit={handleSearchBox} className=''>
                    <input type='text' value={searchBox} className='rounded-l-3xl w-96 bg-black border border-gray-800 px-2 py-1 h-8 focus:outline-none' placeholder='Search' onChange={(e)=>setSearchBox(e.target.value)} />
                    </form>
                    <div className='my-auto p-2 border border-l-0 rounded-r-3xl  px-3 bg-gray-900 hover:bg-gray-800 cursor-pointer border-gray-800 h-8 '>
                    <HiMagnifyingGlass onClick={handleSearchBox} />
                    </div>
                    <div className=' my-auto ml-3 bg-gray-900 p-2 rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg'>
                        <MdMic/>
                    </div>
                </div>
                <div className='flex justify-end items-center w-1/2 md:w-auto'>
                    <div className='p-2 rounded-full hover:bg-gray-800 cursor-pointer'>
                        <BiVideoPlus/>
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-800 cursor-pointer'>
                        <FaRegBell/>
                    </div>
                    <div className='p-2'>
                        {
                            !user?(
                                <button className='bg-red-600 text-sm px-3 py-1 rounded-3xl hover:bg-red-700' onClick={handleLogin} >Login</button>
                            ):(
                                <img src={user.photoURL} alt={user.displayName} onClick={handleLogOut} className='object-contain rounded-full cursor-pointer w-8 h-8'/>
                            )
                        }
                    </div>
                </div>
                <div className='items-center flex justify-center w-full md:hidden '>
                    <form onSubmit={handleSearchBox} className=''>
                    <input type='text' value={searchBox} className='rounded-l-3xl w-auto bg-black border border-gray-800 px-2 py-1 h-8 focus:outline-none' placeholder='Search' onChange={(e)=>setSearchBox(e.target.value)} />
                    </form>
                    <div className='my-auto p-2 border border-l-0 rounded-r-3xl  px-3 bg-gray-900 hover:bg-gray-800 cursor-pointer border-gray-800 h-8 '>
                    <HiMagnifyingGlass onClick={handleSearchBox} />
                    </div>
                    
                </div>
            </div>
       </div>
    </section>
  )
}

export default NavBar
