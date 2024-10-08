import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "../../components/common/pageTitle";
import QueryCard from "../../components/common/QueryCard";
import Title from "../../components/common/title";
import { zoomIn } from "../../utlits/zoomIn";
import ConfirmDialog from "../../components/common/ConfirmDialog";

const Queries = () => {
  const [queriesData, setQueriesData] = useState([]);

  async function fetchInquiries() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/inquiries`,
        {
          method:"GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const jsonRes = await response.json();
        setQueriesData(jsonRes);
      } else {
        console.error("Failed to load inquiries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function deleteInquiry(id) {
    try {
      const confirm = await ConfirmDialog("Are you sure you want to delete this inquiry?");
      if(!confirm) return;
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/inquiries/${id}`,
        {
          method:"DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        fetchInquiries();
      } else {
        console.error("Failed to load inquiries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function resolveInquiry(id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/inquiries/${id}`,
        {
          method:"PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ resolved: true }),
        }
      );
      if (response.ok) {
        fetchInquiries();
      } else {
        console.error("Failed to load inquiries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }


  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <>
      <PageTitle pageName={"Inquiries"} link="Admin" />
      <div className="testimonial-area pt-100 pb-75">
        <div className="container">
          <Title
            sectionName={"Inquiries"}
            sectionTitle={"Get in touch with the Customers!"}
          />

          <div className="row" data-cues="fadeIn">
            {queriesData &&
              queriesData.map((query, index) => {
                return (
                  <motion.div
                    key={index}
                    className="col-lg-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(index)}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <QueryCard {...query} handleDelete={deleteInquiry} handleResolve={resolveInquiry}/>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Queries;
