import React, { useState } from "react";
import { Button, Card, Alert, Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import Events from './Events';

export default function Dashboard() {
  
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
      setError('')

      try {
        await logout()
        history.push('/login')

      } catch {
          setError('Failed to log out')
      }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Night Out</Navbar.Brand>
        <NavItem>email: {currentUser.email}</NavItem>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Navbar>
      <Events />
      
    </>
  );
}
