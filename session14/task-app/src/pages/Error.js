import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Error() {
  return (
        <Container fluid className='p-5 shadow rounded w-50 mt-5'>
            <h1 className='text-center mb-4 fw-bold display-4'>Oops!</h1>
            <p className='text-center'>The page you are trying to access cannot be found</p>
            <Container className='d-flex justify-content-center'>
                <Button className="px-5 rounded-pill my-5" as={Link} to="/login">Login</Button>
            </Container>
        </Container>
  )
}
