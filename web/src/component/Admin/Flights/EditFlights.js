import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditFlightDialog(props) {
  const [ volData, setVolData] = useState({
    codeVol: props.vol ? props.vol.codeVol : '',
    depdate: props.vol ? props.vol.depdate : '',
    arrivaldate: props.vol ? props.vol.arrivaldate : '',
    bclass: props.vol ? props.vol.bclass : '',
    ecoclass: props.vol ? props.vol.ecoclass : ''
  });

  

  const handleSubmit = async () => {
    
      // Envoyer les données si tout est valide
      const response = await fetch(`http://localhost:8080/api//admin/{id}/vols/${volData.codeVol}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(volData)
      });

      if (response.ok) {
        // Fermez la boîte de dialogue après l'envoi réussi
        handleClose();
        window.location.reload();
      } else {
        console.error('Erreur lors de l\'envoi du formulaire');
      }
    
  };

  const handleClose = () => {
    setVolData((prevData) => ({
      ...prevData,
      codeVol: props.vol ? props.vol.codeVol : '',
    depdate: props.vol ? props.vol.depdate : '',
    arrivaldate: props.vol ? props.vol.arrivaldate : '',
    bclass: props.vol ? props.vol.bclass : '',
    ecoclass: props.vol ? props.vol.ecoclass : ''
    }));
    props.handleClose();
  };

  useEffect(() => {
    if (props.vol) {
      setVolData(props.vol);
    }
  }, [props.vol]);

  return (
    <Dialog open={props.open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative', width: 600, height: 50 }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Button style={{ justifyContent: 'flex-end' }} autoFocus color="inherit" onClick={handleSubmit} title="Save">
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <List style={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <div>
          <Divider />
          <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
            <Grid item>
              <Typography variant="body1">Company :</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="logo"
                name="log"
                variant="standard"
                value={volData.logo}
                onChange={(e) => setVolData({ ...volData, logo: e.target.value })}
                
              />
            </Grid>
          </Grid>
          <Divider />
          <Divider />
          <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
            <Grid item>
              <Typography variant="body1">Departure City:</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="name"
                name="nam"
                variant="standard"
                value={volData.nom}
                onChange={(e) => setVolData({ ...volData, nom: e.target.value })}
                
                />
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
            <Grid item>
              <Typography variant="body1">Destination City:</Typography>
            </Grid>
            <Grid item>
             <TextField
                id="adress"
                name="addr"
                variant="standard"
                value={volData.adresse}
                onChange={(e) => setVolData({ ...volData, adresse: e.target.value })}              
                
                />
            </Grid>
          </Grid>
          <Divider />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                  components={[
                  'DatePicker',
                  ]}
                  >
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
              <Grid item>
                <Typography variant="body1">Departure Date:</Typography>
              </Grid>
              <Grid item>
                    
                      <DemoItem  valueType="date" >
                          <DatePicker 
                          
                            slotProps={{
                              
                              openPickerButton: { color: 'primary' },
                              textField: {
                                focused: true,
                                color: 'primary',
                              },
                            }}
                  
                          onChange={(e) => setVolData({ ...volData, depdate: e.target.value })}/>
                          
                          
                      </DemoItem>
                      
                      
                  </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
              <Grid item>
                <Typography variant="body1">Arrival Date:</Typography>
              </Grid>
              <Grid item>
                    
                      <DemoItem valueType="date" >
                          <DatePicker 
                          
                            slotProps={{
                              
                              openPickerButton: { color: 'primary' },
                              textField: {
                                focused: true,
                                color: 'primary',
                              },
                            }}
                  
                          onChange={(e) => setVolData({ ...volData, arrivaldate: e.target.value })}/>
                          
                      </DemoItem>
                      
                      
                  </Grid>
            </Grid>
            </DemoContainer>
          </LocalizationProvider>
          <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
            <Grid item>
              <Typography variant="body1">Business Class:</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                name="teleph"
                variant="standard"
                value={volData.tel}
                onChange={(e) => setVolData({ ...volData, tel: e.target.value })}
                
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 , marginLeft:10 , marginLRight:10 }}>
            <Grid item>
              <Typography variant="body1">Economy Class:</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                name="teleph"
                variant="standard"
                value={volData.tel}
                onChange={(e) => setVolData({ ...volData, tel: e.target.value })}
                
              />
            </Grid>
          </Grid>
          <Divider />
        </div>
      </List>
    </Dialog>
  );
}