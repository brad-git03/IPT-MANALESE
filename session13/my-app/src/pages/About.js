import { Container } from "react-bootstrap"

export default function About() {
    return (
        <Container fluid className="vh-100 bg-primary p-3 text-center">
            <h1 className="display-4 fw-bold text-center text-light">About</h1>

            <h2 className="text-light">About UA Online Shop</h2>
            <p className="text-light">Welcome to UA Online Shop, your trusted partner in academic excellence and school readiness. We are a specialized online retailer dedicated to providing students, parents, and educational institutions with high-quality school supplies and essentials.</p>
            <h2 className="text-light">Our Mission</h2>
            <p className="text-light">At UA Online Shop, we believe that every student deserves access to the right tools and materials to succeed in their educational journey. Our mission is to make school shopping convenient, affordable, and stress-free by offering a comprehensive selection of academic essentials all in one place.</p>
            <h2 className="text-light">What We Offer</h2>
            <h3 className="text-light">School Uniforms & Apparel</h3>
            <p className="text-light">We provide a wide range of school uniforms and apparel, ensuring that students look their best while adhering to school dress codes.</p>
            <h3 className="text-light">Stationery & Supplies</h3>
            <p className="text-light">From notebooks and pens to backpacks and calculators, we offer a diverse selection of stationery and school supplies to meet the needs of students at all levels.</p>
            <h3 className="text-light">Educational Resources</h3>
            <p className="text-light">We understand the importance of educational resources, which is why we provide textbooks, reference materials, and study aids to support students in their academic pursuits.</p>
        </Container>
    );
}
