import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import  vivaweb from "../../Assets/Images/vivaweb.png";
import Lottie from 'react-lottie-player';
import lottieCohete from '../../Assets/Animations/cohete.json'

export const Project = () => {

return (
<section className="project" id="project">
    <Container >
        <Row className="aligh-items-center">
            <h1 className="pt-5 pb-5 bottom-space title-class">About my current role at NTT DATA.</h1>
        </Row>
        <Row className="aligh-items-center">
            <Col xs={12} xl={6}>
                    <p className="p-class"><u><i>Technical Digital Project Manager leading 2 projects,</i></u> Viva Aerobus Web Application & Viva  Aerobus Apps (Android & iOS).</p>
                    <p><strong>Accomplishments:</strong></p>
                    <ul>
                        <li>E-commerce mobile applications <strong>rated 4.8 out of 5 for iOS & Android.</strong></li>
                        <li> <strong>Orchestrated</strong> the implementation of the Viva Aerobus <strong>loyalty program</strong>, "Doters". This initiative 
garnered 1.3 million members within its first five months and <strong>grew to 3.4 million members in less than a year</strong>, 
demonstrating successful execution.</li>
                        <li><strong>Increase passenger registration to 6.1 million in Q2 2023, an 18.7% increase compared to Q2 2022</strong>. A 
significant contribution to this growth was a shift in passenger check-in methods, with <strong>81% of users utilizing our web/app 
platforms.</strong></li>
<li>You can verify this information for yourself <a href="https://www.linkedin.com/posts/juancarlos-zuazua-c-53642619_genteviva-activity-7090701394017484800-A4jV?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">here</a> in the quarterly reports published by Juan Carlos Zuazua, CEO of Viva Aerobus. I share the link to his LinkedIn profile.</li>
<p>{""}</p>
                    </ul>
            </Col>
            <Col xs={12} xl={6} className="">
                <ProjectCard title="Viva Aerobus Web Application" text="Viva Aerobus is one of the largest low-cost airline in Mexico. It has over one million passengers monthly, and is the fastest-growing airline globally. We were tasked to develop a best-in-class digital experience for its customers across the world. Our team was able to enhance and simplify the airline booking experience in a responsive, fast and well integrated website." url={vivaweb} buttonText="See project" />
            </Col>
        </Row>
        <Row className="aligh-items-center" style={{paddingTop:"50px", paddingBottom:"50px"}}>
            <Col xs={12} xl={6} className="d-flex justify-content-center">
                <Lottie
                            loop
                            animationData={lottieCohete}
                            play
                            style={{ width: 450, height: 450 }}
                />
            </Col>
            <Col xs={12} xl={6} >
                <div>
                    <p className="bottom-space"><strong><i>My primary strength</i></strong> in my day-to-day work is facilitating communication between technical teams and key non-technical stakeholders. This <strong><i>effective translation of business rules into technical language</i></strong>  has promoted mutual 
understanding and productive collaboration <strong><i>to meet OKR's.</i></strong></p>
<p><strong>Tools used at work:</strong></p>

<span className="tagline">React</span>
<span className="tagline">JavaScript</span>
<span className="tagline">HTML5</span>
<span className="tagline">CSS</span>
<span className="tagline">Bootstrap</span>
<span className="tagline">SQL</span>
<span className="tagline">Python</span>
<span className="tagline">Gitlab</span>
<span className="tagline">Git/Github</span>
<span className="tagline">Jira</span>
<span className="tagline">Linux</span>
                </div>
                
            </Col>
        </Row>
    </Container>
</section>
)
}