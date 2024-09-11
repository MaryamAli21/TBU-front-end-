import React from "react";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "../components/common/pageTitle";
import ServicesFour from "../components/sections/services/servicesFour";
import ServicesTwo from "../components/sections/services/servicesTwo";
import { servicesDataFour } from '../utlits/data/servicesDataFour'

const Services = () => {
  return (
    <>
      <PageTitle link={"Services"} pageName={"Our Services"} />
      <ServicesTwo />
      <ServicesFour cardStyle={{height:"20rem"}} data={servicesDataFour} style={"services-style"} />
      <ScrollRestoration />
    </>
  );
};

export default Services;
