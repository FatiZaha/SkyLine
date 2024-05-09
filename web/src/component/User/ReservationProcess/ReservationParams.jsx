import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { Button, iconButtonClasses } from '@mui/material';
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
const icon=iconButtonClasses.disabled;
export default function ReservationParams({client,flight,setNewReservation}) {
    const [classType, setClass] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [messageError, setError] = React.useState('');
    const [severety, setSeverety] = React.useState('');
  const handleChange = (event) => {
    setClass(event.target.value);
  };

  const handleCreatReservation = async () => {
    try {
      
      const response = await fetch(`http://localhost:8080/api/clients/${client.id}/newReservation?classType=${classType}&codeVol=${flight.codeVol}`, {
        method: 'POST',
      });
      const data = await response.json();
      setNewReservation(data);
      if(data){
        setError('Reservation created successfuly');
        setSeverety('error');
          setOpen(true);
      }
      else{
        setError('Reservation failed');
        setSeverety('error');
          setOpen(true);
      }

    } catch (error) {
      console.error('Erreur lors de la création de la réservation :', error);
    }
  };
  return (
    <Grid container spacing={3} sx={{marginTop: 8}}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          Choose class
        </FormLabel>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={classType}
          label="Class"
          onChange={handleChange}
        >
          
          <MenuItem value={'Classe1'}>Business Class</MenuItem>
          <MenuItem value={'Classe2'}>Eco Class</MenuItem>
          
        </Select>
        
      </FormControl>
      
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Price
        </FormLabel>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={classType}
          onChange={handleChange}
          displayEmpty
          disabled
          IconComponent={icon}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={'Classe1'}>{flight.prixClass1}$</MenuItem>
          <MenuItem value={'Classe2'}>{flight.prixClass2}$</MenuItem>
        </Select>
        
      </FormControl>
      
      </FormGrid>
      <FormGrid item xs={12} md={20}>
      <Button onClick={handleCreatReservation}>Create Reservation</Button></FormGrid>
      <FormGrid item xs={12} md={20}>
      <Collapse in={open}>
                <Alert security={severety}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  
                  {messageError} !!
                </Alert>
              </Collapse></FormGrid>
    </Grid>
  );
}