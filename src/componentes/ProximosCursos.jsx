import React from "react";
import Curso from "./curso";
import "../css/cursos.css";



const ProximosCursos = () => {
  const cursos = [
    {
      imgSrc: "imagenes/cursos/curso_roblox.jpg",
      alt: "Programación para Roblox",
      modalidad: "Online",
      edad: "10 a 14 años",
      titulo: "Programación para Roblox",
      fecha: "13 de noviembre",
      hora: "Hrs. 8:00 a 9:30",
      enlace: "https://wa.link/kcgocp",
    },
    {
      imgSrc: "imagenes/cursos/curso2_.jpg",
      alt: "Programación de Videojuegos con Unity",
      modalidad: "Online",
      edad: "14 a 18 años",
      titulo: "Programación de Videojuegos con Unity",
      fecha: "15 de noviembre",
      hora: "Hrs. 8:00 a 9:30",
      enlace: "https://wa.link/0ynyf8",
    },
    {
      imgSrc: "imagenes/cursos/curso3_.jpg",
      alt: "Productividad con Notion y ChatGPT",
      modalidad: "Online",
      edad: "18+ años",
      titulo: "Domina la Productividad con Notion y ChatGPT",
      fecha: "19 de noviembre",
      hora: "Hrs. 20:00 a 21:30",
      enlace: "https://wa.link/8ac68w",
    },
    {
      imgSrc: "imagenes/cursos/curso4_.jpg",
      alt: "Criptomonedas",
      modalidad: "Online",
      edad: "18+ años",
      titulo: "Criptomonedas",
      fecha: "20 de noviembre",
      hora: "Hrs. 20:00 a 21:00",
      enlace: "https://wa.link/cc8oi4",
    },
  ];

  return (
    <section id="cursos" className="proximos-cursos">
      <div className="titulo-con-linea">
        <div className="linea-superior"></div>
        <h2>Próximos Cursos</h2>
      </div>
      <div className="cursos-contenedor">
        {cursos.map((curso, index) => (
          <Curso key={index} {...curso} />
        ))}
      </div>
    </section>
  );
};

export default ProximosCursos;
