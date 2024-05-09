import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [emailValid, setEmailValid] = React.useState('');
  const [emailExist, setEmailExist] = React.useState('');
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [messageError, setError] = React.useState('');
  const handleFormSubmit = async (e) => {
    try {
      const response = await fetch('http://localhost:8080/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          tel,
          password,
        }),
      });
  
      const data = await response.json();
      
        setMessage(data);
     
    } catch (error) {
      console.error(error)
    }
  };
  const ValidateEmail = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/emailvalidation/${email}`);
      const data = await response.json();
      setEmailValid(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la validation :', error);
    }
  };

  const IsEmailExist = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/emailexistance/${email}`);
      const data = await response.json();
      setEmailExist(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de verification :', error);
    }
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignUpClick = (e) => {
    
    var nom = document.getElementById('lastName').value;
    var prenom = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    if (!nom || !prenom || !tel || !email || !password ) {
      e.preventDefault();
      setError('Insert All the sections');
      setOpen(true);
    }
    else if (nom && prenom && tel && email && password) {
      IsEmailExist();ValidateEmail();
      
      if(!emailExist && emailValid) {handleFormSubmit();navigate('/signin');}
      else{
        if(emailExist){
        e.preventDefault();
        setError('This account already exist');
        setOpen(true);
      }
      
      if(!emailValid){
        e.preventDefault();
        setError('This email is invalide');
        setOpen(true);
      }
      }
      
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={prenom} onChange={(e) => setPrenom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={nom} onChange={(e) => setNom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="phone number"
                name="tel"
                autoComplete="tel"
                value={tel} onChange={(e) => setTel(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Collapse in={open}>
                <Alert severity="error"
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
                  <AlertTitle>Error</AlertTitle>
                  {messageError} !!
                </Alert>
              </Collapse>
          <Button
            onClick={handleSignUpClick}
            type='submit'
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" onClick={handleSignInClick}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;