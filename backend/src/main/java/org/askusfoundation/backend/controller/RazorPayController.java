package org.askusfoundation.backend.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.askusfoundation.backend.dto.DonationRequest;
import org.askusfoundation.backend.dto.MembershipDto;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/razorpay")
public class RazorPayController {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

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
    @CrossOrigin(origins = "http://localhost:5173")
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

            if (isValid) {
                System.out.println("✅ Payment verified!");
                return "{\"status\": \"success\"}";
            } else {
                System.out.println("Invalid signature!");
                return "{\"status\": \"failed\"}";
            }

        } catch (RazorpayException e) {
            System.out.println("Error: " + e);
            return "{\"status\": \"error\"}";
        }
    }
}
