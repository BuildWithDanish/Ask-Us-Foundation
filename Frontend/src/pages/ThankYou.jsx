import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaDownload, FaShareAlt, FaCheckCircle } from 'react-icons/fa';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(true);

  // Data passed from Donate.jsx via navigate state
  const { fullName, amount, date, paymentId } = location.state || {};

  // Guard: if someone lands here directly without state, send them back
  useEffect(() => {
    if (!fullName || !amount) {
      navigate('/donate');
    }
  }, [fullName, amount, navigate]);

  useEffect(() => {
    if (!fullName || !amount) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const templateImg = new Image();
    templateImg.crossOrigin = 'anonymous'; // needed if image is served from public/ or CDN
    templateImg.src = '/certificate-template.png'; // put your blank certificate in /public

    templateImg.onload = () => {
      // Match canvas size to the template's real resolution for crisp output
      canvas.width = templateImg.width;
      canvas.height = templateImg.height;

      // 1. Draw the certificate background
      ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);

      // 2. Draw the Name (on the underline in the template)
      ctx.fillStyle = '#1A150D';
      ctx.textAlign = 'center';
      ctx.font = `bold ${Math.round(canvas.width * 0.028)}px Georgia, serif`;
      ctx.fillText(fullName, canvas.width / 2, canvas.height * 0.52);

      // 3. Draw the Amount
      ctx.font = `${Math.round(canvas.width * 0.02)}px Georgia, serif`;
      ctx.textAlign = 'left';
      ctx.fillText(`₹${Number(amount).toLocaleString('en-IN')}`, canvas.width * 0.365, canvas.height * 0.580);

      // 4. Draw the Issue Date
      ctx.font = `${Math.round(canvas.width * 0.016)}px Georgia, serif`;
      ctx.fillText(date, canvas.width * 0.17, canvas.height * 0.845);

      // 5. Convert to downloadable/shareable image
      const dataUrl = canvas.toDataURL('image/png');
      setCertificateUrl(dataUrl);
      setIsGenerating(false);
    };

    templateImg.onerror = () => {
      console.error('Failed to load certificate template. Check /public/certificate-template.png path.');
      setIsGenerating(false);
    };
  }, [fullName, amount, date]);

  const handleDownload = () => {
    if (!certificateUrl) return;
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `Askus-Foundation-Certificate-${fullName?.replace(/\s+/g, '-')}.png`;
    link.click();
  };

  const handleShare = async () => {
    if (!certificateUrl) return;

    try {
      // Convert dataURL to a File so it can be shared as an image (not just a link)
      const res = await fetch(certificateUrl);
      const blob = await res.blob();
      const file = new File([blob], 'donation-certificate.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'I just donated to Askus Foundation!',
          text: `I contributed ₹${amount} to Askus Foundation towards building a Shreshth Bharat. Join me!`,
          files: [file],
        });
      } else {
        // Fallback for desktop browsers without native share support
        handleDownload();
        alert('Sharing images directly isn\'t supported on this browser. The certificate has been downloaded instead — you can share it manually!');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
    }
  };

  if (!fullName || !amount) return null; // redirecting via useEffect

  return (
    <div className="font-sans bg-[#FBF9F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Thank You, {fullName.split(' ')[0]}!
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Your donation of <span className="font-bold text-[#F99B2A]">₹{Number(amount).toLocaleString('en-IN')}</span> was successful.
          </p>
          {paymentId && (
            <p className="text-gray-400 text-sm mb-10">Payment ID: {paymentId}</p>
          )}

          {/* Hidden working canvas — visible preview shown via the generated image below */}
          <canvas ref={canvasRef} style={{ display: 'none' }} />

          <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 border border-gray-100 mb-8">
            {isGenerating ? (
              <div className="py-24 text-gray-400">Generating your certificate...</div>
            ) : certificateUrl ? (
              <img
                src={certificateUrl}
                alt="Donation Certificate"
                className="w-full rounded-xl shadow-md"
              />
            ) : (
              <div className="py-24 text-red-400">
                Couldn't generate certificate preview, but your donation was recorded successfully.
              </div>
            )}
          </div>

          {certificateUrl && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-md hover:-translate-y-1"
              >
                <FaDownload /> Download Certificate
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-[#1A150D] hover:bg-black text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-md hover:-translate-y-1"
              >
                <FaShareAlt /> Share on Social Media
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;