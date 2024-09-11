import React from "react";

const QueryCard = ({ name, phone, email, subject, description, createdAt }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(createdAt));
  return (
    <div className="single-testimonial-card">
      <div className="testimonial-user d-flex align-items-center justify-content-between">
        <div className="user d-flex align-items-center">
          <div className="image">
            {/* <img src={src} alt="testimonial-image" /> */}
          </div>
          <div className="content">
            <h3>{name}</h3>

            <div>
              <span>{email}</span>
            </div>
            <span>{phone}</span>
            <p className="mt-2">{formattedDate}</p>

            <p style={{fontWeight:"bold"}}>{subject}</p>
            <p className="mb-0">Description:</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
