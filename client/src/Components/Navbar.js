import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Search App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
