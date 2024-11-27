import React from 'react';
import '../css/Elemental.css'; 

const Elemental = () => {
    return (
        <section id="elemental" className="elemental">
            <div className="container">
            <div className="background-figuras">
                <img src="imagenes/diseños/forma-de-semicirculo.png" alt="Figura decorativa 1" className="figura figura1" />
                <img src="imagenes/diseños/patron_1.png" alt="Figura decorativa 2" className="figura figura2" />
                
            </div>

                <div className="icons">
                    <div className="icon-box">
                        <div className="icon">
                            <img src="imagenes/iconos/alumno.png" alt="Estudiantes" />
                        </div>
                        <p className="number">+45,000</p>
                        <p className="text">Estudiantes</p>
                    </div>
                    <div className="icon-box">
                        <div className="icon">
                            <img src="imagenes/iconos/compania.png" alt="Clientes Corporativos" />
                        </div>
                        <p className="number">+20</p>
                        <p className="text">Clientes Corporativos</p>
                    </div>
                    <div className="icon-box">
                        <div className="icon">
                            <img src="imagenes/iconos/estudiar.png" alt="Programas Educativos" />
                        </div>
                        <p className="number">+50</p>
                        <p className="text">Programas Educativos</p>
                    </div>
                    <div className="icon-box">
                        <div className="icon">
                            <img src="imagenes/iconos/medalla-de-oro.png" alt="Medallas Olímpicas" />
                        </div>
                        <p className="number">+100</p>
                        <p className="text">Medallas Olímpicas</p>
                    </div>
                </div>

                <div className="description">
                    <h2>Somos un equipo apasionado por la educación digital</h2>
                    <p>
                        En Elemental somos especialistas con más de 8 años de experiencia en el diseño e implementación de Programas Educativos para niños, adolescentes, jóvenes, maestros, padres y prácticamente cualquiera que quiera sumergirse en el mundo de la tecnología.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Elemental;
