import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
      <div className="container my-5 ">
        <div className="title">
          <h1>Why Travel with Vagabond?</h1>
        </div>

        <CardGroup style={{ 
            boxShadow: '1px 1px 10px grey',
            borderRadius:'12px',
            marginTop:'10px'
            }}>
          <Card>
            <Card.Img
              variant="top"
              src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-1.jpg"
            />
            <Card.Body>
              <Card.Title>2000+ Our Worldwide Guide</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-2.jpg"
            />
            <Card.Body>
              <Card.Title>100% Trusted Agency</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-3.jpg"
            />
            <Card.Body>
              <Card.Title>12+ Years of Travel Experience</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-4.jpg"
            />
            <Card.Body>
              <Card.Title>98% Positive Customer Review</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
};

export default WhyUs;