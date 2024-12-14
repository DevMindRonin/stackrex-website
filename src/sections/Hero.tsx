import "../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Triangle from "./../components/Triangle";
const Hero = () => {
  return (
    <Container>
      <div id="top">
        <Row className="ms-4 ">
          <Col md={12} className="hero-claim">
            Boříme <br />
            hranice běžného
          </Col>
        </Row>
        <Row className="d-flex justify-content-end ms-5 me-2">
          <Col md={6} className="fs-5 font-white text-start">
            <div>
              Vytváříme webové a mobilní aplikace, které pomáhají našim klientům
              lépe obstát v neustále se měnícím konkurenčním prostředí.
            </div>
          </Col>
        </Row>
        <Triangle top={"25%"} left={"75%"} speed={"5s"} />
        <Triangle top={"40%"} left={"90%"} speed={"20s"} />
        <Triangle top={"90%"} left={"20%"} speed={"10s"} />
      </div>
    </Container>
  );
};

export default Hero;
