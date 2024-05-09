import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import EditFlightDialog from '../Flights/EditFlights'; 

export default function FlightTable() {
  const [flight, setFlight] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleClickOpen = (flight) => {
    setSelectedFlight(flight);
    setIsEditDialogOpen(true);
  };

  const handleClose = () => {
    setIsEditDialogOpen(false);
    setSelectedFlight(null);
  };

  const handleDeleteFlight = async (code) => {
    try {
      await fetch(`http://localhost:8080/api/admin/1/vols/${code}`, {
        method: 'DELETE',
      });

      setFlight(flight.filter((flight) => flight.code !== code));
    } catch (error) {
      console.error('Erreur lors de la suppression du vol :', error);
    }
  };

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/vols/allVols');
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des vols :', error);
      }
    };

    fetchFlight();
  }, []);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Ville départ</TableCell>
              <TableCell>Ville destination</TableCell>
              <TableCell>Date départ</TableCell>
              <TableCell>Date arrivée</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Business Class</TableCell>
              <TableCell>Eco Class</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flight.map((Flight) => (
              <TableRow key={Flight.id}>
                <TableCell align="left">{Flight.avionVol.compagnie.nom}</TableCell>
                <TableCell align="left">{Flight.aeroportDepart.ville.nom}</TableCell>
                <TableCell align="left">{Flight.aeroportDestination.ville.nom}</TableCell>
                <TableCell align="left">{formatDate(Flight.dateDepart)}</TableCell>
                <TableCell align="left">{formatDate(Flight.dateArrive)}</TableCell>
                <TableCell align="left">{Flight.status}</TableCell>
                <TableCell align="left">{Flight.prixClass1 } $</TableCell>
                <TableCell align="left">{Flight.prixClass2 } $</TableCell>
                <TableCell align="left">
                  <IconButton onClick={() => handleClickOpen(Flight)}>
                    <ModeEditIcon style={{ color: '#158a88'}}/>
                  </IconButton>
                  <IconButton onClick={() => handleDeleteFlight(Flight.code)}>
                    <DeleteIcon style={{ color: '#158a88'}}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedFlight && (
        <EditFlightDialog
          open={isEditDialogOpen}
          handleClose={handleClose}
          flight={selectedFlight}
      />
    )}
    </>
  );
}
