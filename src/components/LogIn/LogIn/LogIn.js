import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './LogIn.css'

const LogIn = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    return (
        <div className="p-5 form">
            <br/>
            <br/>
            <h2>Please Login</h2>
            <br/>
            <Form onSubmit="">
           <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
               <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                  </Button>
            </Form>
             <br/>   
             <p>
                 Are you new here? <Link to="/register">Create Account</Link>
                  </p>        
                  <div>--------OR--------</div>
                  <br />
            <button onClick={signInUsingGoogle} className="btn m-2 btn-primary">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-primary">Github Sign In</button>

        </div>
    );
};

export default LogIn;