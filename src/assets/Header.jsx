import React, { useEffect, useState } from 'react';

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img src="/logo.jpg" alt="Logo de La MichiCafetería" className="logo" />
      </div>
      <div className="nombre">
        <h1>MichiCafetería</h1>
      </div>
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#fotos">Fotos</a></li>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#evento">Eventos</a></li>
          <li><a href="#mapa">Ubicación</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
