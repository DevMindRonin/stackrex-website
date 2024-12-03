import "./../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "../components/CompanyLogo";

const Clients = () => {
  return (
    <Container className="container-content-main sections" id="our-clients">
      <Row>
        <Col sm={12}>
          <div className="font-section-name">Naši klienti</div>
          <div className="font-important">
            Spolupracovali jsme na projektech
          </div>
          <CompanyLogo />
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
