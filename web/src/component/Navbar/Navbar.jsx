import React from 'react';
import logo from '../Navbar/assets/logo.webp';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#158a88] lg:px-20 flex justify-between '>
        
        <div className='flex  items-center space-x-4'>

            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <img src={logo} className="App-logo" alt="SkyLine Logo"/>
            </div>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>

        <div className=''>
            <IconButton >
              <ManageSearchIcon/>
            </IconButton>
          </div>

          <div className=''>
            <IconButton>
              <Badge color="secondary" badgeContent={3}>
                <AirplaneTicketIcon/>
              </Badge>
            </IconButton>
          </div>
          <div className=''>
            <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
              <AccountCircleIcon/>
            </Avatar>
          </div>
        </div>
    </div>
  )
}
