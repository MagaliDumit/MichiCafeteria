import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => console.error('Error fetching gallery data:', error));
  }, []);

  const getVideoUrl = (title) => {
    const videoUrls = {
      
      'Black Coffee': 'https://www.youtube.com/watch?v=SqyjR5pC27U',
      'Latte': 'https://www.youtube.com/shorts/lYF1FliEYxU',
      'Caramel Latte': 'https://youtube.com/shorts/ZzXdmzTgMWo?si=ugeXY2ZESG5OPmA1',
      'Cappuccino': 'https://youtube.com/shorts/-dt5Jv1VV_I?si=xVfsO4UDS9ODo4fs',
      'Americano': 'https://youtube.com/shorts/iqM5lysEFtE?si=GFovuxvguYsNlaQ2',
      'Espresso': 'https://www.youtube.com/shorts/S_ZzVIKc0K0',
      'Macchiato': 'https://www.youtube.com/shorts/exp7-HCP-sU',
      'Mocha': 'https://www.youtube.com/watch?v=DiIC4Hw57Zg',
      'Hot Chocolate': 'https://www.youtube.com/watch?v=l9CFKzKA5tw',
      'Chai Latte': 'https://www.youtube.com/watch?v=U1lVBFbLK_o',
      'Matcha Latte': 'https://www.youtube.com/watch?v=ymAxv6iMTQk',
      'Seasonal Brew': 'https://www.youtube.com/watch?v=BaXxzlfSezI',
      'Svart Te': 'https://www.youtube.com/watch?v=wiChZjg95zg',
      'Islatte': 'https://www.youtube.com/watch?v=6aoa49p6jHs',
      'Islatte Mocha': 'https://www.youtube.com/watch?v=Ghe6BL7mFUQ',
      'Frapino Caramel': 'https://www.youtube.com/watch?v=1RGaYZrHq98',
      'Frapino Mocka': 'https://www.youtube.com/watch?v=mV1daheC8X4',
      'Apelsinjuice': 'https://www.youtube.com/shorts/x3zmI1hcsrw',
      'Frozen Lemonade': 'https://www.youtube.com/shorts/kDue18WW3M0',
      'Lemonad': 'https://www.youtube.com/shorts/aMdLBocJCQQ',

      //Delicias
      'Cupcake de Gatito Negro':'https://youtu.be/yf7lUgrwGR0?si=xY6-gqHKD88tEFmB',
      'Michipancito del Gatito Detonao':'https://youtube.com/shorts/lFOR-uqRG80?si=jH4VfUzWKfOLKkoQ' ,
       'Galletitas de Gatito Calico':'https://luciapaula.com/wp-content/uploads/2022/08/InShot_20220807_184457006.mp4?_=2', 
      
    };
    return videoUrls[title] || 'https://www.youtube.com';
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <h3>{image.title}</h3>
          <a href={getVideoUrl(image.title)} target="_blank" rel="noopener noreferrer">
            <img src={image.image} alt={image.title} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
