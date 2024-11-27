import React, { useEffect, useState } from 'react';
import '../css/header.css';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="logo">
      <img src="imagenes/logos/Logo-Elemental.png" alt="Elemental Logo" width="180" height="60" />
      </div>
      <nav>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#elemental">Elemental</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} id="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
