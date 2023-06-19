import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import React from "react";

export const Bootstrap = () => {
  return (
    <div>
      {/* <p>first</p> */}

      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            className="d-block w-100"
            src="images/3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            className="d-block w-100"
            src="images/1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "550px" }}
            className="d-block w-100"
            src="images/2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
