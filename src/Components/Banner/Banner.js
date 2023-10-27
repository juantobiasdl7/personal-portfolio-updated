    import { useState, useEffect } from "react";
    import { Container, Row, Col, Button } from "react-bootstrap";
    import { ArrowRightCircle } from 'react-bootstrap-icons';
    import 'animate.css';
    import TrackVisibility from 'react-on-screen';
    import Lottie from 'react-lottie-player';
    import lottieJson from '../../Assets/Animations/Animation - 1698195064359.json'

    export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(20);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software Engineer", "Frontend Developer", "Digital Project Manager" ];
    const period = 2500;

    //USE EFFECT FOR TICKER
    useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
    }, [text])

    //TICK FUNCTION
    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(20);
        if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(20);
        }
    }
    else if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } 
}

    return (
    <section className="banner" id="home">
        <Container >
        <Row className="aligh-items-center">
            <Col xs={12} md={7} >
            <TrackVisibility>
                {({ isVisible }) =>
                <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="bottom-space">{`Hi! I'm Tobías`} <span ><span className="wrap">{`{ ${text} }`}</span></span></h1>
                    <p className="bottom-space">+3 years working as a Technical Digital Project manager, currently working at NTT DATA.</p>
                    {/* <Button variant="light" className="bottom-space">Let’s Connect <ArrowRightCircle size={25} /></Button> */}
                    <p>Interested in leveraging my skills as a software developer in my day to day work to create solutions that translate into high-quality products.</p>
                    
                </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={5} className="d-flex justify-content-center">
            <TrackVisibility>
                {
                ({ isVisible }) =>
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 350, height: 350 }}
                />
                }
            </TrackVisibility>
            </Col>
        </Row>
        </Container>
    </section>
    )
    }

