import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../useAuth';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth()
    return (
      <div>
        <>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: "#00a99d" }}
          >
            <Container>
              <Navbar.Brand to="#home" style={{ color: "white" }}>
                Vagabond Travelers
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <NavLink
                  classname="mx-2 text-decoration-none"
                  to="/home"
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>
                <NavLink
                  classname="mx-2 text-decoration-none"
                  to="/features"
                  style={{ color: "white" }}
                >
                  Features
                </NavLink>
                <NavLink
                  classname="mx-2 text-decoration-none"
                  to="/pricing"
                  style={{ color: "white" }}
                >
                  Pricing
                </NavLink>

                {user?.email ? (
                  <NavLink
                    style={{ color: "white" }}
                    as={Link}
                    classname="mx-2 text-decoration-none"
                    to="/addpackage"
                  >
                    Add Package
                  </NavLink>
                ) : (
                  ""
                )}
                {user?.email ? (
                  <NavLink
                    style={{ color: "white" }}
                    as={Link}
                    classname="mx-2 text-decoration-none"
                    to="/mybookings"
                  >
                    My Bookings
                  </NavLink>
                ) : (
                  ""
                )}
                {user?.email ? (
                  <NavLink
                    style={{ color: "white" }}
                    as={Link}
                    classname="mx-2 text-decoration-none"
                    to="/mngordrs"
                  >
                    Manage Orders
                  </NavLink>
                ) : (
                  ""
                )}

                {user?.email ? (
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                ) : (
                  <NavLink
                    style={{ color: "white" }}
                    as={Link}
                    classname="mx-2 text-decoration-none"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </div>
    );
};

export default Header;