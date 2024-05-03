import React from 'react';
import logo from '../Navbar/assets/logo.webp';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";


export const Navbar = () => {

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/home');
  };
  const handleFlightsSearchClick = () => {
    navigate('/flightsfilter');
  };
  const handleReservationClick = () => {
    navigate('/reservations');
  };
  const handleProfileClick = () => {
    navigate('/home');
  };
  

  return (
    <div className='Navbar'>
        
        <div className='flex  items-center space-x-4'>

            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <img src={logo} className="App-logo" alt="SkyLine Logo"/>
            </div>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>

        <div className=''>
            <IconButton onClick={handleFlightsSearchClick} >
              <ManageSearchIcon/>
            </IconButton>
          </div>

          <div className=''>
            <IconButton onClick={handleReservationClick}>
              <Badge color="secondary" badgeContent={3}>
                <AirplaneTicketIcon/>
              </Badge>
            </IconButton>
          </div>
          <div className=''>
            <IconButton onClick={handleProfileClick}>
            <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
                <AccountCircleIcon/>
            </Avatar>
            </IconButton>
          </div>
        </div>
    </div>
  )
}
