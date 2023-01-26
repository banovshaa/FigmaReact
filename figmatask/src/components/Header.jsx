import React from 'react'
import { Container,Navbar,Nav,Button } from 'react-bootstrap';
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='header-all'>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{width:'170px'}}>
                    <div className='logo'>
                        <img src={Logo} className='img-fluid' alt="logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">О нас</Nav.Link>
                    <Nav.Link id='active' href="#">Курсы</Nav.Link>
                    <Nav.Link href="#">Трудоустройство</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="tel:+994 55 404 00 44">+994 55 404 00 44</Nav.Link>
                    <Button id='btn-1'>Заказать звонок</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header