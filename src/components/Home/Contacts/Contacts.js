import React from 'react';
import { Button , Card} from 'react-bootstrap';
import './Contacts.css'

const Contacts= () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <Card className="text-center">
  <Card.Header className="contact-header">Our Doctors</Card.Header>
  <Card.Body>
    <Card.Title className="contact-title">We have expert doctors.</Card.Title>
    <Card.Text className="contact-text">
    Search for a Care Medico expert by specialty, disease, conditione, expertise, or doctor’s last name.
    </Card.Text>
    <Button className="contact-button" variant="">Find Our Doctor</Button>
  </Card.Body>
</Card>
<br />
<br />
<Card className="text-center">
  <Card.Header className="contact-header">Location</Card.Header>
  <Card.Body>
    <Card.Title className="contact-title">Check our location</Card.Title>
    <Card.Text className="contact-text">
    Care Medico located right in your neighborhood. Get directions and information for our campuses.
    </Card.Text>
    <Button className="contact-button" variant="">Find Location</Button>
  </Card.Body>
</Card>
<br />
<br />
<Card className="text-center">
  <Card.Header className="contact-header">Appointments</Card.Header>
  <Card.Body>
    <Card.Title className="contact-title">Book your Appoinments.</Card.Title>
    <Card.Text className="contact-text">
    Thank you for using the online request form for an appointment at Medical Center outpatient clinics
    </Card.Text>
    <Button className="contact-button" variant="">Go for Appoinments</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Contacts;