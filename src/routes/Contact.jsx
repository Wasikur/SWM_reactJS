import React from "react";
import "./contactusStyles.css";
import Navbar from "../components/navbar/Navbar";
import ContactUsLocation from "../components/contact_us_location/ContactUsLocation";
import ContactUsForm from "../components/contact_us_form/ContactUsForms";

const Contact = () => {
  return (
    <>
      <section className="sub-header1">
        <Navbar />
        <h1>Contact Us</h1>
      </section>
      <section className="location">
        <ContactUsLocation />
      </section>
      <ContactUsForm />
    </>
  );
};

export default Contact;
