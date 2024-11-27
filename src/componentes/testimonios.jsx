import React, { useState, useEffect } from "react";
import "../css/testimonios.css";

const Testimonios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  const testimoniosData = [
    {
      name: "Claudia Chipana",
      image: "/imagenes/Clientes/client-01.png",
      text: "Agradezco el apoyo que dan a nuestros niños, ya que desde muy pequeños los van formando para ser unas personas muy preparadas. Gracias a todos los que forman el equipo de Elemental.",
    },
    {
      name: "Nataly Lopez",
      image: "/imagenes/Clientes/client-02.png",
      text: "Mi hija de 10 años disfruta sus clases de robótica, videojuegos, desde el inicio de 0 y su forma de ver la tecnología es diferente. Ahora creando su videojuego y su robot perrito. Gracias es el mejor equipo de Bolivia.",
    },
    {
      name: "Olga Murguia",
      image: "/imagenes/Clientes/client_06.jpg",
      text: "Los talleres de vacaciones les encantaron a mis hijos, no sólo se divirtieron sino que aprendieron. Muchas felicidades al equipo de Elemental, espero que sigan con el mismo entusiasmo por mucho tiempo.",
    },
    {
      name: "Armando Picón",
      image: "/imagenes/Clientes/client-03.png",
      text: "El mejor lugar en Bolivia para que los chicos y jóvenes puedan aprender sobre programación y robótica. La tecnología al alcance de todos!",
    },
    {
      name: "Rocio CN",
      image: "/imagenes/Clientes/client_05.jpg",
      text: "Quiero felicitar y agradecer a todos los que conforman Elemental, por la dedicación, el apoyo individual que le dan a cada estudiante.",
    },
    {
      name: "Braham Castillo ",
      image: "/imagenes/Clientes/client_04.png",
      text: "Sigan incentivando el uso de la tecnología en nuestros niños! Felicidades!!”",
    },
  ];

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      setVisibleSlides(3);
    } else if (window.innerWidth >= 768) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(1);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    const autoSlide = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimoniosData.length / visibleSlides));
    }, 5000);

    return () => {
      clearInterval(autoSlide);
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, [visibleSlides, testimoniosData.length]);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    const currentX = e.clientX || e.touches[0].clientX;
    setDragDelta(currentX - dragStartX);
  };

  const handleDragEnd = () => {
    if (dragDelta > 50 && activeIndex > 0) {
      // Deslizar hacia la izquierda
      setActiveIndex(activeIndex - 1);
    } else if (dragDelta < -50 && activeIndex < Math.ceil(testimoniosData.length / visibleSlides) - 1) {
      // Deslizar hacia la derecha
      setActiveIndex(activeIndex + 1);
    }
    setDragDelta(0);
  };

  return (
    <section id="testimonios" className="testimonios">
      <h2>Testimonios</h2>
      <div
        className="carrusel-contenedor"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="carrusel"
          style={{
            transform: `translateX(-${activeIndex * (100 / Math.ceil(testimoniosData.length / visibleSlides))}%)`,
            width: `${(100 / visibleSlides) * testimoniosData.length}%`,
          }}
        >
          {testimoniosData.map((testimonio, index) => (
            <div
              className="testimonio"
              key={index}
              style={{
                flex: `0 0 ${100 / visibleSlides}%`,
              }}
            >
              <div className="testimonio-header">
                <img src={testimonio.image} alt={testimonio.name} />
                <h3>{testimonio.name}</h3>
              </div>
              <div className="testimonio-body">
                <p>{testimonio.text}</p>
                <div className="testimonio-estrellas">
                <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i> {/* Estrella vacía */}
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="puntos-navegacion">
          {Array.from(
            { length: Math.ceil(testimoniosData.length / visibleSlides) },
            (_, i) => (
              <span
                key={i}
                className={`punto ${activeIndex === i ? "activo" : ""}`}
                onClick={() => setActiveIndex(i)}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
