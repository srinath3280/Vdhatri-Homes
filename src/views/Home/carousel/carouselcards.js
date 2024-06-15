import React, { useEffect, useState } from 'react';
import "./carouselcards.css";

const CarouselCards = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    // Set up the autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carouselcard">
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carouselcard-cards">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='carouselcard-blocks'
                        // className={`carousel-content ${item.status} ${index !== currentIndex ? 'active' : ''}`}
                        style={{ display: index === currentIndex ? 'flex' : 'none' }}
                    >
                        <img src={item.image} alt={item.projectname} className="carouselcard-images" />
                        <div className="carouselcard-details">
                            <h4>{item.projectname}</h4>
                            <p>{item.category}</p>
                            <p>{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default CarouselCards
