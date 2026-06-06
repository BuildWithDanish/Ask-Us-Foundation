import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ensure correct path
import Footer from '../components/Footer'; // Ensure correct path
import { FaHeart, FaLock, FaShieldAlt } from 'react-icons/fa';

const Donate = () => {
  // States for form handling
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');

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
                  <input type="text" placeholder="First Name *" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none" required />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none" />
                </div>
                <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none" required />
                <input type="tel" placeholder="Phone Number (For Updates)" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none" />
              </div>

              {/* Payment Methods */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="flex flex-col space-y-3">
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-[#F99B2A] bg-orange-50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="w-4 h-4 text-[#F99B2A] focus:ring-[#F99B2A]" />
                    <span className="ml-3 font-semibold text-gray-800">UPI / QR Code (GPay, PhonePe, Paytm)</span>
                  </label>
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#F99B2A] bg-orange-50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-4 h-4 text-[#F99B2A] focus:ring-[#F99B2A]" />
                    <span className="ml-3 font-semibold text-gray-800">Credit / Debit Card / Net Banking</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg py-5 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(249,155,42,0.3)] hover:shadow-[0_8px_30px_rgb(249,155,42,0.5)] transform hover:-translate-y-1">
                Donate {amount === 'custom' ? (customAmount ? `₹${customAmount}` : '') : `₹${amount}`} Now
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