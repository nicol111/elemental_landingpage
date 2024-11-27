import React from 'react';
import '../css/banner.css';  

const Banner = () => {
    return (
        <section className="banner" id="inicio">
            <div className="banner-content">
                <h1>
                    Empoderando 
                    <span className="highlight"> a la próxima generación de </span> 
                    líderes digitales
                </h1>
                <p>Divertidos e innovadores Cursos en Tecnología que desarrollan las habilidades digitales del siglo XXI.</p>
            </div>
            <div className="banner-image">
                <img src="imagenes/Banner/niño.png" alt="Niño aprendiendo tecnología" />
            </div>
        </section>
    );
}

export default Banner;
