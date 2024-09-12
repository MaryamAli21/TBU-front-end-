import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import about_4 from "../../../assets/images/about/about-4.jpg";
import about_5 from "../../../assets/images/about/about-5.jpg";
import { slideUp } from "../../../utlits/slideUp";
import AboutImg from "../../../assets/images/about-home.jpg"
import AboutImg2 from "../../../assets/images/about-home2.jpg"
const About = () => {
  return (
    <section className="about-area style-2 pb-75">
      <div className="container">
        <motion.div
          className="row align-items-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideUp()}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="col-lg-6">
            <div className="about-image style-2">
              <div className="image-1">
                <img src={AboutImg2} alt="about-image" />
              </div>
              <div className="image-two">
                <img src={AboutImg} alt="about-image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content style-2">
              <div className="title">
                <span className="d-block">About TBU</span>
                <h2>The Comprehensive Solution for Your Needs.</h2>
                <p>
                  Our expertise isn't just about technology. It's about
                  understanding the nuances and unique challenges of various
                  sectors
                  <br/>TBU & VM Group is deeply committed to accelerating
                  the Vision 2030 objectives across the GCC
                </p>
              </div>
              
              <Link className="default-btn text-decoration-none" to="/about">
                <i className="ri-arrow-right-line"></i>
                Know More About
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
