package com.airlines.service;

import com.airlines.model.Vol;
import com.airlines.repository.VolRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class TestVolService {
    @Mock
    VolRepository volRepository;

    @InjectMocks
    VolService volService = new VolService();

    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }


}
