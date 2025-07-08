import { Container, Row, Col } from "react-bootstrap";

export default function Feature() {
    return (
        <Container className="p-3 rounded-3 my-2 bg-light">
            <Row className="gap-3 p-3">
                <Col className="border border-primary text-center text-black p-3 rounded-5 shadow">
                    <h1 className="fw-bold">Free Shipping!</h1>
                    <p>We offer free shipping all across Pampanga.</p>
                </Col>
                <Col className="border border-primary text-center text-black p-3 rounded-5 shadow">
                    <h1 className="fw-bold">50% Discount</h1>
                    <p>50% Can be available in our shop</p>
                </Col>
                <Col className="border border-primary text-center text-black p-3 rounded-5 shadow">
                    <h1 className="fw-bold">Voucher Program</h1>
                    <p>More surprises through our official Voucher Program</p>
                </Col>
            </Row>
        </Container>

    );     
}