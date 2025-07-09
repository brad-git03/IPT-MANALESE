import { Container, Button, Card } from "react-bootstrap";

export default function Product() {
    return (
        <Container fluid className="vh-100 bg-light p-3">
            <h1 className="display-4 fw-bold text-center">Product Page</h1>
                {/* PRODUCT 1 */}
            <Container className="d-flex justify-content-around flex-wrap gap-3 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>School Uniform</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Buy now!</Button>
                    </Card.Body>
                </Card>
                {/* PRODUCT 2 */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>P.E Uniform</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Buy now!</Button>
                    </Card.Body>
                </Card>
                {/* PRODUCT 3 */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Department Shirt</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Buy now!</Button>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
}