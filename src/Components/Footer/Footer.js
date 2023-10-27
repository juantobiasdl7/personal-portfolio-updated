import { Container, Row, Col } from "react-bootstrap";
import { Braces} from 'react-bootstrap-icons';
import navIcon1 from "../../Assets/Images/nav-icon1.svg";

export const Footer = () => {
    return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col className="d-inline-flex">
                <div className="social-icon">
                        <a href="https://www.linkedin.com/in/tob%C3%ADas/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
                </div>
                <div className="pt-2 ms-2">Copyright © 2022, Tobías De La Cruz.</div>
                </Col>
            </Row>
        </Container>
    </footer>
    )
    }
