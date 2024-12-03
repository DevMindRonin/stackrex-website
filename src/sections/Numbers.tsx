import "../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";

const NumbersPage = () => {
  return (
    <Container>
      <div className="container-content-numbers text-white p-5">
        <Row>
          <Col md={5} sm={12}>
            <div className="font-important me-3">Mezníky</div>
            <div className="mb-4 font-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              cupiditate quod optio dignissimos dolor accusamus por
            </div>
          </Col>
          <Col md={7} sm={12}>
            <div className="d-flex flex-row me-5 justify-content-between flex-wrap">
              <div className="d-flex flex-wrap">
                <div className="font-important numbers me-2">237</div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1 font-grey">Spokojených klientů</div>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="font-important numbers me-2">300</div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1 font-grey">Dokončených projetků</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between flex-wrap me-5">
              <div className="d-flex flex-wrap">
                <div className="font-important numbers me-2">237</div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1 font-grey">Spokojených klientů</div>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="font-important numbers me-2">300</div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="font-important-redlight fs-4 lh-1 ">+</div>
                  <div className="lh-1 font-grey">Dokončených projetků</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    // </div>
  );
};

export default NumbersPage;
