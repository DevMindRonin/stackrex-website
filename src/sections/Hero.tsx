import "../styles/styles.css";
import HeroBgImage from "../assets/images/hero_bg.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import Triangle from "./../components/Triangle";
const Hero = () => {
  return (
    <Container>
      <div id="top">
        <img src={HeroBgImage} alt="" className="container-hero-image" />
        <Row>
          <Col className="hero-claim">
            Boříme <br />
            hranice běžného
          </Col>
        </Row>
        <Triangle top={"30%"} left={"70%"} />
        <Row className="d-flex flex-row justify-content-between mb-5">
          <Col></Col>
          <Col className="fs-5 font-white">
            Vytváříme webové a mobilní aplikace, které pomáhají našim klientů
            lépe obstát, v neustále se měnícím konkurenčním prostředí.
          </Col>
        </Row>
        <Triangle top={"50%"} left={"80%"} />
      </div>
    </Container>
  );
};

export default Hero;
