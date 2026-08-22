package org.askusfoundation.backend.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.askusfoundation.backend.dto.DonationRequest;
import org.askusfoundation.backend.dto.MembershipDto;
import org.askusfoundation.backend.entity.Campaign;
import org.askusfoundation.backend.repository.CampaignRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://foundation-frontend-inky.vercel.app","https://askusfoundation.org","https://www.askusfoundation.org"})
@RequestMapping("/razorpay")
public class RazorPayController {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    private final CampaignRepository campaignRepository;

    public RazorPayController(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    @PostMapping("/donation/create-order")
    public String createOrder(@RequestBody DonationRequest donation) {
        try {
            RazorpayClient client = new RazorpayClient(keyId, keySecret);

            JSONObject request = new JSONObject();
            request.put("amount", donation.getAmount() * 100); // ₹ → paise
            request.put("currency", "INR");
            request.put("receipt", "receipt_" + System.currentTimeMillis());

            // Donor info notes mein save karo
            JSONObject notes = new JSONObject();
            notes.put("payment_type", "DONATION");
            notes.put("donor_name", donation.getFirstName() + " " + donation.getLastName());
            notes.put("donor_email", donation.getEmail());
            notes.put("donor_phone", donation.getPhone());
            notes.put("amount", String.valueOf(donation.getAmount()));
            if (donation.getCampaignId() != null && !donation.getCampaignId().isBlank()) {
                notes.put("campaign_id", donation.getCampaignId());
            }
            request.put("notes", notes);

            Order order = client.orders.create(request);
            return order.toString();

        } catch (RazorpayException e) {
            return "{\"error\": \"Order creation failed\"}";
        }
    }

    @PostMapping("/membership/create-order")
    public String createMembershipOrder(@RequestBody MembershipDto membership) {
        try {
            RazorpayClient client = new RazorpayClient(keyId, keySecret);

            JSONObject request = new JSONObject();
            request.put("amount", membership.getAmount() * 100); // ₹ → paise
            request.put("currency", "INR");
            request.put("receipt", "receipt_" + System.currentTimeMillis());

            // Donor info notes mein save karo
            JSONObject notes = new JSONObject();
            notes.put("payment_type", "MEMBERSHIP");
            notes.put("membership_type", membership.getMembership_type());
            notes.put("member_name", membership.getFullName());
            notes.put("member_email", membership.getEmail());
            notes.put("member_phone", membership.getPhone());
            request.put("notes", notes);

            Order order = client.orders.create(request);
            return order.toString();

        } catch (RazorpayException e) {
            return "{\"error\": \"Order creation failed\"}";
        }
    }

    @PostMapping("/payment/verify")
    @CrossOrigin(origins = {"http://localhost:5173", "https://foundation-frontend-inky.vercel.app","https://askusfoundation.org","https://www.askusfoundation.org"})
    public String verifyPayment(@RequestBody Map<String, String> data) {
        try {
            String orderId = data.get("razorpay_order_id");
            String paymentId = data.get("razorpay_payment_id");
            String signature = data.get("razorpay_signature");

            JSONObject options = new JSONObject();
            options.put("razorpay_order_id", orderId);
            options.put("razorpay_payment_id", paymentId);
            options.put("razorpay_signature", signature);

            boolean isValid = Utils.verifyPaymentSignature(options, keySecret);


            if (!isValid) {
                System.out.println("Invalid signature!");
                return "{\"status\": \"failed\"}";
            }

            System.out.println("Payment verified!");

            // Fetch the order back from Razorpay itself — this is the source of truth,
            // not anything the client sends in this request, so it can't be tampered with.
            RazorpayClient client = new RazorpayClient(keyId, keySecret);
            Order order = client.orders.fetch(orderId);
            JSONObject notes = order.get("notes");

            if (notes != null && notes.has("payment_type")
                    && "DONATION".equals(notes.getString("payment_type"))
                    && notes.has("campaign_id")) {

                String campaignIdStr = notes.getString("campaign_id");
                String amountStr = notes.optString("amount", null);

                try {
                    UUID campaignId = UUID.fromString(campaignIdStr);
                    Optional<Campaign> campaignOpt = campaignRepository.findById(campaignId);

                    if (campaignOpt.isPresent() && amountStr != null) {
                        Campaign campaign = campaignOpt.get();
                        BigDecimal donatedAmount = new BigDecimal(amountStr);

                        BigDecimal currentRaised = campaign.getRaised() != null ? campaign.getRaised() : BigDecimal.ZERO;
                        Integer currentDonations = campaign.getDonations() != null ? campaign.getDonations() : 0;

                        campaign.setRaised(currentRaised.add(donatedAmount));
                        campaign.setDonations(currentDonations + 1);
                        campaignRepository.save(campaign);

                        System.out.println("Campaign updated: " + campaign.getId());
                    } else {
                        System.out.println("Campaign not found or amount missing for id: " + campaignIdStr);
                    }
                } catch (IllegalArgumentException e) {
                    System.out.println("Invalid campaign_id in order notes: " + campaignIdStr);
                }
            }

            return "{\"status\": \"success\"}";

        } catch (RazorpayException e) {
            System.out.println("Error: " + e);
            return "{\"status\": \"error\"}";
        }
    }
}
