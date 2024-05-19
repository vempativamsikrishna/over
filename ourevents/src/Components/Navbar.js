
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {

    const menus = [
        {name:"Our Services", link:"Our-Services"},
        {name:"About Us",link:"About-Us"},
        {name:"My Bookings",link:"My-Bookings"},
        {name:"Gallery",link:"Gallery"},
        {name:"Contact Us",link:"Contact-Us"}
    ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
            <img src='/New folder/Logo.png' width={'25%'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menus.map((item)=>{
                return(
                    <Nav.Link as={Link} to={item.link}>{item.name}</Nav.Link>


                )
            })}
           
          </Nav>

          <Nav className='book-now-nav'>
            <Nav.Link as={Link} to={'book-now'}>Book Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;