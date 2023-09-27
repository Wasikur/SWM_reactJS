import React from "react";
import "./homeStyles.css";
import Navbar from "../components/navbar/Navbar";
import HomeBox from "../components/home_box/HomeBox";
import HomeCourse from "../components/home_course/HomeCourse";
import HomeContactus from "../components/home_contactus/HomeContactus";
import Site from "../components/site/Site";

const Home = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <HomeBox />
      </section>
      <HomeCourse />
      <Site />
      <section className="cta">
        <HomeContactus />
      </section>
    </>
  );
};

export default Home;
