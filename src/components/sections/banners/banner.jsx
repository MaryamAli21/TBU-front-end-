import React, { useState } from "react";
import { motion } from "framer-motion";
import hero_bg from "../../../assets/images/hero/hero-2.png";
import shap_2 from "../../../assets/images/shape/shape-2.png";
import { slideUp } from "../../../utlits/slideUp";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Link } from "react-router-dom";
import tbu_logo from "../../../assets/images/tbu-logo.jpeg";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="banner-area">
      <div className="container-fluid">
        <motion.div
          className="row align-items-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideUp(1)}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="col-lg-6">
            <div className="banner-content">
              <div className="title">
                <h1>The Business United</h1>
                <p>
                  Merging deep industry insight with advanced technology, VM
                  Group stands at the forefront of driving transformative change
                  across these sectors Merging deep industry insight with
                  advanced technology, TBU & the VM Group stands at the
                  forefront of driving transformative change across these
                  sectors.
                </p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-image">
              <img src={tbu_logo} alt="banner-image" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="shape">
        <div className="shape-2">
          <img src={shap_2} alt="shape" />
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="0O2aH4XLbto"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Banner;
