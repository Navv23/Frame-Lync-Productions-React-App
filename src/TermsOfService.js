import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="bg-black text-white">
        <Header logoVariant="dark" />
      </div>
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <h1 id="terms-of-service" className="text-3xl sm:text-4xl font-bold mb-8 mt-24">Terms of Service</h1>
        <p className="mb-4">
          Welcome to FrameLync. By using our website, you agree to these Terms of Service. Please read them carefully.
        </p>
        <h2 className="text-2xl font-bold mb-4">Use of the Site</h2>
        <p className="mb-4">
          You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others.
        </p>
        <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          All content on this site is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our permission.
        </p>
        <h2 className="text-2xl font-bold mb-4">Disclaimers and Limitation of Liability</h2>
        <p className="mb-4">
          We do not guarantee the accuracy or reliability of the site's content. We are not liable for any damages arising from your use of the site.
        </p>
        <h2 className="text-2xl font-bold mb-4">Changes to the Terms</h2>
        <p className="mb-4">
          We may update these terms from time to time. We will notify you of any changes by posting the new terms on our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us at contactframelync@gmail.com
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;