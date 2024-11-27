import { Container, Row, Col } from "react-bootstrap";
import "./../styles/styles.css";

const Agile = () => {
  return (
    <Container className="container-content-main-sections">
      <Row>
        <Col>
          <div className="font-important text-center text-wrap">
            Agilní vývoj aplikací nám umožňuje rychle se přizpůsobit měnícím se
            tržním podmínkám. Věříme, že změny jsou příležitostí ke zlepšení,
            růstu a vyšší hodnotě.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Agile;
