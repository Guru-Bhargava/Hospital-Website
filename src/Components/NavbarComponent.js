import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './Styles/Navbarstyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFirstAid} from '@fortawesome/free-solid-svg-icons'
import {Route,Routes,NavLink} from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Appointment from './Appointment';
import Login from './Login';
import Signup from './Signup';
import { FaUserCircle } from "react-icons/fa";

function NavbarComponent() {
    return <div>
        <Navbar className="container-fluid" expand="md" bg="myBackgroud" variant="dark">
            <Navbar.Brand>
                <FontAwesomeIcon icon={faFirstAid} className="" /> VJ Hospitals
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavLink className="active nav-link" to="/">Home</NavLink>
                    <NavLink className="active nav-link" to="/Aboutus">About us</NavLink>
                    {/* <NavLink className="active nav-link" to="/Appointment">Book an appointment</NavLink> */}
                </Nav>
                <Nav className="">
                    <NavLink className="active nav-link" to="/Login"> <FaUserCircle/> Login/Signup</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            {/* <Route path='/Appointment' element={<Appointment />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
        </Routes>
    </div>;
}

export default NavbarComponent;
