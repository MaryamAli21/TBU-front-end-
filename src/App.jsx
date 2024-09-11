import { motion } from "framer-motion";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import About from "./components/sections/abouts/homeAbout";
import Banner from "./components/sections/banners/banner";
import Countter from "./components/sections/countter";
import DevelopmentServices from "./components/sections/DevelopmentServices";
import HowWeWork from "./components/sections/HowWeWork";
import ITServices from "./components/sections/ITServices";
import { slideUp } from "./utlits/slideUp";
const App = () => {
  return (
    <>
      <Banner />
      <ITServices />
      <DevelopmentServices />
      <About />
      <HowWeWork />
      
      <div className="faq-area pb-75">
        <div className="container">
          <motion.div
            className="row"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp()}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="title">
                  <h2>
                    Accelerating the Vision 2030 objectives across the GCC
                  </h2>
                </div>
                <p>
                  By introducing and adapting the world's leading tech
                  solutions, we equip our clients to thrive in a tech-driven
                  landscape
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Countter />
     
      <ScrollRestoration />
    </>
  );
};

export default App;
