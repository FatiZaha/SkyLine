import React from 'react'
import { Grid,Divider,Typography,FormControl,Stack,Paper,IconButton} from '@mui/material'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem,DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import SearchIcon from '@mui/icons-material/Search';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import FlightDetails from './FlightDetails';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const FlightsFilter = () => {
const ville = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },]    
const [date, setDateValue] = React.useState(null);
const [departCity, setDepartCityValue] = React.useState(null);
const [destCity, setDestCityValue] = React.useState(null);

  return (
    <div className='px-5 lg:px-12'>
        <section>
            <br />
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={50}>
                        <img className='w-full h-[75vh] object-cover'
                        src='https://source.unsplash.com/random?airline' alt="" />

                    </Grid>
                    
                </Grid>
            </div>
            <h3 className='text-gray-500 text-4xl lg:text-4xl z-10 py-2'><ConnectingAirportsIcon sx={{ fontSize: 50 }}/> Find your flight</h3>
        </section>
        <Divider/>
        <section className='pt-[1rem]  space-y-5 lg:flex relative'>
            <div className='space-y-10 lg:w-[35%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Filter
                        </Typography>
                        <FormControl className='py-10 space-y-5 flex flex-col' component={"fieldset"}>
                            <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                
                                <AirplaneTicketOutlinedIcon sx={{ fontSize: 20 }}/>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <Autocomplete
                                    
                                    id="free-solo-2-demo"
                                    disableClearable
                                    freeSolo
                                    sx={{ width: 400 }}
                                    value={departCity}
                                    onChange={(event,newValue) => {
                                    setDepartCityValue(newValue);
                                    }}
                                    options={ville.map((option) => option.label)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Departure city"
                                        InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        }}
                                    />
                                    )}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                
                                
                            </Paper>
                            <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                
                                <AirplaneTicketOutlinedIcon sx={{ fontSize: 20 }}/>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    value={destCity}
                                    onChange={(event,newValue) => {
                                    setDestCityValue(newValue);
                                    }}
                                    sx={{ width: 400 }}
                                    options={ville.map((option) => option.label)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Destination city"
                                        InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        }}
                                    />
                                    )}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                
                                
                            </Paper>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={[
                                    'DatePicker',
                                    ]}
                                    
                                    
                                >
                                    <Stack>
                                    <DemoItem label="Departure date" valueType="date" >
                                        <DatePicker 
                                        
                                          slotProps={{
                                            
                                            openPickerButton: { color: 'primary' },
                                            textField: {
                                              focused: true,
                                              color: 'primary',
                                            },
                                          }}
                                
                                        minDate={dayjs()} value={date} onChange={(newValue) => setDateValue(newValue)}/>
                                    </DemoItem>
                                    
                                    </Stack>
                                </DemoContainer>
                            </LocalizationProvider>
                                
                            
                        </FormControl>
                    </div>

                </div>
            </div>
                <FlightDetails/>
        </section>
    </div>
  )
}

export default FlightsFilter