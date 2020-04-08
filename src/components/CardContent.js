import React from "react";

const CardContent = ({ title, desc, featuredImage }) => (
  <div className="card-container">
    <img className="img-card" src={featuredImage} alt={title} />
    <p className="text-title-card">{title}</p>
    <p className="text-desc-card">{desc}</p>
  </div>
);

export default CardContent;
