import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <Navbar bg="light" expand="lg" >
            <Container className='navbar'>
                {/* <Navbar.Brand href="/">CB</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>CB</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>Users</NavLink>
                        <NavLink to="admins" className='nav-link'>Admin</NavLink>


                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Log In</button>
                        <button className='btn-signup'>Sign up</button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;