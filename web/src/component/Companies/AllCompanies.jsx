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
    // Effectuez une requête à votre base de données pour récupérer les données de réservation
    // Utilisez les méthodes appropriées pour accéder à votre base de données (par exemple, une API REST ou un ORM)

    // Exemple de requête fictive
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/reservations'); // Remplacez '/api/reservations' par l'URL de votre endpoint pour récupérer les réservations
        const data = await response.json();
        setCompanies(data); // Mettez à jour les données de réservation dans le state
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchCompanies();
  }, []);

  // Ajoutez une ligne d'enregistrement pour le test
  useEffect(() => {
    setCompanies([
      {
        id: 1,
        logo: 'logo',
        nom: 'Nom de l\'entreprise',
        adresse: 'Adresse de l\'entreprise',
        tel: 'Numéro de téléphone de l\'entreprise',
      },
      ...companies,
    ]);
  }, []); // Assurez-vous de passer un tableau vide en tant que seconde argument pour exécuter ce useEffect une seule fois

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
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell align="right">
                <img src={company.logo} alt="Logo de l'entreprise" />
              </TableCell>
              <TableCell align="right">{company.nom}</TableCell>
              <TableCell align="right">{company.adresse}</TableCell>
              <TableCell align="right">{company.tel}</TableCell>
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