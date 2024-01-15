import React from "react";
import "./stylenavbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid mx-md-5 mx-3">
        <a href="" onClick={() => navigate("/")}>
          <img className="navbar-brand" src={logo} alt="Todo-List" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={250}
                className="nav-link"
                onClick={() => navigate("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-78}
                duration={250}
                className="nav-link"
                onClick={() => navigate("/Project")}
              >
                Project
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-400}
                duration={250}
                className="nav-link"
                onClick={() => navigate("/")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
