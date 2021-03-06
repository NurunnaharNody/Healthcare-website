import React from 'react';
import { Button, Card, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, Title , img, Description } = service;
    return (
        <div className="service-container">
<Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
    <Col>
      <Card className="card-style">
        <Card.Img variant="top" src={img} />
        <Card.Body className="service-card">
          <Card.Title className="service-title">{Title}</Card.Title>
          <Card.Text>
          {Description}
          </Card.Text>
          <Link to={`/details/${id}`}><Button className="button-service" variant="info">Go For {Title}</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default Service;