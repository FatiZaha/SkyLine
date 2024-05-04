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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [logo, setLogo] = useState('');
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/admin/1/compagnies/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ logo, nom, adresse, tel }),
      });
  
      if (response.ok) {
        // Réinitialisez les valeurs des champs après l'envoi réussi
        setLogo('');
        setNom('');
        setAdresse('');
        setTel('');
  
        // Fermez la boîte de dialogue après l'envoi réussi
        handleClose();
      } else {
        console.error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Faites quelque chose avec le fichier sélectionné, par exemple, stockez-le dans l'état
      setLogo(file);
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
            <Button style={{ justifyContent: 'flex-end' }} autoFocus color="inherit" onClick={handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <List style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company Logo:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="logo"
                  name="log"
                  label="Enter the company logo"
                  variant="standard"
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company Name:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="name"
                  name="nam"
                  label="Enter the company name"
                  variant="standard"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company Address:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="adress"
                  name="addr"
                  label="Enter the company address"
                  variant="standard"
                  value={adresse}
                  onChange={(e) =>setAdresse(e.target.value)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company Phone:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="phone"
                  name="teleph"
                  label="Enter the company phone"
                  variant="standard"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
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