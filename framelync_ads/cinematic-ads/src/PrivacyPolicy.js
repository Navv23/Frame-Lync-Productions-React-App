import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="bg-black text-white">
        <Header logoVariant="dark" />
      </div>
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <h1 id="privacy-policy" className="text-3xl sm:text-4xl font-bold mb-8 mt-20">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to FrameLync. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter.
        </p>
        <h2 className="text-2xl font-bold mb-4">Use of Information</h2>
        <p className="mb-4">
          We use the information we collect to respond to your inquiries, provide updates, and improve our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
        <p className="mb-4">
          We do not share your information with third parties, except as required by law.
        </p>
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
        </p>
        <h2 className="text-2xl font-bold mb-4">Changes to the Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at privacy@framelync.com.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;