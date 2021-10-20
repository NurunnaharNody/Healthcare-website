import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';


const Details = () => {
    let {serviceId} = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
          fetch('/services.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    useEffect(() => {
       const singleService = services?.find(service => service.id === +serviceId)
       setSingleService(singleService)
    }, [services]);

    return(
        <div> 
             <br />
             <br />
             <br />
             <div className="doctor-talk">
             <h2>WELCOME TO OUR HOSPITAL</h2>
             <h1> The Care Medico of Better Care </h1>
             <h4>It’s always the word of mouth that’s the best advice. Need to contact with us..
                 <br />
                 Go for contact.
             </h4>
            </div>
             <div className="service-container">
<Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
    <Col>
      <Card className="card-style">
        <Card.Img variant="top" src={singleService?.img} />
        <Card.Body className="service-card">
          <Card.Title>{singleService?.Title}</Card.Title>
          <Card.Text>
          {singleService?.Description}
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

export default Details;