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
import Avatar from '@mui/material/Avatar';
import EditCompanyDialog from '../Companies/EditCompany';

export default function AllCompanies() {
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  const handleClickOpen = (company) => {
    setSelectedCompany(company);
    setIsEditDialogOpen(true);
  };

  const handleClose = () => {
    setIsEditDialogOpen(false);
    setSelectedCompany(null);
  };
  

  const handleDeleteCompany = async (code) => {
    try {
      await fetch(`http://localhost:8080/api/admin/1/compagnies/delete/${code}`, {
        method: 'DELETE',
      });

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
    <>
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
                  <Avatar sx={{ bgcolor: 'white', color: '#158a88' }}>
                    <img src={Compagnie.logo} alt="airlineLogo" />
                  </Avatar>
                </TableCell>
                <TableCell align="left">{Compagnie.nom}</TableCell>
                <TableCell align="left">{Compagnie.adresse}</TableCell>
                <TableCell align="left">{Compagnie.tel}</TableCell>
                <TableCell align="left">
                  <IconButton onClick={() => handleClickOpen(Compagnie)}>
                    <ModeEditIcon style={{ color: '#158a88'}}/>
                  </IconButton>
                  <IconButton onClick={() => handleDeleteCompany(Compagnie.code)}>
                    <DeleteIcon style={{ color: '#158a88'}}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedCompany && (
        <EditCompanyDialog
          open={isEditDialogOpen}
          handleClose={handleClose}
          company={selectedCompany}
        />
      )}
    </>
  );
}