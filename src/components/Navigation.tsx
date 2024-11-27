import { Nav, Navbar, Container } from "react-bootstrap";
import logoGleton from "../assets/images/gletonlogo.png";
import "./Navigation.css";

const MyNavbar = () => {
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".main-menu");

    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  return (
    <Container fluid>
      <Navbar className="main-menu" expand="lg">
        <Navbar.Brand href="#top">
          <img
            alt="Gleton Logo"
            src={logoGleton}
            width="100"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light fw-bold">
            <Nav.Link
              href="#what-we-can-do"
              className="text-light fw-bold me-4"
            >
              CO UMÍME
            </Nav.Link>
            <Nav.Link href="#our-clients" className="text-light me-4">
              NAŠI KLIENTI
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
    </Container>
  );
};

export default MyNavbar;
