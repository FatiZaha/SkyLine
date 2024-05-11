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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditCompanyDialog(props) {
  const [companyData, setCompanyData] = useState({
    code: props.company ? props.company.code : '',
    logo: props.company ? props.company.logo : '',
    nom: props.company ? props.company.nom : '',
    adresse: props.company ? props.company.adresse : '',
    tel: props.company ? props.company.tel : ''
  });

  const [errors, setErrors] = useState({
    logoError: '',
    telError: ''
  });

  const handleSubmit = async () => {
    try {
      // Réinitialiser les erreurs
      setErrors({
        logoError: '',
        telError: ''
      });

       // Valider les données
       let isValid = true;
       if (!companyData.logo.endsWith('.svg') && !companyData.logo.endsWith('.png') && !companyData.logo.endsWith('.jpg')) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          logoError: 'Logo file format must be .svg, .png, or .jpg'
        }));
        isValid = false;
      }

      if (!/^[+\-\d]+$/.test(companyData.tel)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          telError: 'Phone number must be numeric'
        }));
        isValid = false;
      }

      if (companyData.tel.length < 10 || companyData.tel.length > 15) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          telError: 'Invalid phone number'
        }));
        isValid = false;
      } else if (companyData.tel && props.companies.some(company => company.tel === companyData.tel)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          telError: 'Phone number already exists'
        }));
        isValid = false;
      }

      if (companyData.nom && props.companies.some(company => company.nom === companyData.nom)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nameError: 'Company name already exists'
        }));
        isValid = false;
      }

      if (companyData.adresse && props.companies.some(company => company.adresse === companyData.adresse)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          addressError: 'Company address already exists'
        }));
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      // Envoyer les données si tout est valide
      const response = await fetch(`http://localhost:8080/api/admin/1/compagnies/update/${companyData.code}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(companyData)
      });

      if (response.ok) {
        // Fermez la boîte de dialogue après l'envoi réussi
        handleClose();
        window.location.reload();
      } else {
        console.error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
    }
  };

  const handleClose = () => {
    setCompanyData((prevData) => ({
      ...prevData,
      code: props.company ? props.company.code : '',
      logo: props.company ? props.company.logo : '',
      nom: props.company ? props.company.nom : '',
      adresse: props.company ? props.company.adresse : '',
      tel: props.company ? props.company.tel : ''
    }));
    props.handleClose();
  };

  useEffect(() => {
    if (props.company) {
      setCompanyData(props.company);
    }
  }, [props.company]);

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
                variant="standard"
                value={companyData.logo}
                onChange={(e) => setCompanyData({ ...companyData, logo: e.target.value })}
                error={!!errors.logoError}
                helperText={errors.logoError}
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
                variant="standard"
                value={companyData.nom}
                onChange={(e) => setCompanyData({ ...companyData, nom: e.target.value })}
                error={!!errors.nameError}
                helperText={errors.nameError}
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
                variant="standard"
                value={companyData.adresse}
                onChange={(e) => setCompanyData({ ...companyData, adresse: e.target.value })}              
                error={!!errors.adressError}
                helperText={errors.adressError}
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
                variant="standard"
                value={companyData.tel}
                onChange={(e) => setCompanyData({ ...companyData, tel: e.target.value })}
                error={!!errors.telError}
                helperText={errors.telError}
              />
            </Grid>
          </Grid>
          <Divider />
        </div>
      </List>
    </Dialog>
  );
}