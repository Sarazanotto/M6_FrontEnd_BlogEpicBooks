import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { LibraryBig } from "lucide";
import "./mobilenav.css";

const MobileNav = () => {
  return (
    <Dropdown className="d-md-none">
      <Dropdown.Toggle as="div" className="mobile-toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-library-big-icon lucide-library-big icon-nav"
        >
          <rect width="8" height="18" x="3" y="3" rx="1" />
          <path d="M7 3v18" />
          <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/" className="nav-link">
            Chi sono
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/" className="nav-link">
            Contatti
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MobileNav;
