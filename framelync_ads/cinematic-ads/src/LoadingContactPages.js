import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";  

const LoadingPage = ({ message, redirectTo }) => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate(redirectTo || "/contact-us"); 
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
  
    return () => clearInterval(interval);
  }, [navigate, redirectTo]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* ✅ Reusable Header */}
      <Header />

      {/* Loading Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-lg mb-4">{message || "Almost There!"}</h1>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400 transition-all duration-200 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-gray-300 text-black min-h-screen flex flex-col">
      {/* ✅ Use dark logo for ContactUs page */}
      <Header logoVariant="dark" />

      {/* Contact Form Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        {/* ✅ Subtle Outline Card (Includes Title) */}
        <div className="w-full max-w-md border border-gray-600 rounded-xl px-6 py-8 bg-black/4">
          
          {/* Title Inside the Card */}
          <h2 className="text-2xl font-bold text-center mb-6">Connect with Us</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-2 border rounded-full bg-white/90 text-black placeholder-gray-700" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-full bg-white/90 text-black placeholder-gray-700" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea 
              placeholder="Message" 
              className="w-full px-4 py-2 border rounded-xl bg-white/90 text-black placeholder-gray-700" 
              rows="4" 
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            {/* ✅ Smaller & Fully Rounded Button */}
            <button 
              type="submit" 
              className="w-full bg-[#0E1012] text-white py-1.5 rounded-full text-sm hover:bg-gray-800 transition">
              Submit ↗
            </button>
          </form>
        </div>
      {/* Success Message */}
      {/* Success Message */}
        {success && (
          <div className="fixed bottom-16 right-4 bg-[#0E1012] text-white p-4 rounded-lg shadow-lg animate-fade-in">
            <p className="font-semibold">Thanks for your response! We’ll get back to you soon. 🚀</p>
          </div>
        )}

      </div>


      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
};

export { LoadingPage, ContactUs };
