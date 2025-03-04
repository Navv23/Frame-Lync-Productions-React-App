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
          setTimeout(() => navigate(redirectTo || "/contact-us"), 500);
          return 100;
        }
        return prev + 2; // Slightly faster loading
      });
    }, 20);

    return () => clearInterval(interval);
  }, [navigate, redirectTo]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-lg mb-4">{message || "Almost There!"}</h1>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400 transition-all duration-150 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
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
      <Header logoVariant="dark" />
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        <div className="w-full max-w-md border border-gray-600 rounded-xl px-6 py-8 bg-white/80 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Connect with Us</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-500 rounded-full bg-gray-50 text-black placeholder-gray-700 focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-500 rounded-full bg-gray-50 text-black placeholder-gray-700 focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-500 rounded-xl bg-gray-50 text-black placeholder-gray-700 focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="w-full bg-[#0E1A30] text-white py-2 px-6 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#0C162A] transition-all shadow-md"
            >
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5h10M19 5v10M19 5L5 19"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Success Message */}
        {success && (
          <div className="fixed bottom-16 right-4 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in">
            <p className="font-semibold">Thanks for your response! We’ll get back to you soon. 🚀</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export { LoadingPage, ContactUs };
