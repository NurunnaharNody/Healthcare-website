import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="p-5 form">
            <br />
            <br />
            <h2>Create Account</h2>
            <br />
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" /> <br />
    <Form.Label>Re-Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Re-enter Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br />
<br />
<p> Already Have an account? <Link to="/login">Log In</Link>  </p>
 <div>-------OR------</div>
 <br />
 <button className="btn-primary">Google-Sign-In</button>
        </div>
    );
};

export default Register;