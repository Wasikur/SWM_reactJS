import React from "react";
import "./aboutStyles.css";
import Navbar from "../components/navbar/Navbar";
import site_plan from "../assets/site_plan.webp";
import flow_chart from "../assets/flow_chart.png";
import ContentCard from "../components/about_us_content/ContentCard";

const About = () => {
  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>About Us</h1>
      </section>
      <section className="about-us">
        <div class="row">
          <div class="about-col">
            <ContentCard />
          </div>
          <div class="about-col">
            <img src={site_plan} alt="site_plan" />
            <img src={flow_chart} alt="working_flow_chart" />
            <h3>working flow chart</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
