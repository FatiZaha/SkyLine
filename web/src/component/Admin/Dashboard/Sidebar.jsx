import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlightIcon from '@mui/icons-material/Flight';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ReservationsTable from '../../Admin/Reservations/Reservations';
import FlightsTable from '../Flights/AllFlights';
import BarChartIcon from '@mui/icons-material/BarChart';
import FullScreenDialog from '../../Admin/Companies/AddCompany';
import FlightsDialog from '../Flights/AddFlights';
import AllCompanies from '../Companies/AllCompanies';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BarChart from '../Statistiques/BarChart';
import PieChart from '../Statistiques/PieChart';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [contexteActif, setContexteActif] = React.useState(null);
  const [companiesMenuAnchor, setCompaniesMenuAnchor] = React.useState(null);
  const [flightsMenuAnchor, setFlightsMenuAnchor] = React.useState(null);
  const [reservationMenuAnchor, setReservationMenuAnchor] = React.useState(null);
  const [statisticsMenuAnchor, setStatisticsMenuAnchor] = React.useState(null);
  const handleClickCompanies = (event) => {
    setContexteActif('companies');
    setCompaniesMenuAnchor(event.currentTarget);
  };

  const handleClickFlights = (event) => {
    setContexteActif('flights');
    setFlightsMenuAnchor(event.currentTarget);
  };

  const handleClickReservation = (event) => {
    setContexteActif('reservation');
    setReservationMenuAnchor(event.currentTarget);
  };

  const handleClickStatistics = (event) => {
    setContexteActif('statistics'); 
    setReservationMenuAnchor(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setCompaniesMenuAnchor(null);
    setFlightsMenuAnchor(null);
    setReservationMenuAnchor(null);
    setStatisticsMenuAnchor(null);
  };
  const navigate = useNavigate();
  const handleLogOut =() =>{
    navigate('/admin');
  }
  
  
  
  const afficherContenuCompanies = () => {
    if (contexteActif === 'companies') {
      return (
        <div style={{ display: 'block' }}>
          <FullScreenDialog/>
            
          <div style={{ marginTop: '20px' }}>
              <AllCompanies />
          </div>
        </div>
      );
    }
    return null;
  };

  
  const afficherContenuFlights = () => {
    if (contexteActif === 'flights') {
      return (
        <div style={{ display: 'block'}}>
            <FlightsDialog/>
            <div style={{ marginTop:'20px' }}>
                <FlightsTable/>
            </div>
        </div>
        
      );
    }
    return null;
  };
  const reservationsTableRef = useRef();
  
  const handleExportClick = () => {
    if (reservationsTableRef && reservationsTableRef.current) {
      reservationsTableRef.current.handleExport();
      
    }
  };

  

  const afficherContenuReservation = () => {
    if (contexteActif === 'reservation') {
      return (
        <div style={{ display: 'block'}}>
        
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button  style={{ background: '#158a88', color: '#fff', marginRight: '10px' }} onClick={handleExportClick}>Exporter</Button>
          </div>
          <div style={{ marginTop:'20px' }}>
          <ReservationsTable ref={reservationsTableRef} />
        </div>
      </div>
      );
    }
    return null;
  };

  const afficherContenuStatistics = () => {
    if (contexteActif === 'statistics') {
      return (
        <div style={{display:'flex'}}>
          <BarChart/>
          <PieChart/>
        </div>
      );
    }
    return null;
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#158a88',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={handleClickCompanies}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Companies" />
          </ListItem>
          <ListItem button onClick={handleClickFlights}>
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary="Flights" />
          </ListItem>
          <ListItem button onClick={handleClickReservation}>
            <ListItemIcon>
              <AirplaneTicketIcon />
            </ListItemIcon>
            <ListItemText primary="Reservation" />
          </ListItem>
          <ListItem button onClick={handleClickStatistics}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
        <Divider />
        <Button style={{marginTop: 270}} onClick={handleLogOut}>Log Out</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {afficherContenuCompanies()}
        {afficherContenuFlights()}
        {afficherContenuReservation()}
        {afficherContenuStatistics()}
      </Box>
      
      
      
    </Box>
    
  );
}