import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HeaderSection = () => {
    return (
        <div className="header-section">
            <Container>
                <Row className="align-items-center mt-5">
                    <Col md={6}>
                        <h1 className="heading-animation">Welcome to the Search App</h1>
                        <p className="paragraph-animation">Here, you can search from the paragraphs that include your desired word.</p>
                        <p className="paragraph-animation">Sample words for your references: short, ground, Hamburger, kevin</p>
                        <p className="paragraph-animation">
                            Link for our open API paragraphs: <a href="https://baconipsum.com/api/?type=all-meat&paras=50" target="_blank" rel="noopener noreferrer">Open API Link</a>            </p>
                        <div className="header-buttons">
                            <Button variant="outline-primary m-2" className="pop-out-animation">Login</Button>
                            <Button variant="outline-primary" className="pop-out-animation">Get Started</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderSection;


