import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>
        <ContactForm />
      </div>
  );
};

export default ContactPage;
