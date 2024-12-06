import { Container, Row, Col } from "react-bootstrap";
import StackList from "../components/StackList";
const Stack = () => {
  return (
    <div>
      <Container className="container-content-main sections" id="our-stack">
        <Row>
          <Col>
            <div className="font-section-name">Technologie</div>
            <div className="font-important">Vývojářský stack</div>
            <StackList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stack;
