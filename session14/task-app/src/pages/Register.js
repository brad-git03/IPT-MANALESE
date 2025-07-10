import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'


export default function Register() {
    return (
        <Container fluid className='d-flex justify-content-center p-5 shadow rounded w-50 mt-5'>
            <Container className='w-75 mt-3 align-items-center d-flex justify-content-center'>
                <img src="https://web.ua.edu.ph/wp-content/uploads/2024/09/ua-logo.png" alt="Register Icon" className='img-fluid' />
            </Container>        
            <Container className='w-75'>
                <h2 className='text-center mb-4 fw-bold display-4'>Register</h2>
                <p className='text-center'>Please fill in the form below to create an account</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">First Name</Form.Label>
                        <Form.Control type="first_name" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Last Name</Form.Label>
                        <Form.Control type="last_name" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>   

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I Agree of the terms" />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </Container>
        </Container>
    )

}
