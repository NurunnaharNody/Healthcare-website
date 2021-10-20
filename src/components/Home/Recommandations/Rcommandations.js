import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Recommandations.css'

const Recommandations = () => {
    return (
        <div id="recommandations" className="recommand-container" >
            <div className="doctor-talk">
            <h2>A Good Word Means A Lot</h2>
            <h1> Pateint <span>Testimonials</span> </h1>
            <h4>It’s always the word of mouth that’s the best advice. Here are some of our…</h4>
           </div>
           <div>
          <div className="recommand-person">
           <div className="recommand-image">
           <img src="https://i.ibb.co/BTD8JcJ/Untitled-design-47.png" alt="" />
           </div>
            <div className="recommand-detail">
              <p className="contact-title">Some up and coming trends are healthcare consolidation for independent healthcare centers that 
                see a cut in unforeseen payouts.</p>
              <h2>CHASE FRANKLIN</h2>
              <h5>CEO, CARE MEDICO</h5>
            </div>
          </div>

     <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/NNbHm3x/Untitled-design-43.png" />
    <Card.Body className="card-back">
      <Card.Text className="">
      Professionals in their work, the surgery went well 
      and I was able to go on with my life within just a few weeks.Recommended!
      </Card.Text>
      <Card.Text>LARAINE FLEMMING</Card.Text>
      <small className="text-muted">CBR</small>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/fn6HmrB/Untitled-design-44.png" />
    <Card.Body className="card-back">
      <Card.Text>
      I am deeply grateful to Dr. Chase for his expertise and care.
       He practices both the science and the art of cardiac surgery.
      </Card.Text>
      <Card.Text>HERBIE HAYNES</Card.Text>
      <small className="text-muted">Valve Prolapse Repair</small>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/2WcFKG1/Untitled-design-45.png" />
    <Card.Body className="card-back">
      <Card.Text>
      I felt like 102 before, now I feel like 52, thanks to Dr. 
      Chase and his team. Their expertise is second to none!
      </Card.Text>
      <Card.Text>WILLIAM SMITH</Card.Text>
      <small className="text-muted">TMR</small>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/vZspcND/Untitled-design-46.png" />
    <Card.Body className="card-back">
      <Card.Text>
      They gave me much more than health – they gave me my life back. 
      One that I can still enjoy with my family and grandchildren.
      </Card.Text>
      <Card.Text>ELLEN NORTON</Card.Text>
      <small className="text-muted">Pacemaker implantation</small>
    </Card.Body>
    
  </Card>
  </CardGroup>
           </div>

        </div>
    );
};

export default Recommandations;