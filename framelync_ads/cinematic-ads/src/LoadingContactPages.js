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
    <div className="bg-gray-200 text-black min-h-screen flex flex-col">
      {/* ✅ Use dark logo for ContactUs page */}
      <Header logoVariant="dark" />

      {/* Contact Form Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        <h2 className="text-4xl font-bold mb-10 mt-10">Connect with us</h2>
        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Submit ↗</button>
        </form>
      </div>

      {/* Success Message */}
      {success && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg">
          <p>Thanks for the Response, We will get back to you soon!</p>
        </div>
      )}

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
};

export { LoadingPage, ContactUs };
