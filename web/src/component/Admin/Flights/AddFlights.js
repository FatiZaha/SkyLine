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
import { useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
  function AddFlight() {
    const [openPopup, setOpenPopup] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [flightData, setFlightData] = useState({});
    const [company, setcompanyData] = useState({});
    const [nom, setCompany] = useState('');
    const [vdepart, setVdepart] = useState('');
    const [vdestination, setVdeset] = useState('');
    const [datedepart, setDdepart] = useState(null);
    const [datedestination, setDdest] = useState(null);
    const [status, setStatus] = useState('');
    const [prix, setPrix] = useState('');
   
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFlightDataChange = (event) => {
      setFlightData({
        ...flightData,
        [event.target.name]: event.target.value
      });
    };
  
    

    const handleAddFlight = async () => {
      try {
        // Réinitialiser les erreurs
        
  
        // Envoyer les données si tout est valide
        const response = await fetch(`http://localhost:8080/api/admin/1/vols/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(flightData)
        });
  
        if (response.ok) {
          
          setCompany('');
          setVdepart('');
          setVdeset('');
          setDdepart('');
          setDdest('');
          setPrix('');
          // Fermez la boîte de dialogue après l'envoi réussi
          handleClose();
          
        } else {
          console.error('Erreur lors de l\'envoi du formulaire');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
      }
    };
  
    return (
      <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          style={{ background: '#158a88', color: '#fff', marginRight: '10px' }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Ajouter
        </Button>
      </div>

  
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', width: 600, height: 50 }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Button style={{ justifyContent: 'flex-end' }} autoFocus color="inherit" onClick={handleAddFlight}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <List style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company :</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="nomc"
                  name="nom"
                  variant="standard"
                  value={nom}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Departure City:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="vdept"
                  name="vdep"
                  variant="standard"
                  value={vdepart}
                  onChange={(e) => setVdepart(e.target.value)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Destination City:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="vdest"
                  name="dest"
                  variant="standard"
                  value={vdestination}
                  onChange={(e) =>setVdeset(e.target.value)}
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
              <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
                <Grid item>
                  <Typography variant="body1">Departure Date:</Typography>
                
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
                
                        minDate={dayjs()} value={datedepart} onChange={(newValue) => setDdepart(newValue)}/>
                        
                    </DemoItem>
                    
                    
                </Grid></Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
                <Grid item>
                  <Typography variant="body1">Arrival Date:</Typography>
                
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
                
                        minDate={dayjs()} value={datedestination} onChange={(newValue) => setDdest(newValue)}/>
                        
                    </DemoItem>
                    
                    
                </Grid></Grid>
              </Grid>
                       
              </DemoContainer>
          </LocalizationProvider>
                            
            
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Business Class:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="prix"
                  name="prixv"
                  variant="standard"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  //error={!!errors.telError}
                  //helperText={errors.telError}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Economy Class:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="prix"
                  name="prixv"
                  variant="standard"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  //error={!!errors.telError}
                  //helperText={errors.telError}
                />
              </Grid>
            </Grid>
            <Divider />
          </div>
        </List>
      </Dialog>
        </React.Fragment>
    );
  }
  
  export default AddFlight;