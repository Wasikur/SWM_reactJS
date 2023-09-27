import React from "react";
import "./footerStyles.css";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        This is a solid waste management plant situated in Dibrugarh, Assam.
        <br />
        Our main target is to use the solid waste materials of Dibrugarh
        district and recycle it to use it further.
      </p>
      <div className="icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>
      <p>
        {" "}
        Made with <i className="fa fa-heart-o"></i> by Wasikur Rahman Khan
      </p>
    </section>
  );
};

export default Footer;
