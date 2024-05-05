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
import Avatar from  '@mui/material/Avatar';
import EditCompany from '../Companies/EditCompany';

export default function AllCompanies() {
  const [companies, setCompanies] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const handleEditCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleDeleteCompany = async (code) => {
    try {
      // Appeler votre API de suppression en utilisant l'ID de la compagnie
      await fetch(`http://localhost:8080/api/admin/1/compagnies/delete/${code}`, {
        method: 'DELETE',
      });

      // Mettre à jour la liste des compagnies après la suppression
      setCompanies(companies.filter((company) => company.code !== code));
    } catch (error) {
      console.error('Erreur lors de la suppression de la compagnie :', error);
    }
  };

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
            <TableRow key={Compagnie.code}>
              <TableCell align="left" style={{ paddingRight: 0 }}>
              <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
                  <img src={Compagnie.logo} alt="airlineLogo"/>
              </Avatar>
              </TableCell>
              <TableCell align="left">{Compagnie.nom}</TableCell>
              <TableCell align="left">{Compagnie.adresse}</TableCell>
              <TableCell align="left">{Compagnie.tel}</TableCell>
              <TableCell align="left">
                <IconButton onClick={() => handleEditCompany(Compagnie)}>
                  <ModeEditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteCompany(Compagnie.code)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedCompany && (
  <EditCompany
    company={selectedCompany}
    onCancel={() => setSelectedCompany(null)}
    onSave={(updatedCompany) => {
      // Mettez à jour la liste des compagnies avec la compagnie modifiée
      setCompanies(
        companies.map((company) =>
          company.code === updatedCompany.code ? updatedCompany : company
        )
      );
      setSelectedCompany(null);
    }}
  />
)}
    </TableContainer>
    
  );
}