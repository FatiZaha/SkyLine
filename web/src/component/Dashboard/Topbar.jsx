import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
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
    </Box>
  );
}