import React from "react";
import "./contactUsLocationStyles.css";

const ContactUsLocation = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113273.13774877202!2d94.82190044096333!3d27.475934802635212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740a3e8e395f0c3%3A0xa18093a482504839!2sSolid%20Waste%20Management%2C%20Dibrugarh!5e0!3m2!1sen!2sin!4v1659642995737!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location of Solid Waste Management, Dibrugarh"
    ></iframe>
  );
};

export default ContactUsLocation;
