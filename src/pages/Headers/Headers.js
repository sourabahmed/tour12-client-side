import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Headers = () => {
    const {user, logOut} = useAuth();
    const signOut = () => {
        logOut();
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tour12</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link className="text-decoration-none text-white" to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link className="text-decoration-none text-white" to='/addPackage'>AddPackage</Link></Nav.Link>
                            <Nav.Link ><Link className="text-decoration-none text-white" to='/orders'>MyOrders</Link></Nav.Link>
                            <Nav.Link ><Link className="text-decoration-none text-white" to='/manageOrders'>ManageOrders</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>{user?.displayName}</Nav.Link>

                            {
                                user?.email? <button onClick={signOut} className="btn btn-danger">LogOut</button>:
                                <Nav.Link> <Link to='/login'><button className="btn btn-danger">Login</button></Link> </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;