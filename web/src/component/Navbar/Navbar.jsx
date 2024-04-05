import React from 'react';
import logo from '../Navbar/assets/logo.svg';


export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#00d1cd] lg:px-20 flex justify-between '>
        
        <div className='flex  items-center space-x-4'>

            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <img src={logo} className="App-logo" alt="SkyLine Logo"/>
            </div>
        </div>
    </div>
  )
}
