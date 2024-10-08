import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideUp } from "../../../utlits/slideUp";
import { zoomIn } from "../../../utlits/zoomIn";
import { servicesDataThree } from "../../../utlits/data/servicesDataThree";

const ServicesThree = () => {
  return (
    <div className="services-area pb-75">
      <div className="container">
        <div className="services-title-area">
          <motion.div
            className="row align-items-center"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="col-lg-6 col-md-7">
              <div className="title">
                <span className="d-block">Our Services</span>
                <h2>What We Do for Your (SIEM) Security in TBU.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="button">
                <Link
                  className="demo text-decoration-none"
                  to="/service-details"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row">
          {servicesDataThree.map(
            ({ id, link, service_details, service_name, src }) => {
              return (
                <motion.div
                  key={id}
                  className="col-lg-3 col-sm-6"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(id)}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="single-services-card">
                    <div className="image">
                      <img src={src} alt="services-image" />
                    </div>
                    <h3>
                      <Link
                        className="text-decoration-none"
                        to="/service-details"
                      >
                        {service_name}
                      </Link>
                    </h3>
                    <p>{service_details}</p>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesThree;
