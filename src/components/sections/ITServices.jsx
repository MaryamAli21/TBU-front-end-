import React from "react";
import { itServicesData } from "../../utlits/data/itServicesData";
import Title from "../common/title";
import ServicesFour from "./services/servicesFour";

const ITServices = () => {
  return (
    <section id="services" className="security-area style-2 pt-100 pb-75">
      <div className="container" style={{ borderBottom: "1px solid #242C3E" }}>
        <Title
          sectionName="IT Solutions"
          sectionTitle="Our depth of knowledge and hands-on experience stretch across several pivotal domains"
          style={"style-2"}
          mainStyle={{ fontSize: "2rem" }}
        />
        <div
          className="row"
          style={{ marginTop: "5rem", marginBottom: "4rem" }}
          data-cues="fadeIn"
        >
          <ServicesFour
            cardStyle={{ height: "18rem" }}
            data={itServicesData}
            style={"services-style"}
          />
        </div>
      </div>
      <div className="background-ellipse"></div>
    </section>
  );
};

export default ITServices;
