import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "./../assets/images/Logo Stackrex white.png";
import "./../styles/styles.css";
import Praha from "./../assets/images/address/sidlo-praha.jpg";
import Brno from "./../assets/images/address/sidlo-brno.jpeg";

const Contact = () => {
  return (
    <Container fluid className="background-block" id="contact">
      <Container>
        <Row className="d-flex flex-row container-content-second">
          <Col xs={12} sm={6} md={6} lg={3} className="mt-5 mb-xs-2 mb-md-5">
            <div className="logo-image-contact-container">
              <img
                src={CompanyLogo}
                alt=""
                className="logo-image-contact-container size"
              />
            </div>
            <div className="font-grey contact me-5">
              <h5>Gleton s.r.o.</h5>
              <div>IČ: 01930257</div>
              <div>DIČ: CZ01930257</div>
              <br />
              <div>
                Společnost zapsaná v obchodním rejstříku vedeném Krajským soudem
                v Brně, oddíl C, vložka 79794
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="mt-5 mb-xs-2 mb-md-5">
            <div className="font-section-name white">KONTAKT</div>
            <div className="font-grey contact">
              <div>+420 608 140 503</div>
              <div>info (zav) stackrex.com</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="mt-5 mb-xs-2 mb-sm-5">
            <div className="font-section-name white">PRAHA</div>
            <div className="font-grey contact">
              <div>Pernerova 51</div>

              <div>186 00 Praha 8</div>
            </div>
            <br />
            <div>
              <img src={Praha} alt="Pobočka Praha" className="img-fluid" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="mt-5 mb-5">
            <div className="font-section-name white">BRNO</div>
            <div className="font-grey contact">
              <div>Nové sady 988/2</div>
              <div>602 00 Brno - Staré Brno</div>
            </div>
            <br />
            <div>
              <img src={Brno} alt="Pobočka Brno" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <hr className="border-1 border-light m-0 p-0" />
      </Container>
    </Container>
  );
};

export default Contact;
