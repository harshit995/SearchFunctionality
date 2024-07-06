import React from 'react';
import { Container, Row, Col, CloseButton } from 'react-bootstrap';
import "./Footer.css"

const FooterSection = () => {
    return (
        <footer className="footer-section" >
            <div className="footer-top" >
                <Container  >
                    <Row>
                        <Col lg={3} md={6} sm={6}>
                            <div className="widget company-intro-widget">
                                <h2 style={{ color: 'white' }}> <img src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png' className='m-1' style={{ width: '30px' }}></img>Searching....</h2>
                                <p className="paragraph-animation">Here, you can search from the paragraphs that include your desired word.</p>
                                <p className="paragraph-animation">Sample words for your references:<b> short, ground, Hamburger, kevin</b></p>
                                <p className="paragraph-animation">
                                    Link for our open API paragraphs : <a href="https://baconipsum.com/api/?type=all-meat&paras=50" target="_blank" rel="noopener noreferrer">Open API Link</a> </p>
                                <ul className="company-footer-contact-list">
                                    <li><i className="fas fa-phone"></i>0123456789</li>
                                    <li><i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <div className="widget course-links-widget">
                                <h5 className="widget-title">Company</h5>
                                <ul className="courses-link-list">
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>About</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>For Business</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Blog</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Press</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Careers</a></li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <div className="widget latest-news-widget">
                                <h5 className="widget-title">Products</h5>
                                <ul className="courses-link-list">
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Searching App</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Gateway</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Brokers</a></li>
                                    <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Tickertape</a></li>


                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <div className="widget newsletter-widget">
                                <h5 className="widget-title">Newsletter</h5>
                                <div className="footer-newsletter">
                                    <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                                    <form className="news-letter-form">
                                        <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                                        <input type="submit" value="Send" />
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col md={6} sm={6} className="text-sm-left text-center">
                            <span className="copy-right-text">© 2024 Harshit Gupta All Rights Reserved.</span>
                        </Col>
                        <Col md={6} sm={6}>
                            <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer >
    );
};

export default FooterSection;
