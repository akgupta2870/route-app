import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Features">Features</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Price">Price</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/New">New </Link>
          </Nav.Link>
          <Nav.Link to="/pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
