import "../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";

const NumbersPage = () => {
  return (
    <Container>
      <div className="container-content-numbers text-white p-5">
        <Row>
          <Col md={4} sm={12}>
            <div className="font-important me-3">Mezníky</div>
            <div className="mb-4 font-grey">
              S dlouholetými zkušenostmi, silným týmem, spokojenými klienty a
              řešeními, která šetří čas i náklady, tvoříme profesionální webové
              aplikace.
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="d-flex flex-wrap h-100 align-items-center ps-5">
              <div className="col-12 col-sm-6 d-flex flex-column pe-4">
                <div className="d-flex flex-row ">
                  <div className="font-important numbers me-2">109</div>
                  <div className="d-flex flex-column justify-content-center flex-wrap ps-1">
                    <div className="font-important-redlight fs-4 lh-1">+</div>
                    <div className="lh-1 font-grey">spokojených klientů</div>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="font-important numbers me-2">10</div>
                  <div className="d-flex flex-column justify-content-center ps-1">
                    <div className="font-important-redlight fs-4 lh-1">+</div>
                    <div className="lh-1 font-grey">vývojářů</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column pe-4 ps-3">
                <div className="d-flex flex-row ">
                  <div className="font-important numbers me-2">5000</div>
                  <div className="d-flex flex-column justify-content-center ps-1">
                    <div className="font-important-redlight fs-4 lh-1">+</div>
                    <div className="lh-1 font-grey">ušetřených hodin</div>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="font-important numbers me-2">180</div>
                  <div className="d-flex flex-column justify-content-center ps-1">
                    <div className="font-important-redlight fs-4 lh-1">+</div>
                    <div className="lh-1 font-grey">měsíců zkušeností</div>
                  </div>
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
