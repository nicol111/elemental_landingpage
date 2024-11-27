import React from "react";
import ServiceCard from "./servicioscard";
import "../css/servicios.css";

const Servicios = () => {
  const servicios = [
    {
      image: "imagenes/cursos/1.png",
      title: "Cursos en Tecnología",
      directedTo: "Niños y Jóvenes",
      description: "Programas educativos STEAM para niños y jóvenes en la modalidad online o presencial",
      link: "#cursos",
      linkText: "PRÓXIMOS CURSOS",
    },
    {
      image: "imagenes/cursos/2.png",
      title: "Programas de Impacto Social",
      directedTo: "Empresas y organizaciones",
      description: "Diseño y ejecución de Programas RSE en educación Digital",
      link: "https://wa.link/qb8e7e",
      linkText: "MÁS INFORMACIÓN",
    },
    {
      image: "imagenes/cursos/3.png",
      title: "Programas educativos para Colegios",
      directedTo: "Colegios",
      description: "Capacitación e implementación de Programas en educación Digital",
      link: "https://wa.link/zb4ttf",
      linkText: "MÁS INFORMACIÓN",
    },
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="background-figuras">
        <img src="imagenes/diseños/patron_2.png" alt="Figura decorativa 2" className="figura figura2" />
        <img src="imagenes/diseños/fondo-del-circulo.png" alt="Figura decorativa 3" className="figura figura3" />
      </div>
      <h2>Nuestros Servicios</h2>
      <div className="servicios-contenedor">
        {servicios.map((service, index) => (
          <div key={index} data-aos="fade-up">
            <ServiceCard
              image={service.image}
              title={service.title}
              directedTo={service.directedTo}
              description={service.description}
              link={service.link}
              linkText={service.linkText}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
