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
import { PieChart } from '@mui/icons-material';
import BasicTable from '../../User/Reservations/Reservation';
import CompaniesTable from '../Companies/AllCompanies';
import FlightsTable from '../Flights/AllFlights';
import BarChartIcon from '@mui/icons-material/BarChart';
import FullScreenDialog from '../../Admin/Companies/AddCompany';
import FlightsDialog from '../Flights/AddFlights';

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
  
  
  
  const afficherContenuCompanies = () => {
    if (contexteActif === 'companies') {
      return (
        <div style={{ display: 'block' }}>
          <FullScreenDialog/>
            
          <div style={{ marginTop: '20px' }}>
              <CompaniesTable />
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

  const afficherContenuReservation = () => {
    if (contexteActif === 'reservation') {
      return (
        <div style={{ display: 'block'}}>
        
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button  style={{ background: '#158a88', color: '#fff', marginRight: '10px' }} onClick={handleCloseMenu}>Exporter</Button>
            <Button style={{ background: '#158a88', color: '#fff'}} onClick={handleCloseMenu}>Importer</Button>
          </div>
          <div style={{ marginTop:'20px' }}>
          <BasicTable/>
        </div>
      </div>
      );
    }
    return null;
  };

  const afficherContenuStatistics = () => {
    if (contexteActif === 'statistics') {
      return (
        <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'series A' },
              { id: 1, value: 15, label: 'series B' },
              { id: 2, value: 20, label: 'series C' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
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
        <Toolbar>
          {/* ... */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
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
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <div style={{  textAlign: 'center'}}>
                <input
                type="search"
                placeholder="Search"
                style={{ borderRadius: '10px', outline: 'none', textAlign: 'center', padding:'5px 70px 5px 70px' }}
                />
            </div>
          </div>
          <div>
            <Button color="inherit" style={{ marginLeft: 'auto',background: '#158a88' }}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* Rest of the code */}
    </Box>
    </Box>
  );
}