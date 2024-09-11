import React, { useState } from "react";
import Title from "../common/title";
import AlertModal from "../common/AlertModal";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess();
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success
        console.log("Message sent successfully");
        resetForm();
        setSuccess("Thanks for the message. We will get back to you soon!");
      } else {
        // Handle failure
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
    });
  };

  return (
    <div className="contact-form-area pb-75">
      <div className="container">
        <Title
          sectionName={"Send Us A Message"}
          sectionTitle={"Get in Touch With Us Today."}
        />

        <div className="contact-form-info" data-cue="slideInUp">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control textarea"
                name="description"
                placeholder="Enter Your Comments"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit">Send A Message</button>
          </form>
        </div>
      </div>
      {success && <p className="text-center">{success}</p>}
    </div>
  );
};

export default ContactForm;
