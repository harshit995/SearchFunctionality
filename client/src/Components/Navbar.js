import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="navbar border border-grey">
            <Container>
                <Navbar.Brand href="#home">Searching....</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Discover</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Loan</NavDropdown.Item>
                            <NavDropdown.Item href="#">Tools</NavDropdown.Item>
                            <NavDropdown.Item href="#">Download</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Resources</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">FAQ's</NavDropdown.Item>
                            <NavDropdown.Item href="#">Calculators</NavDropdown.Item>
                            <NavDropdown.Item href="#">Search Stocks</NavDropdown.Item>
                            <NavDropdown.Item href="#">For Business</NavDropdown.Item>
                            <NavDropdown.Item href="#">Chat with Us</NavDropdown.Item>
                        </NavDropdown>
                        <Button
                            variant="outline-primary"
                            className="pop-out-animation"
                        >
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>






    );
};

export default NavigationBar;
