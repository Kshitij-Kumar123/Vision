import { Container, Title } from "./navbarStyle.jsx";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.js";
import { Alert, Dropdown } from "react-bootstrap";

export default function Navbar() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const { displayName, email } = currentUser;

  const lightpink = "#F06B6B";
  const darkpink = "#853F3F";
  const darkgray = "#444"
  const handleLogOut = async () => {
    setError("");
    try {
      await logout();
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Title>
        <a href="/" style={{ textDecoration: "none" }}>
          Vision
        </a>
      </Title>
      {error && <Alert variant="warning">{error}</Alert>}
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="danger"
            style={{ backgroundColor: lightpink, borderColor: lightpink }}
          >
            <FaUserCircle style={{ fontSize: "2em" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* display name of user if found, else show email */}
            <Dropdown.Item style={{ color: darkpink }}>
              <b>{displayName ?? email}</b>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item style={{ color: darkgray }} onClick={handleLogOut}>
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
}
