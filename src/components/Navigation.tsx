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
    <Navbar className="main-menu">
      <Container>
        <Navbar.Brand href="#kotva-hero-page">
          <img
            alt=""
            src={logoGleton}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light fw-bold ">
            <Nav.Link
              href="#kotva-co-umime"
              className="text-light fw-bold me-4"
            >
              CO UMÍME
            </Nav.Link>
            <Nav.Link href="#kotva-nasi-klienti" className="text-light me-4">
              NAŠI KLIENTI
            </Nav.Link>

            <Nav.Link href="#home" className="text-light fw-bold me-4">
              KONTAKT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
