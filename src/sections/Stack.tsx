import { Container, Row, Col } from "react-bootstrap";
import StackList from "../components/StackList";
const Stack = () => {
  return (
    <div>
      <Container className="container-content-main sections" id="our-clients">
        <Row>
          <Col>
            <div className="font-section-name">Stack</div>
            <div className="font-important">Technologie pro vývoj</div>
            <StackList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stack;
