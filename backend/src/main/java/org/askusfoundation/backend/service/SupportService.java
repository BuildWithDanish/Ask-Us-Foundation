package org.askusfoundation.backend.service;

import org.askusfoundation.backend.entity.SupportEntity;
import org.askusfoundation.backend.repository.SupportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupportService {

    @Autowired
    public SupportRepo supportRepo;

    public SupportEntity save(SupportEntity supportEntity) {
        return supportRepo.save(supportEntity);
    }

}
