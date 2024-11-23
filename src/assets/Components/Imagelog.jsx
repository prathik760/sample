import React, { useState } from 'react';
import './Imagelog.css';
import img2 from '../Components/1.jpg';
import img3 from '../Components/2.jpg';
import img4 from '../Components/3.jpg';
import img5 from '../Components/4.jpg';
import img6 from '../Components/5.jpg';
import img8 from '../Components/7.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const images = [
  { id: 1, category: 'artistic', src: img4 },
  { id: 2, category: 'artistic', src: img2 },
  { id: 3, category: 'photography', src: img3 },
  { id: 4, category: 'print', src: img4 },
  { id: 5, category: 'artistic', src: img5 },
  { id: 6, category: 'modern', src: img6 },
  { id: 7, category: 'photography', src: img5 },
  { id: 8, category: 'print', src: img8 },
];

const ImageGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null); // For modal image

  const filteredImages = filter === 'all'
    ? images
    : images.filter((image) => image.category === filter);

  return (
    <div className="gallery-container">
     
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('artistic')}>Artistic</button>
        <button onClick={() => setFilter('modern')}>Modern</button>
        <button onClick={() => setFilter('photography')}>Photography</button>
        <button onClick={() => setFilter('print')}>Print</button>
      </div>
 
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="image-item"
            style={{
              animation: 'fadeInFast 0.1s ease-out', 
            }}
          >
            <img src={image.src} alt={image.category} />
            
            <div
              className="search-overlay"
              onClick={() => setSelectedImage(image.src)} 
            >
              <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
            </div>
          </div>
        ))}
      </div>

       
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
