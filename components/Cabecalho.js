import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                    <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Cabecalho