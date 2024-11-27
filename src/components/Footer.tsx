import { Container, Row, Col } from "react-bootstrap";
import "./../styles/styles.css";
const Header = () => {
  return (
    <Container fluid>
      <Row className="background-block">
        <Col>
          <div className="text-center m-4 font-grey contact">
            Copyright © 2024 Gleton s.r.o.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
