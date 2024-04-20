import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Assuming you will create a separate CSS file for styling

const images = [
    '../dark city.jpg',  // Replace these with the URLs of your actual images
    '../disney world.jpg',
    '../ny 4k wallpaper.jpg',
    '../rain in ny.jpg'
];

function InfiniteCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-[110rem] px-[25rem]">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfiniteCarousel;
