import React from "react";
import "./contactusformstyle.css";
import details from "./ContactUsCardFields";
import ContactUsFields from "./ContactUsFields";

const createCard = (detail) => {
  return (
    <ContactUsFields
      key={detail.id}
      icon={detail.icon}
      text1={detail.text1}
      text2={detail.text2}
      text3={detail.text3}
      para={detail.para}
    />
  );
};

const ContactUsForms = () => {
  return (
    <section className="contact-us">
      <div className="row">
        <div className="'contact-col">{details.map(createCard)}</div>
        <div className="contact-col">
          <>
            <h2>For any query, please fill up the form:</h2>
            <form action="form-handler.php" method="post">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                required
              />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                Submit
              </button>
            </form>
          </>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForms;
