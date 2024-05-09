import * as React from 'react';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';



import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import ReservationParams from './ReservationParams';

import Info from './Info';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useNavigate } from 'react-router-dom';
import ReservationTicket from './ReservationTicket';
import { PDFDownloadLink } from '@react-pdf/renderer';




const steps = ['Revervation params', 'Review your reservation', 'Payment details'];





export default function ReservationProcess({client,flight}) {
  
  function getStepContent(step) {
  switch (step) {
    case 0:
      return <ReservationParams flight={flight} client={client} setNewReservation={setReservation}/>;
    case 1:
      return <Review reservation={reservation}/>;
    case 2:
      return <PaymentForm client={client} reservation={reservation} setReservation={setReservation}/>;
    default:
      throw new Error('Unknown step');
  }
}
  function test()
  {
    <ReservationTicket reservation={reservation}/>
  }
  const [reservation, setReservation] = React.useState('');
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const handleFlightsSearchClick = () => {
    navigate('/flightsfilter');
  };

const handleGetTicket = ()=>{console.log(reservation);
return(
<PDFDownloadLink document={<ReservationTicket reservation={reservation} />} fileName="ticket.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
);
};

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            marginTop: -11,
            alignItems: 'start',
            pt: 1,
            px: 10,
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              height: 150,
            }}
          >
            <Button
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              onClick={handleFlightsSearchClick}
              sx={{ ml: '-8px' }}
            >
              Back to Flight Search
              
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info flightDetails={flight} />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                component="a"
                onClick={handleFlightsSearchClick}
                sx={{ alignSelf: 'start' }}
              >
                Back to Flight Search
                
              </Button>
              
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
                height: 20,
              }}
            >
              
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{
                  width: '100%',
                  height: 40,
                  
                }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ':first-child': { pl: 0 },
                      ':last-child': { pr: 0 },
                    }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                ':last-child': { pb: 2 },
              }}
            >
              <div>
                
                <Typography variant="body1">
                  Flight Details
                </Typography>
              </div>
              <InfoMobile flightDetails={flight} />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: 'flex', md: 'none' }}}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ':first-child': { pl: 0 },
                    ':last-child': { pr: 0 },
                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">🎫</Typography>
                <Typography variant="h5">Thank you for your booking!</Typography>
                <Typography variant="body1" color="text.secondary">
                  We have validated your reservation<br/>You could now get your <strong>ticket</strong>.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: 'start',
                    width: { xs: '100%', sm: 'auto' },
                  }}
                  onClick={test}
                >
                  Get your ticket !
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                    alignItems: 'end',
                    flexGrow: 1,
                    
                    gap: 1,
                    pb: { xs: 12, sm: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: '60px',
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{
                        display: { xs: 'none', sm: 'flex' },
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{
                        display: { xs: 'flex', sm: 'none' },
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{
                      width: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    {activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    
    
  );
}