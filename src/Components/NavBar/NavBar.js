import {Container, Nav, Navbar} from 'react-bootstrap';
import { Braces, MenuButtonWide } from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';


function NavigationBar() {

    // const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        // Check if scrolled more than 50 pixels
        const offset = window.scrollY;

        if (offset > 50) {
            setIsScrolled(true);
        } else if (offset <= 50) {
            setIsScrolled(false);
        }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);  // Empty dependency array means this useEffect will run once after component mounts


    useEffect(() => {
        console.log("isScrolled changed:", isScrolled);
    }, [isScrolled]);

    return (
        <Navbar expand="sm" fixed="top" className= {` ${isScrolled ? "bg-color" : "bg-transparent"}`} >
            <Container>
            <Navbar.Brand href="#home" className="text-light">
                <Braces />
                {" "}Tobias.dev
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className= {` ${isScrolled ? "text-dark" : "text-light"}`}>
                <MenuButtonWide />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className="link-light" >Home</Nav.Link>
                <Nav.Link href="#skills" className="link-light">Skills</Nav.Link>
                <Nav.Link href="#projects" className="link-light">Projects</Nav.Link>
                <Nav.Link href="#experience" className="link-light">Experience</Nav.Link>
                <Nav.Link href="#contact" className="link-light">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;