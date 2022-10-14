import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/images/slider-1.jpg'
import slide2 from '../assets/images/banner-bg.png'
import slide3 from '../assets/images/slider-1.jpg'
import '../Styles/Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={ slide1 }
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={ slide2 }
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ slide3 }
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner