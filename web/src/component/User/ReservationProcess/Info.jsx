import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';



function Info({ flightDetails }) {
  const flight = [
  {
    name: 'Departure',
    desc: flightDetails.aeroportDepart.nom,
    info: new Date(flightDetails.dateDepart).toString(),
  },
  {
    name: 'Destination',
    desc: flightDetails.aeroportDestination.nom,
    info: new Date(flightDetails.dateArrive).toString(),
  },
  {
    name: 'Business Class',
    desc: 'Price',
    info: '$'+flightDetails.prixClass1,
  },
  {
    name: 'Eco Class',
    desc: 'Price',
    info: '$'+flightDetails.prixClass2,
  },
];
  return (
    <React.Fragment>
      
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Flight details
      </Typography>
      <List disablePadding>
        {flight.map((details) => (
          <ListItem key={details.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={details.name}
              secondary={details.desc}
            />
            <Typography variant="body1" fontWeight="medium">
              {details.info}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  flightDetails: PropTypes.string.isRequired,
};

export default Info;