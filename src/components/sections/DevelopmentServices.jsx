import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { zoomIn } from "../../utlits/zoomIn";
import Title from "../common/title";
import ServicesFour from "./services/servicesFour";
import { servicesDataFour } from "../../utlits/data/servicesDataFour";

const DevelopmentServices = () => {
  
  return (
    <section className="security-area style-2 pb-75">
      <div className="container" style={{ borderBottom: "1px solid #242C3E" }}>
        <Title
          sectionName="Development Consultancy & Marketing Services"
          sectionTitle="We plan & execute digital transformation"
          style={"style-2"}
          mainStyle={{ fontSize: "2rem" }}
        />
        <ServicesFour
          cardStyle={{ height: "25rem" }}
          data={servicesDataFour}
          style={"services-style"}
        />
      </div>
      <div className="background-ellipse"></div>
    </section>
  );
};

export default DevelopmentServices;
