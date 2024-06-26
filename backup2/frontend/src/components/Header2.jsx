import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import atc from '../assets/add-to-cart.png';
import account from '../assets/account.png';

const Header2 = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Logout function
  const handleLogout = () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      // Perform logout actions here (e.g., clear user session, remove tokens, etc.)
      // Redirect to the signin page
      navigate('/');
    }
  };

  return (
    <Navbar bg="light" variant="light" className="p-3">
      <Container>
        <Navbar.Brand href="/customer">
          <Nav.Link href="/customer" className="px-20 text-black" style={{ fontSize: '1.5rem', paddingRight: '20px' }}>
            Heal Hub
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Link as={Link} to="/customer" className="px-2 text-black">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="./buyproduct" className="px-2 text-black">
            Buy Products
          </Nav.Link>
          <Nav.Link as={Link} to="./category" className="px-2 text-black">
            Category
          </Nav.Link>
          <Nav.Link href="#" className="px-2 text-black">
            About
          </Nav.Link>
        </Nav>
        <Form className="d-flex mb-3 mb-lg-0 me-lg-3">
          <FormControl
            type="search"
            placeholder="Search..."
            className="form-control-dark"
            aria-label="Search"
          />
        </Form>
        <div className="text-end">
          {/* Use Dropdown component for account */}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img src={account} alt="Account" className="d-inline-block align-top" height="30" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="./profile">Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to="./changepass">Change Password</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item> {/* Call handleLogout function on click */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Nav.Link as={Link} to="./addtocart">
            <img src={atc} alt="Add to Cart" className="d-inline-block align-top" height="30" />
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header2;
