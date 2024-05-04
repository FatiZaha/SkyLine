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

export default function BasicTable() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Effectuez une requête à votre base de données pour récupérer les données de réservation
    // Utilisez les méthodes appropriées pour accéder à votre base de données (par exemple, une API REST ou un ORM)

    // Exemple de requête fictive
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/clients/1/reservations'); // Remplacez '/api/reservations' par l'URL de votre endpoint pour récupérer les réservations
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
            <TableCell>Date</TableCell>
            <TableCell align="right">Ville Départ</TableCell>
            <TableCell align="right">Ville Destination</TableCell>
            <TableCell align="right">Prix Total</TableCell>
            <TableCell align="right">Date </TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell component="th" scope="row">
                {reservation.date}
              </TableCell>
              <TableCell align="right">{reservation.villeDepart}</TableCell>
              <TableCell align="right">{reservation.villeDestination}</TableCell>
              <TableCell align="right">{reservation.prixtotal}</TableCell>
              <TableCell align="right">
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