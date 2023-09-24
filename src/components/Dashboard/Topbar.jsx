'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { BASE_URL } from "@/constant";
import getToken from "@/hook/getToken";
import React, { useState,useEffect } from 'react'


const Topbar = () => {
  

  const [contact , setContact] = useState()
  const token = getToken();

  const username = localStorage.getItem("Username")

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // You can also perform any other logout-related actions here
    // For example, redirecting the user to the login page
  };
  const pathname = usePathname();
  let formattedPathname = pathname;

  if (pathname === '/home') {
    formattedPathname = 'Start New Assist';
  } else if (pathname === '/notes') {
    formattedPathname = (
      <>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2 text-[#8167E6]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Notes and Instructions
      </>
    );
  } else {
    formattedPathname = formattedPathname.replace(/^\//, '');
    formattedPathname =
      formattedPathname.charAt(0).toUpperCase() + formattedPathname.slice(1);
  }
  return (
    <div className='w-full min-h-full bg-[#222331]'>
      <div className="">
        <div className="flex justify-between py-4 border-b border-gray-600 ">
          <p className='text-lg font-medium text-white text-center px-4 py-2 font-mono'><Link href='/home'>{formattedPathname}</Link></p>
          <div className="flex px-4 py-2 gap-2">
            
          
            <div className="flex items-center gap-2">
              <p className='text-white text-xs'>{username}</p>
              <div className="w-8 h-8 flex bg-white rounded-full border text-center text-xs justify-center items-center"> {username ? username.charAt(0) : ''}</div>
            </div>
         
          <div className="items-center relative top-1">
          <Link href='/login' onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              </Link>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Topbar