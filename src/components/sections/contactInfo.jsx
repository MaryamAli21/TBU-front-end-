import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contact-area pages-style pb-4">
            <div className="container">
                <div className="row justify-content-center" data-cues="fadeIn">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                            <i class="ri-linkedin-fill"></i>
                            </div>
                            <h3>LinkedIn:</h3>
                            <p className='mb-0'>@vmgroup-tech</p>
                            <p className='mt-0 pt-0'>@the-business-united</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-phone-line"></i>
                            </div>
                            <h3>Contact Info:</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="tel:+97336800135">+973 3680 0135</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="tel:+97337009188">+973 3700 9188</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-mail-open-line"></i>
                            </div>
                            <h3>Email:</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="mailto:support@gmail.com">info@tbu.com</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="mailto:info@email.com">info@email.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo