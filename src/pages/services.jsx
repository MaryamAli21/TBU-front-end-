import React from "react";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "../components/common/pageTitle";
import ServicesFour from "../components/sections/services/servicesFour";
import ServicesTwo from "../components/sections/services/servicesTwo";

const Services = () => {
  return (
    <>
      <PageTitle link={"Services"} pageName={"Our Services"} />
      <ServicesFour style={"services-style"} />
      <ServicesTwo />
      <ScrollRestoration />
    </>
  );
};

export default Services;
