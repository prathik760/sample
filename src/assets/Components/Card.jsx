import React from 'react';
import './Card.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../Components/img1.jpg'
import img2 from '../Components/l2.jpg'
import img3 from '../Components/l3.jpg'
 
const Card = () => {
  const cards = [
    {
      title: 'WEDDING LIST',
      description: 'Lorem ipsum dolor sit amet. Rem repellat expedita ea optio doloribus vel tempora nemo non similique neque. Eum nobis nihil ut eaque autem et beatae blanditiis. Ex explicabo odit aut laudantium dolore qui recusandae suscipit.',
      category: 'Design',
      date: 'March 24, 2016',
      image:  img1,  
    },
    {
      title: 'SOMETHING SPCIAL',
      description: 'Lorem ipsum dolor sit amet. Rem repellat expedita ea optio doloribus vel tempora nemo non similique neque. Eum nobis nihil ut eaque autem et beatae blanditiis. Ex explicabo odit aut laudantium dolore qui recusandae suscipit.',
      category: 'Planning',
      date: 'April 24, 2016',
      image: img2,  
    },
    {
      title: 'CHOOSE YOUR STYLE',
      description: 'Lorem ipsum dolor sit amet. Rem repellat expedita ea optio doloribus vel tempora nemo non similique neque. Eum nobis nihil ut eaque autem et beatae blanditiis. Ex explicabo odit aut laudantium dolore qui recusandae suscipit.',
      category: 'Fashion',
      date: 'January 24, 2016',
      image: img3, 
    },
    {
        title: 'Connect Your Worlds',
        description: 'Lorem ipsum dolor sit amet. Rem repellat expedita ea optio doloribus vel tempora nemo non similique neque. Eum nobis nihil ut eaque autem et beatae blanditiis. Ex explicabo odit aut laudantium dolore qui recusandae suscipit.',
        category: 'Fashion',
        date: 'January 24, 2016',
        image: img3,  
      },


      {
        title: 'Connect Your Worlds',
        description: 'Lorem ipsum dolor sit amet. Rem repellat expedita ea optio doloribus vel tempora nemo non similique neque. Eum nobis nihil ut eaque autem et beatae blanditiis. Ex explicabo odit aut laudantium dolore qui recusandae suscipit.',
        category: 'Fashion',
        date: 'January 24, 2016',
        image: img1,  
      },
    
  ];

  return (
    <div className='main'> 
     <div className='boxc'>
     <h1 className='cardh1'>We're Sharing Everything</h1>
     <p className='cardp'>Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel velit auctor aliquet aenean sollicitudin lorem.</p>
     </div>
    <div >
      
      <Swiper
        
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}  
        slidesPerView={1} 
        breakpoints={{
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
        }}
        style={{ paddingBottom: '40px' }} 
      >
        {cards.map((card, index) => (
             
          <SwiperSlide key={index}>
            <div style={styles.card}>
              <div style={styles.cardImage}>
                <img src={card.image} alt={card.title} style={styles.image} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDescription}>{card.description}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.cardCategory}>{card.category}</span>
                  <span style={styles.cardDate}>{card.date}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};
 
const styles = {
  appContainer: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
  },
  cardContainer: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
     
  },
  card: {
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease',
    padding : '10px',
     
  },
  cardImage: {
    width: '100%',
     
  },
  image: {
    width: '100%',
    height: '550px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '18px',
    margin: '10px 0',
    color: '#333',
    
  },
  cardDescription: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '15px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#999',
  },
  cardCategory: {
    fontWeight: 'bold',
  },
  cardDate: {
    fontStyle: 'italic',
  },
};

export default Card;
