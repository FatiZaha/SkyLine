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
    desc: 'Aeroport name',
    price: '01/02/2024 04:10 AM',
  },
  {
    name: 'Destination',
    desc: 'Aeroport name',
    price: '01/02/2024 07:10 AM',
  },
  {
    name: 'Business Class',
    desc: 'Price',
    price: '$69.99',
  },
  {
    name: 'Eco Class',
    desc: 'Price',
    price: '$69.99',
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
              {details.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;