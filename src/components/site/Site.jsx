import React from "react";
import "./siteStyles.css";
import plant from "../../assets/plant.jpg";

const Site = () => {
  return (
    <>
      <section className="site">
        <h1>Our Site</h1>
        <p>
          This is the first solid waste management plant in Assam. It is located
          at Lekai, Thakurthan in Dibrugarh district of Upper Assam.
        </p>
        <div className="row">
          <div className="site-col">
            <img src={plant} alt="site" />
            <div className="layer">
              <h3>DIBRUGARH</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Site;
