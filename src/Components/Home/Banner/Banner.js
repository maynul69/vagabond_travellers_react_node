import React from 'react';
import { Carousel } from "react-bootstrap";
const Banner = () => {
    return (
      <div>
        <Carousel className="carousel-container">
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100  "
              src="https://image.freepik.com/free-photo/couple-tourists-with-backpacks-mountain_1150-7520.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Find Your Perfect Adventure Here</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 img-fluid"
              src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Take a Break from Busy Life And Relax</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 img-fluid"
              src="https://image.freepik.com/free-photo/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer_1253-1041.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Make Great Memories With Friends and Loved ones</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;