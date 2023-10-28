import {Container, Nav, Navbar} from 'react-bootstrap';
import { Braces, MenuButtonWide } from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';
import navIcon1 from "../../Assets/Images/nav-icon1.svg";


function NavigationBar() {

    // const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

    // Handler to call on window resize
    function handleResize() {

        const toggleButton = document.getElementById('toggle-button');
        const expandButton = document.getElementById('basic-navbar-nav');
        // Set state based on the viewport width
        

        if (window.innerWidth > 768) {
            toggleButton.classList.add('collapsed');
            expandButton.classList.remove('show');
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial viewport width
    handleResize();




    // Cleanup: remove the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
    }, []);  // Empty dependency array means this useEffect will run once after component mounts



    return (
        <Navbar expand="md" fixed="top" className= {` ${isScrolled ? "bg-color" : isExpanded && isMobile ? "bg-color" : "bg-transparent"}`} >
            <Container>
            <Navbar.Brand href="#home" className="text-light" style={{fontSize:"22px"}}>
                <Braces />
                {" "}Tobias.dev
            </Navbar.Brand>
            <Navbar.Toggle id="toggle-button" aria-controls="basic-navbar-nav" className="text-light" onClick={() => setIsExpanded(!isExpanded)}>
                <MenuButtonWide />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="link-light" style={{fontSize:"20px"}}>Home</Nav.Link>
                    <Nav.Link href="#skills" className="link-light" style={{fontSize:"20px"}}>Certifications</Nav.Link>
                    <Nav.Link href="#project" className="link-light" style={{fontSize:"20px", marginRight:"6px"}}>Current-Role</Nav.Link>
                    {/* <Nav.Link href="#experience" className="link-light">Experience</Nav.Link> */}
                    {/* <Nav.Link href="#contact" className="link-light">Contact</Nav.Link> */}
                    <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/tob%C3%ADas/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                    </div>
                </span>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;