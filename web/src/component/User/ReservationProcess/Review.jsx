import * as React from 'react';
import dayjs from 'dayjs';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Review({reservation}) {
const nom = [reservation.client.nom, reservation.client.prenom];
const payments = [
  { name: 'Reservation date: ', detail: new Date(reservation.dateRes).toString() },
  { name: 'Departure: ', detail: reservation.vol.aeroportDepart.nom+' '+new Date(reservation.vol.dateDepart).toString() },
  { name: 'Destination: ', detail: reservation.vol.aeroportDestination.nom+' '+new Date(reservation.vol.dateArrive).toString() },
  { name: 'Class: ', detail: reservation.place.siege.type==='Classe1'?'Business Class':'Eco Class' },
  { name: 'Place number: ', detail: reservation.place.numplace },
];


  return (
    <Stack spacing={2} sx={{}}>
      
      
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Customer
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {nom.join(' ')}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Reservation details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
      <Divider />
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${reservation.prixTotal}
          </Typography>
        </ListItem>
      </List>
    </Stack>
  );
}