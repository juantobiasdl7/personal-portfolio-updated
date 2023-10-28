import cred1 from "../../Assets/Images/coursera-html-css.png";
import cred2 from "../../Assets/Images/coursera-js-certification.png";
import cred3 from "../../Assets/Images/coursera-version-control.png";
import cred4 from "../../Assets/Images/react-basics-certificate.png";
import cred5 from "../../Assets/Images/introduction-to-backend.png";
import cred6 from "../../Assets/Images/introduction-frontend.png";
import cred7 from "../../Assets/Images/technical-support.png";
import cred8 from "../../Assets/Images/PSMI.png";
import cred9 from "../../Assets/Images/PSMII.png";
import cred10 from "../../Assets/Images/C2INGLES.png";

// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
const responsive = {
superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
},
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
},
mobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1
}
};


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Container className="skill-bx">
                            <h2 style={{textDecoration:"underline"}}><i>Certifications</i></h2>
                            <p>Below are certifications I've earned throughout my professional journey.</p>
                            <Carousel responsive={responsive} showDots autoPlay={true} autoPlaySpeed={2000} infinite={true} className="skill-slider">
                                <div className="item ">
                                    <a href="https://coursera.org/share/4a2f0890a1b93ef94f67578358056c21" target="_blank" rel="noopener noreferrer">
                                        <img src={cred1} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">HTML & CSS in depth - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://coursera.org/share/acc0bc0ce5a1d13f412360c76a933f1a" target="_blank" rel="noopener noreferrer">
                                        <img src={cred2} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">JavaScript - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://coursera.org/share/70899e5d57628082c97aeb7c00c168d7" target="_blank" rel="noopener noreferrer">
                                        <img src={cred3} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Version Control  - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://coursera.org/share/40ed71557d16017e50bc48c2395772c1" target="_blank" rel="noopener noreferrer">
                                        <img src={cred4} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">React Basics - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.coursera.org/account/accomplishments/certificate/CAJTWFPEGRDB" target="_blank" rel="noopener noreferrer">
                                        <img src={cred5} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Introduction to Back-End Development - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://coursera.org/share/2b0c7b64064dfab50ecbcb92cf05d8bd" target="_blank" rel="noopener noreferrer">
                                        <img src={cred6} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Introduction to Front-End Development - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://coursera.org/share/800c02f2e429a6877df3411c421ae343" target="_blank" rel="noopener noreferrer">
                                        <img src={cred7} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Technical Support Fundamentals - Professional Certificate</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://drive.google.com/file/d/1LEWwgN7FnYiO79tw6KShQSO4o6OETtLL/view" target="_blank" rel="noopener noreferrer">
                                        <img src={cred8} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Professional Scrum Master™ I</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://drive.google.com/file/d/15FKkrE_5qn1AvujnglbIjbxnhSphbOMZ/view" target="_blank" rel="noopener noreferrer">
                                        <img src={cred9} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Professional Scrum Master™ II</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.poliglota.org/certificates/707bad81bb7cd918.pdf" target="_blank" rel="noopener noreferrer">
                                        <img src={cred10} alt="Image" className="image-size"/>
                                        <h5 className="skills-p-text-styles">Certificate of Proficiency in English - C2 Advanced Language Mastery</h5>
                                    </a>
                                </div>
                            </Carousel>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}