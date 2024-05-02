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

export default function CompaniesTable() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/compagnies/all');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des compagnies :', error);
      }
    };
  
    fetchCompanies();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Adresse</TableCell>
            <TableCell>Tel</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((Compagnie) => (
            <TableRow key={Compagnie.id}>
              <TableCell align="right">
                <img src={Compagnie.logo} alt="Logo de l'entreprise" />
              </TableCell>
              <TableCell align="right">{Compagnie.nom}</TableCell>
              <TableCell align="right">{Compagnie.adresse}</TableCell>
              <TableCell align="right">{Compagnie.tel}</TableCell>
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