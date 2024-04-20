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
import Autocomplete from '@mui/material/Autocomplete';
import BasicDatePicker from '../Admin/DatePicker/DatePicker';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FlightsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [ setLogoFile] = useState(null);

  const handleLogoInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Faites quelque chose avec le fichier sélectionné, par exemple, stockez-le dans l'état
      setLogoFile(file);
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
            <Button style={{ justifyContent: 'flex-end' }} autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <List style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between',marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Company:</Typography>
              </Grid>
              <Grid item style={{ marginLeft: 'auto' }}>
                <TextField
                  id="logo-input"
                  variant="standard"
                  type="file"
                  inputProps={{ accept: '.png' }}
                  onChange={(e) => handleLogoInputChange(e)}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
            <Grid item>
                <Typography variant="body1">Ville départ:</Typography>
            </Grid>
            <Grid item>
                <Autocomplete
                options={['Paris', 'Londres', 'New York', 'Tokyo']} // Remplacez cette liste par vos propres options de villes
                renderInput={(params) => <TextField {...params} variant="standard" />}
                style={{ width: 200 }} // Ajoutez cette ligne pour spécifier la largeur de la liste déroulante
                />
            </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between', marginTop: 10 }}>
            <Grid item>
                <Typography variant="body1">Ville destination:</Typography>
            </Grid>
            <Grid item>
                <Autocomplete
                options={['Paris', 'Londres', 'New York', 'Tokyo']} // Remplacez cette liste par vos propres options de villes
                renderInput={(params) => <TextField {...params} variant="standard" />}
                style={{ width: 200 }} // Ajoutez cette ligne pour spécifier la largeur de la liste déroulante
                />
            </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between' ,marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Date départ:</Typography>
              </Grid>
              <Grid item>
                <BasicDatePicker/>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between' ,marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Date arrivée:</Typography>
              </Grid>
              <Grid item>
                <BasicDatePicker/>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between' ,marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Status :</Typography>
              </Grid>
              <Grid item>
                <TextField id="standard-basic"  variant="standard" />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ justifyContent: 'space-between' ,marginTop: 10 }}>
              <Grid item>
                <Typography variant="body1">Prix:</Typography>
              </Grid>
              <Grid item>
                <TextField id="standard-basic"  variant="standard" />
              </Grid>
            </Grid>
          </div>
        </List>
      </Dialog>
    </React.Fragment>
  );
}