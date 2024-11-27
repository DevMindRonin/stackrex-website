import { Container, Row, Col } from "react-bootstrap";

const NumbersPage = () => {
  return (
    <Container>
      <div className="container-content-numbers text-white p-3">
        <Row>
          <Col>
            <div className="font-important me-3 ">Mezníky</div>
            <div className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              cupiditate quod optio dignissimos dolor accusamus por
            </div>
          </Col>
          <Col>
            <Row className="ms-2">
              <Col className="d-flex flex-row me-5">
                <div className="d-flex align-items-start">
                  <div className="font-important">237</div>
                  <div className="d-flex flex-column pt-3 pb-3 ">
                    <div className="font-important-redlight fs-4 lh-1 ">+</div>
                    <div className="lh-1">Spokojených klientů</div>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-row">
                <div className="font-important">300</div>
                <div className="d-flex flex-column pt-3 pb-3 ">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1">Dokončených projetků</div>
                </div>
              </Col>
              <Col className="d-flex flex-row me-5">
                <div className="d-flex align-items-start">
                  <div className="font-important">237</div>
                  <div className="d-flex flex-column pt-3 pb-3 ">
                    <div className="font-important-redlight fs-4 lh-1 ">+</div>
                    <div className="lh-1">Spokojených klientů</div>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-row">
                <div className="font-important">300</div>
                <div className="d-flex flex-column pt-3 pb-3 ">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1">Dokončených projetků</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
    // </div>
  );
};

export default NumbersPage;
