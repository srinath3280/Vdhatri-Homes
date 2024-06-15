import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
    '/images/homecarousel1.webp',
    '/images/homecarousel2.webp',
    '/images/homecarousel3.jpg'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Use useEffect to set up an interval for automatic sliding
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]); // Re-run effect when currentIndex changes

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10094;
            </button>
        </div>
    );
};

export default Carousel;
