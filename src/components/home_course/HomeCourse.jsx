import React from "react";
import "./HomeCourseStyles.css";
import course_details from "./HomeCourseDetails";
import HomeCourseCard from "./HomeCourseCard";

const createCard = (detail) => {
  return (
    <HomeCourseCard
      id={detail.id}
      key={detail.id}
      title={detail.title}
      text={detail.text}
      img={detail.img}
      alt={detail.alt}
    />
  );
};

const HomeCourse = () => {
  return (
    <section className="utilization">
      <h1>
        Effective methods of utilizing the Solid Waste generated from a city/
        town
      </h1>
      <p>
        Collection of the overall waste products of Dibrugarh district,
        <br />
        Segregation of the wastes.
        <br />
        Decomposition of the waste and extracting the gas from it.
        <br />
        Methane gas will be used in fule cell for generation of electicity.
        <br />
        Remaining wastes will be used for the production of Fertilizers.
        <br />
        Plastic wastes are knows as pyrolysis.
        <br />
        Production of diesel, petrol, neptha and cole.
        <br />
        Main goal is to complete utilize the solid waste
      </p>
      <div className="row">{course_details.map(createCard)}</div>
    </section>
  );
};

export default HomeCourse;
