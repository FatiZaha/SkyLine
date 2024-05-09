import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ReservationsTable(props, ref) {
  const [reservations, setReservations] = useState([]);
  const exportRef = useRef();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/reservations');
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchReservations();
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

  useImperativeHandle(ref, () => ({
    handleExport: () => {
      const csvContent = reservations.map((reservation) => {
        const formattedDate = formatDate(reservation.dateRes);
        const villeDepart = reservation.vol.aeroportDepart.ville.nom;
        const villeDestination = reservation.vol.aeroportDestination.ville.nom;
        const prixTotal = `${reservation.prixTotal} $`;

        return `${formattedDate},${villeDepart},${villeDestination},${prixTotal}`;
      }).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'reservations.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Date</TableCell>
<TableCell align="left">Departure City</TableCell>
<TableCell align="left">Destination City</TableCell>
<TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell align="left">{formatDate(reservation.dateRes)}</TableCell>
              <TableCell align="left">{reservation.vol.aeroportDepart.ville.nom}</TableCell>
              <TableCell align="left">{reservation.vol.aeroportDestination.ville.nom}</TableCell>
              <TableCell align="left">{reservation.prixTotal} $</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default forwardRef(ReservationsTable);