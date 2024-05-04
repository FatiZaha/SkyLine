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


export default function ReservationsTable() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/vols/allVols'); // Remplacez '/api/reservations' par l'URL de votre endpoint pour récupérer les réservations
        const data = await response.json();
        setReservations(data); // Mettez à jour les données de réservation dans le state
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Ville Départ</TableCell>
            <TableCell align="left">Ville Destination</TableCell>
            <TableCell align="left">Prix Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell component="th" scope="row">
                {reservation.date}
              </TableCell>
              <TableCell align="left">{reservation.Date}</TableCell>
              <TableCell align="left">{reservation.villeDepart}</TableCell>
              <TableCell align="left">{reservation.villeDestination}</TableCell>
              <TableCell align="left">{reservation.prixtotal}</TableCell>
              <TableCell align="left">
                  <IconButton>
                      <ModeEditIcon />
                  </IconButton>
                  <IconButton>
                      <DeleteIcon />
                  </IconButton>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}