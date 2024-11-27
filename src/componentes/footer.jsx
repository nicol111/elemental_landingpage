import React from 'react';
import '../css/footer.css'; 

const Footer = () => {
    return (
        <section id="contacto" className="footer">
            <div className="container">
                <div className="column">
                    <img
                        src="/imagenes/logos/logo-blanco.png"
                        alt="Logo Elemental"
                        className="footer-logo"
                    />
                    <p className="textop">
                        Elemental nace con el objetivo de acelerar la inclusión digital de niños y jóvenes desarrollando competencias digitales del Siglo XXI.
                    </p>
                </div>

                <div className="column">
                    <h5>Síguenos en:</h5>
                    <a href="https://www.facebook.com/ElementalBoTec" target="_blank" rel="noreferrer noopener" className="social-link">
                        <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="https://www.youtube.com/@ElementalBolivia" target="_blank" rel="noreferrer noopener" className="social-link">
                        <i className="bi bi-youtube"></i> YouTube
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="social-link">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer noopener" className="social-link">
                        <i className="bi bi-tiktok"></i> TikTok
                    </a>
                </div>

                <div className="column">
                    <h5>Contáctanos:</h5>
                    <a href="https://maps.app.goo.gl/uqNaownUv96QhaiP8" target="_blank" rel="noreferrer noopener" className="contact-link">
                        <i className="bi bi-geo-alt"></i> Av. 6 de Agosto entre Pedro Salazar y Pinilla 2570
                    </a>
                    <a href="https://wa.link/ehmnz8" className="contact-link">
                        <i className="bi bi-telephone"></i> +591 71537266
                    </a>
                    <a href="https://wa.link/zb91mw" className="contact-link">
                        <i className="bi bi-telephone"></i> +591 72254077
                    </a>
                    <a href="mailto:info@elementalschool.com" className="contact-link">
                        <i className="bi bi-envelope"></i> info@elementalschool.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
