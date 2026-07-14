import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ensure correct path
import Footer from '../components/Footer'; // Ensure correct path
import { FaHeart, FaLock, FaShieldAlt } from 'react-icons/fa';
import axios from 'axios';


const Donate = () => {
  // States for form handling
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const type = "Donation";

  const predefinedAmounts = [
    { value: '500', label: '₹500', impact: 'Provides meals for a child for a week.' },
    { value: '1000', label: '₹1000', impact: 'Supports education supplies for one student.' },
    { value: '2500', label: '₹2500', impact: 'Funds a RevolutioNAARI skill training kit.' },
    { value: '5000', label: '₹5000', impact: 'Sponsors a complete health camp setup.' },
  ];

  const handleAmountSelect = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleDonate = async () => {

  // Validation
  if (!firstName || !email) {
    alert("Please enter your name and email!");
    return;
  }

  const finalAmount = amount === 'custom' ? customAmount : amount;
  if (!finalAmount || finalAmount <= 0) {
    alert("Please select or enter a valid amount!");
    return;
  }

  setIsLoading(true);

  try {
    // Spring Boot ko donor info bhejo
    const response = await axios.post("https://p01--ask-us-foundation--8w9bgx4fp8vt.code.run/razorpay/donation/create-order", {
      amount: parseInt(finalAmount),
      type,
      firstName,
      lastName,
      email,
      phone
    });

    const order = response.data;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Askus Foundation",
      description: "Donation",
      order_id: order.id,

      // Prefill — form se jo bhara wo auto fill hoga
      prefill: {
        name: firstName + " " + lastName,
        email: email,
        contact: phone
      },

      handler: async function (paymentResponse) {
        const verifyRes = await axios.post("https://p01--ask-us-foundation--8w9bgx4fp8vt.code.run/razorpay/payment/verify", {
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_order_id:   paymentResponse.razorpay_order_id,
          razorpay_signature:  paymentResponse.razorpay_signature,
        });

        if (verifyRes.data.status === "success") {
          alert("Thank you " + firstName + "! Your donation was successful!");
        } else {
          alert("Payment issue! Contact: askusfoundation.lko@gmail.com\nPayment ID: " + paymentResponse.razorpay_payment_id);
        }
      },

      theme: { color: "#F99B2A" }  // tumhara brand color!
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    alert("Something went wrong, Please Try Again");
    console.log(error)
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="font-sans bg-[#FBF9F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pb-24">

        {/* HERO SECTION */}
        <div className="bg-[#1A150D] py-16 md:py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Contribution Creates <span className="text-[#F99B2A]">Lasting Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Join us in our mission to empower rural women, educate children, and build a stronger, self-reliant community.
            </p>
          </div>
        </div>

        {/* DONATION SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ================= LEFT: DONATION FORM ================= */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Choose Your Donation</h2>

              {/* Amount Selection */}
              <div className="mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {predefinedAmounts.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => handleAmountSelect(item.value)}
                      className={`py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 
                        ${amount === item.value
                          ? 'bg-[#F99B2A] text-white border-[#F99B2A] shadow-md transform -translate-y-1'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-[#F99B2A] hover:text-[#F99B2A]'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">₹</span>
                  <input
                    type="number"
                    placeholder="Enter Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full pl-10 pr-4 py-4 rounded-2xl border-2 outline-none text-lg font-semibold transition-colors
                      ${amount === 'custom' ? 'border-[#F99B2A] ring-1 ring-[#F99B2A]' : 'border-gray-200 focus:border-[#F99B2A]'}`}
                  />
                </div>

                {/* Impact Text */}
                <div className="mt-4 p-4 bg-orange-50 rounded-xl flex items-start gap-3">
                  <FaHeart className="text-[#F99B2A] mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium">
                    {amount !== 'custom'
                      ? predefinedAmounts.find(a => a.value === amount)?.impact
                      : 'Every rupee counts! Your custom donation will be utilized where it is needed the most.'}
                  </p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="mb-10 space-y-5">
                <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (For Updates)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                />
              </div>
              {/* Submit Button */}
              <button
                onClick={handleDonate}
                disabled={isLoading}
                className="w-full bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg py-5 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(249,155,42,0.3)] hover:shadow-[0_8px_30px_rgb(249,155,42,0.5)] transform hover:-translate-y-1 disabled:opacity-50">
                {isLoading ? "Processing..." : `Donate ${amount === 'custom' ? (customAmount ? `₹${customAmount}` : '') : `₹${amount}`} Now`}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FaLock />
                <span>100% Secure & Encrypted Payment</span>
              </div>
            </div>

            {/* ================= RIGHT: TRUST & INFO ================= */}
            <div className="lg:col-span-2 space-y-8 mt-10 lg:mt-0">

              {/* Trust Card */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every rupee you donate is fully traceable. We ensure complete accountability and utilize funds directly towards on-ground execution of our projects.
                </p>
              </div>

              {/* FAQ / Info */}
              <div className="bg-[#1A150D] rounded-3xl p-8 shadow-md text-white">
                <h3 className="text-xl font-bold text-[#F99B2A] mb-6">Need Help?</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <strong className="block text-white mb-1">Is my donation tax-deductible?</strong>
                    <p>Yes, all donations to Askus Foundation are eligible for tax exemption under section 80G of the Income Tax Act.</p>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">How can I contact support?</strong>
                    <p>You can reach us directly at <a href="mailto:askusfoundation.lko@gmail.com" className="text-[#F99B2A] hover:underline">askusfoundation.lko@gmail.com</a> or call us at +91 94514 81141.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;