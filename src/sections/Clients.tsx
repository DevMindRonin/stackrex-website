import "./../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "../components/CompanyLogo";

const Clients = () => {
  return (
    <Container className="container-content-main-sections" id="our-clients">
      <Row>
        <Col md={3}>
          <div className="font-section-name">Naši klineti</div>
          <div className="font-important">
            Spolupracovali jsme na mnoha projektech
          </div>
        </Col>
        <Col></Col>
        <Col md={7}>
          <CompanyLogo />
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
