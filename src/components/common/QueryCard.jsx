import React from "react";

const QueryCard = ({
  _id,
  name,
  phone,
  email,
  subject,
  description,
  createdAt,
  resolved,
  handleDelete,
  handleResolve
}) => {
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
          <div className="image"></div>
          <div className="content">
            <h3>{name}</h3>

            <div>
              <span>{email}</span>
            </div>
            <span>{phone}</span>
            <p className="mt-2 mb-0">{formattedDate}</p>
            <p className="mt-0">Status: {resolved?"Resolved":"Unresolved"}</p>

            <p style={{ fontWeight: "bold" }}>{subject}</p>
            <p className="mb-0">Description:</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        {!resolved&&<button className="btn border-0" onClick={()=>handleResolve(_id)}>Mark Resolved</button>}
        <button className="default-btn border-0" onClick={()=>handleDelete(_id)}>
          Delete
        </button>
      </div>
      
    </div>
  );
};

export default QueryCard;
