package com.airlines.service;

import com.airlines.model.Vol;
import com.airlines.repository.VolRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class VolServiceTest {
    @Mock
    VolRepository volRepository;

    @InjectMocks
    VolService volService = new VolService();

    public void setUp() {// pour la création des données de test
        // Créez un vol de test
        Vol vol = new Vol();
        vol.setCodeVol(1L);
        vol.setDateDepart(vol.getDateDepart());
        vol.setDateArrive(vol.getDateArrive());
        vol.setStatus(vol.getStatus());
        vol.setPrixClass1(170);
        vol.setPrixClass2(70);
    }


    @Test
    public void testDeleteVol() {


        // Appelez la méthode du service pour supprimer le vol
        volService.DeleteVol(1L);

        // Vérifiez que la méthode de suppression du repository a été appelée avec le bon ID
        verify(volRepository).deleteVolByCodeVol(1L);
    }
}
