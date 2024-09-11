import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/pageTitle";
import { slideUp } from "../../utlits/slideUp";

const index = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/sign-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Loggedin successfully");
        const res = await response.json();
        localStorage.setItem("user", res.token);
        navigate("/admin/inquiries");
      } else {
        console.error("Failed to send message");
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate("/admin/inquiries");
    }
  },[])

  return (
    <div>
      <>
        <PageTitle link={"Admin Login"} pageName={"Admin"} />
        <div className="login-area ptb-100">
          <div className="container">
            <motion.div
              className="login-info"
              initial="offscreen"
              whileInView="onscreen"
              variants={slideUp(1)}
              viewport={{ once: true, amount: 0 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {errorMessage&&<div className="form-check">
                  <label
                    className="form-check-label"
                  >
                    {errorMessage}
                  </label>
                </div>}
                <button className="default-btn border-0" type="submit">
                  <i className="ri-arrow-right-line"></i>
                  Log In
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <ScrollRestoration />
      </>
    </div>
  );
};

export default index;
