import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import { workData } from "../../utlits/data/workData";
import { zoomIn } from "../../utlits/zoomIn";
import Title from "../common/title";

const ServicesHome = () => {
  return (
    <div className="services-area style-2 pb-75">
      <div className="container">
        <h2 style={{ color: "white" }} className="text-center mb-4">
          How we work
        </h2>
        <div className="row">
          {workData.map(({ id, work_details, name, src }) => {
            return (
              <motion.div
                key={id}
                className="col-lg-6 col-sm-6"
                initial="offscreen"
                whileInView="onscreen"
                variants={zoomIn(id)}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="single-services-info">
                  <div className="icon">{src()}</div>
                  <h3>
                    <Link className="text-decoration-none" href={"#"}>
                      {name}
                    </Link>
                  </h3>
                  <p>{work_details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
