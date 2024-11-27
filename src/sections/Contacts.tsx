import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "./../assets/images/gletonlogo.png";
import "./../styles/styles.css";

const Contact = () => {
  return (
    <Container fluid className="background-block">
      <Container>
        <Row className="d-flex flex-row container-content-second">
          <Col sm={6} md={3}>
            <div className="logo-image-contact-container">
              <img
                src={CompanyLogo}
                alt=""
                className="logo-image-contact-container size"
              />
            </div>
            <div className="font-grey contact">
              Společnost zapsaná v obchodním rejstříku vedeném Krajským soudem v
              Brně, <br />
              oddíl C, vložka 79794
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="font-section-name white">Rychlý kontakt</div>
            <div className="font-grey contact">
              <div>+420 775 181 707</div>
              <div>info (zav) gleton.cz</div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="font-section-name white">Fakturační adresa</div>
            <div className="font-grey contact">
              <div>Gleton s.r.o.</div>
              <div>Nové sady 988/2</div>
              <div>602 00 Brno - Staré Brno</div>
              <div>IČ: 01930257</div>
              <div>DIČ: CZ01930257</div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="font-section-name white">Adresa provozovny</div>
            <div className="font-grey contact">
              <div>Gleton s.r.o.</div>
              <div>Fakulta aplikované informatiky</div>
              <div>Univerzita Tomáše Bati</div>
              <div>Nad Stráněmi 4511</div>
              <div>760 05 Zlín</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
