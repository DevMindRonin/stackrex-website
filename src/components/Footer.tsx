import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <div className="background-block">
              <div className="container-content-second line"></div>
              <div className="container-content-second center text-center ">
                Copyright © 2024 Gleton s.r.o.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Header;
