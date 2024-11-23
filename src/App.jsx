import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./App.css";
import logo from './assets/slider.png';
import homeimg from './assets/Components/homeimg.jpg'
import slider from './assets/Components/car1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      
      <header className="navbar">
        
        <div className="logo">
          <img src={logo} alt="Fleur Logo" />
        </div>

         
        <nav className="nav-links">
          <div className="nav-item">
            <a href="#home">Home</a>
            <div className="dropdown">
              <div className="dropdown-column">
                <h4>Business</h4>
                <a href="#main-home">Main Home</a>
                <a href="#wedding-planner">Wedding Planner</a>
                <a href="#venue-home">Venue Home</a>
                <a href="#florist">Florist Showcase</a>
              </div>
              <div className="dropdown-column">
                <h4>Bridal</h4>
                <a href="#bridal-store">Bridal Store</a>
                <a href="#jewelry-shop">Jewelry Shop</a>
                <a href="#atelier-home">Atelier Home</a>
              </div>
              <div className="dropdown-column">
                <h4>Personal</h4>
                <a href="#wedding-announcement">Wedding Announcement</a>
                <a href="#blog-home">Blog Home</a>
              </div>
              <div className="dropdown-column">
                <h4>Photography</h4>
                <a href="#photography-carousel">Photography Carousel</a>
                <a href="#portfolio">Photography Portfolio</a>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a href="#portfolio">Portfolio</a>
            <div className="dropdown">
               
              <div className="dropdown-column">
                <h4>Standard</h4>
                <a href="#main-home">Three Column</a>
                <a href="#wedding-planner">Three Column Wide</a>
                <a href="#venue-home">Four Column</a>
                <a href="#florist">Four Column Wide</a>
                <a href="#florist">Five Column Wide</a>
              </div>
              <div className="dropdown-column">
                <h4>Gallary</h4>
                <a href="#bridal-store">Three Column</a>
                <a href="#jewelry-shop">Three Column Wide</a>
                <a href="#atelier-home">Four Column</a>
                <a href="#florist">Four Column Wide</a>
                <a href="#florist">Five Column Wide</a>
              </div>
              <div className="dropdown-column">
                <h4>Masonry & Carousel</h4>
                <a href="#wedding-announcement">Masonry with space Grid</a>
                <a href="#wedding-announcement">Masonry with space Wide</a>
                <a href="#wedding-announcement">Masonry with no space Grid</a>
                <a href="#wedding-announcement">Masonry with no space Wide</a>
                <a href="#blog-home">Blog Home</a>
              </div>
              <div className="dropdown-column">
                <h4>Portfolio Single</h4>
                <a href="#photography-carousel">Masonry</a>
                <a href="#portfolio">Small images</a>
                <a href="#wedding-announcement">Small Slider</a>
                <a href="#wedding-announcement">Big images</a>
                <a href="#wedding-announcement">Big Slider</a>
                <a href="#wedding-announcement">Gallery</a>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a href="#blog">Blog</a>
            <div className="dropdown">
              <div className="dropdown-column">
                <a href="#main-home">Standard Left Sidebar</a>
                <a href="#wedding-planner">Standard Right Sidebar</a>
                <a href="#venue-home">Standard Without Sidebar</a>
                <a href="#florist">Masonry</a>
                <a href="#florist">Carousel</a>
                <a href="#florist">Post Types</a>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a href="#shop">Shop</a>
            <div className="dropdown">
              <div className="dropdown-column">
                <a href="#main-home">Bridal Store</a>
                <a href="#wedding-planner">Shop Home</a>
                <a href="#venue-home">Shop List</a>
                <a href="#florist">Product Single</a>
                <a href="#florist">Shop Pages</a>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a href="#elements">Elements</a>
            <div className="dropdown">
              <div className="dropdown-column">
                <h4>Business</h4>
                <a href="#main-home">Main Home</a>
                <a href="#wedding-planner">Wedding Planner</a>
                <a href="#venue-home">Venue Home</a>
                <a href="#florist">Florist Showcase</a>
              </div>
              <div className="dropdown-column">
                <h4>Bridal</h4>
                <a href="#bridal-store">Bridal Store</a>
                <a href="#jewelry-shop">Jewelry Shop</a>
                <a href="#atelier-home">Atelier Home</a>
              </div>
               
              <div className="dropdown-column">
                <h4>Photography</h4>
                <a href="#photography-carousel">Photography Carousel</a>
                <a href="#portfolio">Photography Portfolio</a>
              </div>
            </div>
          </div>
        </nav>

   
        <div className="nav-icons">
          <span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
          <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
        </div>
      </header>
 
 
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={500}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${homeimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-content">
              <h1 className="sh1">Style & Grace</h1>
              <p className="sp">Make your beautiful website with Fleur</p>
              <button className="purchase-button">Purchase</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${slider})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-content">
              <h1 className="sh1">Elegant Design</h1>
              <p className="sp">Create seamless user experiences with Fleur</p>
              <button className="purchase-button">Explore</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
