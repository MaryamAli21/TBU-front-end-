import React from 'react'
import {motion} from "framer-motion"
import { slideUp } from '../../utlits/slideUp'

const Subscribe = () => {
    return (
        <div className="contact-area" style={{background:"black"}}>
            <div className="container">
                <div className="contact-info-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp()}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-3 col-sm-6 pe-0">
                            <div className="single-contact-info">
                                <div className="contact-call d-flex align-items-center">
                                    <div className="icon">
                                    <i className="ri-mail-line"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Contact Us</h3>
                                        <a className="text-decoration-none" >info@tbu.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 p-0">
                            <div className="single-contact-info">
                                <div className="contact-social">
                                    <ul className="list-unstyled ps-0 mb-0 list">
                                        <li className="d-inline-block">
                                            <a className="text-decoration-none" target="_blank" href="https://www.linkedin.com/company/vmgroup-tech/">
                                            <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a className="text-decoration-none" target="_blank" href="https://www.linkedin.com/company/the-business-united/">
                                            <i class="ri-linkedin-box-fill"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-contact-info">
                                <div className="contact-submit d-flex align-items-center justify-content-between">
                                    <h3>Join Our Newsletter</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter Your Email" />
                                            <button type="submit">
                                                <i className="ri-send-plane-fill"></i>
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe