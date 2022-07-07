import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chart Task</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Line</Nav.Link>
            <Nav.Link as={Link} to="Diagram">Diagram</Nav.Link>
            <Nav.Link  as={Link} to="Pie">Pie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   );
}

export default NavBar;