import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Detail = ({service}) => {
    const {img, Title, Description} = service;
    return (
        <div>
            <div className="service-container">
<Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
    <Col>
      <Card className="card-style">
        <Card.Img variant="top" src={img} />
        <Card.Body className="service-card">
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
          {Description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
        </div>
    );
};

export default Detail;