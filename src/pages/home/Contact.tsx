import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "./../../assets/images/gletonlogo.png";
const Contact = () => {
  return (
    <div className="container-content-second">
      <Container>
        <Row>
          <Col md={3}>
            <div className="logo-image-contact-container">
              <img src={CompanyLogo} alt="" className="logo-image-contact" />
            </div>

            <div className="font-contact-common-grey me-5">
              Společnost zapsaná v obchodním rejstříku vedeném Krajským soudem v
              Brně, <br />
              oddíl C, vložka 79794
            </div>
          </Col>
          <Col md={3}>
            <div className="font-section-name white">Rychlý kontakt</div>
            <div className="font-contact-common-grey">
              <div>+420 775 181 707</div>
              <div> info (zav) gleton.cz</div>
            </div>
          </Col>

          <Col md={3}>
            <div className="font-section-name white">Fakturační adresa</div>
            <div className="font-contact-common-grey">
              <div>Gleton s.r.o.</div>
              <div>Nové sady 988/2</div>
              <div>602 00 Brno - Staré Brno</div>
              <div>IČ: 01930257</div>
              <div>DIČ: CZ01930257</div>
            </div>
          </Col>
          <Col md={3} className="">
            <div className="font-section-name white">Adresa provozovny</div>
            <div className="font-contact-common-grey">
              <div>Gleton s.r.o.</div>
              <div>Fakulta aplikované informatiky</div>
              <div>Univerzita Tomáše Bati</div>
              <div>Nad Stráněmi 4511</div>
              <div>760 05 Zlín</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
