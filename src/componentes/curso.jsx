
import React from "react";

const Curso = ({ imgSrc, alt, modalidad, edad, titulo, fecha, hora, enlace }) => {
  return (
    <div className="curso">
      <img src={imgSrc} alt={alt} />
      <div className="curso-info">
        <div className="detalles">
          <p className="modalidad">
            <i className="bi bi-laptop"></i> {modalidad}
          </p>
          <p className="edad">
            <i className="bi bi-people"></i> {edad}
          </p>
        </div>
        <h3>{titulo}</h3>
        <p className="fecha">
          <i className="bi bi-calendar-event"></i> {fecha}
        </p>
        <p className="hora">
          <i className="bi bi-clock"></i> {hora}
        </p>
        <a href={enlace} className="enlace">
          Más Información →
        </a>
      </div>
    </div>
  );
};

export default Curso;
