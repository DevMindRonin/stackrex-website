import { Container, Row, Col } from "react-bootstrap";
import "./../styles/styles.css";
const Header = () => {
  return (
    <Container fluid>
      <Row className="background-block">
        <Col>
          <div className="text-center m-4 font-grey contact">
            Všechna práva vyhrazena společností Gleton s.r.o. © 2024
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
