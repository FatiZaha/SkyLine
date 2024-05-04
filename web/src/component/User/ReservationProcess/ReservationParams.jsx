import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { iconButtonClasses } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
const icon=iconButtonClasses.disabled;
export default function ReservationParams() {
    const [classType, setClass] = React.useState('');

  const handleChange = (event) => {
    setClass(event.target.value);
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
          
          <MenuItem value={'Classe1'}>69$</MenuItem>
          <MenuItem value={'Classe2'}>40$</MenuItem>
        </Select>
        
      </FormControl>
      </FormGrid>
      
    </Grid>
  );
}