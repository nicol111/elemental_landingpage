import React, { useEffect, useRef } from "react";
import "../css/clientes.css"; 

const ClientesCorporativos = () => {
  const clientesLogoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clientesLogoRef.current.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector("#clientes");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="clientes" className="clientes-corp">
      <h2>Clientes Corporativos</h2>
      <div className="clientes-contenedor">
        <img
          ref={clientesLogoRef}
          className="clientes-logo"
          src="imagenes/logos/clientes_logos.png"
          alt="Logos de Clientes Corporativos"
        />
      </div>
    </section>
  );
};

export default ClientesCorporativos;


