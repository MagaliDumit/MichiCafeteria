import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import Gallery from './Gallery';
import MichiEvents from './MichiEvents';

const MainContent = () => {
  const [menuItems, setMenuItems] = useState([]); 
  const [selectedItems, setSelectedItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  
  const images = [
    '/imagen-0.jpg',
    '/imagen-1.jpg',
    '/imagen-2.jpg',
    '/imagen-3.jpg',
    '/imagen-4.png'
  ];

  useEffect(() => {
    const items = [
      { id: 1, name: 'Black Coffee', description: 'Granos de café tostados sometidos en agua caliente', price: 2500, type: 'coffee' },
      { id: 2, name: 'Latte', description: 'Café con leche', price: 3500, type: 'coffee' },
      { id: 3, name: 'Caramel Latte', description: 'Una bebida compuesta por 2/3 partes de leche y 1/3 de café, aromatizado con el sabroso caramelo.', price: 5500, type: 'coffee'  },
      { id: 4, name: 'Cappuccino', description: 'Preparada con café expreso y leche montada con vapor para darle cremosidad.', price: 4500 , type: 'coffee' },
      { id: 5, name: 'Americano', description: 'Un café que consiste en partes exactamente iguales de espresso y agua.', price: 3500 , type: 'coffee' },
      { id: 6, name: 'Espresso', description: 'Café negro fuerte que se forma cuando el agua caliente pasa a mucha presión través de los granos de café molidos.', price: 2500 , type: 'coffee' },
      { id: 7, name: 'Macchiato', description: 'En este café, la leche al vapor está "manchando" el shot de espresso.', price: 3050 , type: 'coffee' },
      { id: 8, name: 'Mocha', description: 'Es una variante del latte, pues suele llevar 1/3 de espresso y 2/3 de leche vaporizada, con la diferencia principal de que se le añade un sabor a chocolate.', price: 3500 , type: 'coffee' },
      { id: 9, name: 'Hot Chocolate', description: 'Una bebida tradicional a base de cacao con notas de chocolate y una deliciosa sensación.', price: 4500 , type: 'coffee' },
      { id: 10, name: 'Chai Latte', description: 'Mezcla específica de té negro y especias, con agua caliente y leche.', price: 5500 , type: 'coffee' },
      { id: 11, name: 'Matcha Latte', description: 'Consiste en polvo de matcha (hojas finamente molidas de algunas plantas de té verde), mezclado con agua y leche.', price: 5050 , type: 'coffee' },
      { id: 12, name: 'Seasonal Brew', description: 'Café de con diferentes sabores como caramelo, fruta y chocolate.', price: 5500 , type: 'coffee' },
      { id: 13, name: 'Svart Te', description: 'Es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco.', price: 4500 , type: 'coffee' },
      { id: 14, name: 'Islatte', description: 'Es un Latte frio con hielos.', price: 450 , type: 'coffee' },
      { id: 15, name: 'Islatte Mocha', description: 'Es un Mocha frio con hielos.', price: 450 , type: 'coffee' },
      { id: 16, name: 'Frapino Caramel', description: 'Lleva el rico sabor del caramelo y un toque de café, mezclado con hielo y cubierto con crema batida y un chorrito de caramelo.', price: 3500 , type: 'coffee' },
      { id: 17, name: 'Frapino Mocka', description: 'Deliciosa mezcla que combina café, leche y chocolate, batido con hielo, coronado con crema batida y salsa de mocha.', price: 3000 , type: 'coffee' },
      { id: 18, name: 'Apelsinjuice', description: 'Jugo de naranja recien exprimido.', price: 2500 , type: 'coffee' },
      { id: 19, name: 'Frozen Lemonade', description: 'Rodajas de limón licuadas, con azúcar, agua y jugo de limón con hielo.', price: 250 , type: 'coffee' },
      { id: 20, name: 'Lemonad', description: 'Limón exprimido con azucar y agua.', price: 250 , type: 'coffee' },
      
      //Delicias
      { id: 21, name: 'Cupcake de Gatito Negro', description: 'Irresistible cupcake decorado con detalles de gatito negro.', price: 2000, type: 'food', image: '/cupcake.png' },
      { id: 22, name: 'Michipancito del Gatito Detonao', description: 'Combinación perfecta entre suavidad y crujiente.', price: 2000, type: 'food', image: '/pancito.jpeg' },
      { id: 23, name: 'Galletitas de Gatito Calico', description: 'Encanto de nuestras galletitas de gatito Calico.', price: 2000, type: 'food', image: '/galletitas.jpeg' },
   
    
    ];
    setMenuItems(items);
  }, []);

  const handleSelectItem = (id, quantity) => {
    setSelectedItems({
      ...selectedItems,
      [id]: quantity
    });
  };

  const calculateTotal = () => {
    const total = Object.entries(selectedItems).reduce((acc, [id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      return acc + (item.price * quantity);
    }, 0);
    setTotalPrice(total);
  };

  return (
    <main>
      <section id="nosotros">
        <h2><strong>Sobre Nosotros</strong></h2>
        <p>
          La Michicafetería fue creada en 2024 como un lugar de encuentro para los amantes de los gatos y el buen café.
          Nuestro objetivo es proporcionar un ambiente acogedor donde puedas disfrutar de deliciosas bebidas y comidas
          en compañía de adorables gatos.
        </p>
        <p>
          Nuestra filosofía se centra en la felicidad y el bienestar de nuestros clientes y felinos. Cada mes, organizamos
          eventos temáticos votados por nuestros michi-clientes, creando una experiencia única y divertida para todos.
        </p>
        <p>
          La combinación perfecta entre suavidad y crocantes de nuestras delicias gracias a la colaboración de la Michi Panadería de nuestro travieso gatito detonao. 
        </p>
        
        <iframe width="500" height="700" src="https://youtube.com/shorts/lFOR-uqRG80?si=jH4VfUzWKfOLKkoQ" title="YouTube short player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </section>

      <section id="fotos">
        <h2><strong>Fotos Michitásticas</strong></h2>
        <div className="image-gallery">
          <div>
            <img src="/imagen-0.jpg" alt="La Michi Fachada" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <li>La Michi Fachada</li>
          </div>
          <div>
            <img src="/imagen-1.jpg" alt="Michinterior" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <li>Michinterior</li>
          </div>
          <div>
            <img src="/imagen-2.jpg" alt="Foto de Michi negro descansando" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <li>Foto de Michi negro descansando</li>
          </div>
          <div>
            <img src="/imagen-3.jpg" alt="La Michi Barista" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <li>La Michi Barista</li>
          </div>
          <div>
            <img src="/imagen-4.png" alt="Próximo diseño de La Michi Fachada, diseño ganador del concurso MichiArquitecto" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <li>Próximo diseño de La Michi Fachada, ganador del concurso MichiDiseño</li>
          </div>
        </div>
      </section>


      <section id="menu">
        <h2><strong>Menú de Cafés</strong></h2>
        <p>
          En la cafetería "La Michicafetería" puedes disfrutar de las siguientes opciones de café.
        </p>
        {menuItems.filter(item => item.type === 'coffee').map(item => (
          <MenuItem key={item.id} item={item} onSelect={handleSelectItem} />
        ))}

        <h2><strong>Menú de Delicias</strong></h2>
        <p>
          ¡Espero que disfrutes de estas deliciosas opciones con temática felina en "La Michicafetería"!
        </p>
        {menuItems.filter(item => item.type === 'food').map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
            <div>
              <button onClick={() => handleSelectItem(item.id, (selectedItems[item.id] || 0) - 1)}>-</button>
              <span>{selectedItems[item.id] || 0}</span>
              <button onClick={() => handleSelectItem(item.id, (selectedItems[item.id] || 0) + 1)}>+</button>
            </div>
          </div>
        ))}

        <div>
          <button onClick={calculateTotal}>Calcular Precio Total</button>
        </div>
        <p><strong>Precio Total:</strong> ${totalPrice.toFixed(2)}</p>
      </section>

      <section id="gallery">
        <h2><strong>Galería</strong> </h2>
        <Gallery/>
      </section>

      <section id="evento">
        <h2><strong>Michi Eventos</strong> </h2>
        <MichiEvents/>
      </section>


      <section id="mapa">
      <h2>Ubicación de la MichiCafetería</h2>
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

    </main>
  );
};

export default MainContent;
