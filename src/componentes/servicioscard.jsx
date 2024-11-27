import React from "react";
import "../css/servicios.css";

const servicioscard = ({ image, title, directedTo, description, link, linkText }) => {
  return (
    <div className="servicio">
      <img src={image} alt={title} />
      <div className="servicio-info">
        <h3>{title}</h3>
        <p className="dirigido">
          <i className="bi bi-person-fill"></i> Dirigido a: {directedTo}
        </p>
        <p>{description}</p>
        <a href={link} className="btn">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default servicioscard;
