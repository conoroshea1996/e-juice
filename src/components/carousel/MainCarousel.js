import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../../media/Logo.png';

function MainCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex);
        setIndex(selectedIndex);
        console.log(e.direction);
        setDirection(e.direction);
    };
    const slides = [
        {
            image: Image,
            label: 'Slide One'
        },
        {
            image: Image,
            label: 'Slide Two'
        },
        {
            image: Image,
            label: 'Slide Three'
        },
    ]

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {slides.map(slide => {
                return (
                    <Carousel.Item style={{ height: '500px' }}>
                        <img
                            className="d-block w-100 h-100"
                            src={slide.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: 'black' }} >{slide.label}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default MainCarousel;