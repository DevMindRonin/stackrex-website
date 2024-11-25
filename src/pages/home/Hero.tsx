import "./../../styles/styles.css";
import HeroBgImage from "../../assets/images/hero_bg.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="page-container" id="kotva-hero-page">
      <img src={HeroBgImage} alt="" className="hero-bg-image" />
      <section>
        <Container>
          <Row>
            <Col className="hero-claim">
              Boříme <br />
              hranice běžného
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-between mb-5">
            <Col></Col>
            <Col className="fs-5 ">
              Vytváříme webové a mobilní aplikace, které pomáhají našim klientů
              lépe obstát, v neustále se měnícím konkurenčním prostředí.
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
