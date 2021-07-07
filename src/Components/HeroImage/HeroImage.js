import React from 'react'
import Img1 from '../../Images/heroImages.jpg';
import Img2 from '../../Images/heroImage2.jpg';
import {Carousel} from 'react-bootstrap'
import './HeroImage.css';

const HeroImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img2}
                    alt="First slide"
                />

            </Carousel.Item>

        </Carousel>
    )
}

export default HeroImage
