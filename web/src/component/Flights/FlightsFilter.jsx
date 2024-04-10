import React from 'react'
import { Grid,Divider,Typography,FormControl,Stack,Paper,InputBase,IconButton} from '@mui/material'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem,DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Label } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import SearchIcon from '@mui/icons-material/Search';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import FlightDetails from './FlightDetails';
import { Flights } from './Flights';




const FlightsFilter = () => {
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
        <section className='pt-[2rem]  space-y-5 lg:flex relative'>
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
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Flight"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                
                                
                            </Paper>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={[
                                    'DatePicker',
                                    'TimePicker',
                                    ]}
                                    
                                    
                                >
                                    <Stack>
                                    <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                                        <DatePicker minDate={dayjs()}/>
                                    </DemoItem>
                                    <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
                                        <TimePicker />
                                    </DemoItem>
                                    </Stack>
                                </DemoContainer>
                            </LocalizationProvider>
                                
                            
                        </FormControl>
                    </div>

                </div>
            </div>

            <div className='space-y-5 lg:w-[65%] filter lg:pl-10'>
                {Flights.map((item)=>(
                <FlightDetails image={item.image} title={item.title} subtitle={item.subtitle} price={item.price} airline={item.airline}/>
                ))}

            </div>

        </section>
    </div>
  )
}

export default FlightsFilter