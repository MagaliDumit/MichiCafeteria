import React from 'react';
import './Map.css'; // Importa el archivo de estilos si es necesario

function Map() {
  return (
    <section id="mapa">
      <h2>Ubicación de La Michicafetería</h2>
      <p><strong>Dirección:</strong> Arturo Jauretche 953, B1686FCA Gran Buenos Aires, Provincia de Buenos Aires</p>
      <p><strong>Teléfono:</strong> 011 4452-xxxx</p>
      <p><strong>Horario:</strong> Abre a las 9 a.m. Cierra a las 9:30 p.m.</p>
      <iframe
        src="https://maps.app.goo.gl/KhD22pzfwDTN6tek9"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </section>
  );
}

export default Map;