package org.askusfoundation.backend.controller;

import org.askusfoundation.backend.entity.SupportEntity;
import org.askusfoundation.backend.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/support")
public class SupportController {

    @Autowired
    private SupportService supportService;

    @PostMapping
    public void getSupport(@RequestBody SupportEntity supportentity){
        supportService.save(supportentity);
    }
}
