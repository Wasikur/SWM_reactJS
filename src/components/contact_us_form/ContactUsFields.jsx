import React from "react";

const ContactUsFields = (props) => {
  return (
    <div>
      <i className={props.icon}></i>
      <span>
        <h5>{props.text1}</h5>
        <h5>{props.text2}</h5>
        <h5>{props.text3}</h5>
        <p>{props.para}</p>
      </span>
    </div>
  );
};

export default ContactUsFields;
