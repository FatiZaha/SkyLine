import React from 'react';
import logo from '../Navbar/assets/logo.webp';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Box, InputLabel, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const Navbar = () => {

  const [newFirstName, setFirstName] = React.useState('zaha');
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const [newLastName, setLastName] = React.useState('fatima zahra');
  const handleLastNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/home');
  };
  const handleFlightsSearchClick = () => {
    navigate('/flightsfilter');
  };
  const handleReservationClick = () => {
    navigate('/allreservations');
  };

  const settings = ['Edit Profile', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (setting) => {
    if (setting === 'Logout') {
    navigate('/signin')}
    else handleClickOpen();
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='Navbar'>
        
        <div className='flex  items-center space-x-4'>

            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <img onClick={handleHomeClick} src={logo} className="App-logo" alt="SkyLine Logo"/>
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
              
                <AirplaneTicketIcon/>
              
            </IconButton>
          </div>
          <div className=''>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
                <AccountCircleIcon/>
              </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          </div>
        </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

        <InputLabel id="demo-simple-select-helper-label"  sx={{marginTop: 2}}>First Name</InputLabel>
        <TextField id="outlined-basic" defaultValue={newFirstName} onChange={handleFirstNameChange} variant="outlined" />
        <InputLabel id="demo-simple-select-helper-label"  sx={{marginTop: 2}}>Last Name</InputLabel>
        <TextField id="outlined-basic" defaultValue={newLastName} onChange={handleLastNameChange} variant="outlined" />
        <InputLabel id="demo-simple-select-helper-label"  sx={{marginTop: 2}}>Phone Number</InputLabel>
        <TextField id="outlined-basic"  defaultValue={newLastName} onChange={handleLastNameChange} variant="outlined" />
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
