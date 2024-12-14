import { Nav, Navbar } from "react-bootstrap";
import logoGleton from "../assets/images/gletonlogo.png";
import "./Navigation.css";
import { useState, useEffect } from "react";

const MyNavbar = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".main-menu");
      if (navbar) {
        if (isHamburgerOpen || window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isHamburgerOpen]);

  return (
    <Navbar className="main-menu" expand="lg">
      <Navbar.Brand href="#top" className="ms-5">
        <img
          alt="Gleton Logo"
          src={logoGleton}
          width="120"
          height="auto"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="ms-auto me-3 me-sm-5"
        onClick={() => setHamburgerOpen(!isHamburgerOpen)}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="mt-1 ms-5">
        <Nav className="ms-auto text-light fw-bold">
          <Nav.Link href="#our-servicies" className="text-light fw-bold me-4 ">
            CO UMÍME
          </Nav.Link>
          <Nav.Link href="#our-clients" className="text-light me-4">
            NAŠI KLIENTI
          </Nav.Link>
          <Nav.Link href="#our-stack" className="text-light me-4">
            TECHNOLOGIE
          </Nav.Link>
          <Nav.Link href="#our-team" className="text-light me-4">
            TÝM
          </Nav.Link>
          <Nav.Link href="#contact" className="text-light fw-bold me-4">
            KONTAKT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
