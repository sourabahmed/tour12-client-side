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
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/addPackage'>AddPackage</Link></Nav.Link>
                            <Nav.Link ><Link to='/orders'>MyOrders</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>{user?.displayName}</Nav.Link>

                            {
                                user?.email? <button onClick={signOut} className="btn btn-danger">LogOut</button>:
                                <Nav.Link> <Link to='/login'><button className="btn btn-danger">Login</button></Link> </Nav.Link>
                            }

                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;