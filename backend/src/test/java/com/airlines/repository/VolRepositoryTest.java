package com.airlines.repository;

import com.airlines.model.Vol;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.junit.jupiter.api.Assertions.assertNull;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)  //configurer la base de données utilisée lors des tests.
@DataJpaTest //indique que la classe VolRepositoryTest est un test d'intégration pour les couches de persistance JPA.
public class VolRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private VolRepository volRepository;

    @Test
    void testdeleteVol() {
        // Create a Vol object and persist it in the database
        Vol vol = new Vol();
        vol.setCodeVol(30L);
        entityManager.merge(vol);
        //vérifier si l'entité a été effectivement supprimée en cherchant une entité avec le même code.
        // Si l'entité est supprimée, le résultat de entityManager.find sera null.

        volRepository.deleteVolByCodeVol(30L);
        Vol deleteVol = entityManager.find(Vol.class,30);
        assertNull(deleteVol);
    }
}