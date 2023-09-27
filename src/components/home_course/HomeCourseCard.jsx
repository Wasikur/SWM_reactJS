import React from "react";
// import "./Home_courseStyles.css";

const HomeCourseCard = (props) => {
  return (
    <div className="utilization-col">
      <h3>{props.title}</h3>
      <p>
        {props.text}
        <br />
        <img src={props.img} width="250" height="180" alt={props.alt} />
      </p>
    </div>
  );
};

export default HomeCourseCard;
