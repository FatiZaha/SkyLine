import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlightIcon from '@mui/icons-material/Flight';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import BarChartIcon from '@mui/icons-material/BarChart';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
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
            <Button color="inherit" style={{ marginLeft: 'auto' }}>
              Logout
            </Button>
          </div>


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
      <ListItem>
        <ListItemIcon>
          <ApartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Companies" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FlightIcon />
        </ListItemIcon>
        <ListItemText primary="Flights" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          < AirplaneTicketIcon/>
        </ListItemIcon>
        <ListItemText primary="Reservations" />
      </ListItem>
      <ListItem>
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
        <Typography >
          
        </Typography>
        <Typography>
          
        </Typography>
      </Box>
    </Box>
  );
}


    
