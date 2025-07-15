import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Task() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (!user) {
            navigate("/login");
        } else {
            document.title = `${user.fname.toUpperCase()} ${user.lname.toUpperCase()} | Tasks`;
        }

    }, [user, navigate]);

    return (
        <Container fluid className='m-1 m-lg-5 border rounded-4 p-1 p-lg-4 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='my-3 display-3 fw-bold text-primary'>Welcome to Task Page!</h1>
            <p className='lead'>This is where you can manage your tasks.</p>
        </Container>
    )
}
