package org.askusfoundation.backend.controller;

import org.askusfoundation.backend.entity.Campaign;
import org.askusfoundation.backend.repository.CampaignRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
@CrossOrigin(origins = {"http://localhost:5173", "https://foundation-frontend-inky.vercel.app","https://askusfoundation.org","https://www.askusfoundation.org"})
public class CampaignController {

    private final CampaignRepository campaignRepository;

    public CampaignController(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    @GetMapping
    public List<Campaign> getCampaigns() {
        return campaignRepository.findByActiveTrue();
    }

    @PostMapping
    public Campaign createCampaign(@RequestBody Campaign campaign) {
        return campaignRepository.save(campaign);
    }
}