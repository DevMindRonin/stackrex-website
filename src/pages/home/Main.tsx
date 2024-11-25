import React from "react";
import PictureDashboard from "../../assets/images/dashboard1.jpg";
import PicturePayment from "../../assets/images/payment1.jpg";
import PictureSignin from "../../assets/images/signin1.jpg";
import CompanyLogo from "../../components/CompanyLogo";
import { Container, Row, Col } from "react-bootstrap";

const HomeMain = () => {
  return (
    <div className="content-main" id="kotva-co-umime">
      <Container className="content-main-container">
        <Row>
          <Col md={4}>
            <div className="font-section-name">Co umíme</div>
            <div className="font-important">
              Aplikace napříč firemními potřebami
            </div>
          </Col>
          <Col md={8}>
            <Row className=" d-flex justify-content-center flex-column">
              <Col>
                <Row>
                  <Col className="services-img"> </Col>
                  <Col className="services-img">
                    <img
                      src={PictureDashboard}
                      alt="Company Dashboard"
                      className="services-img"
                    />
                    <div className="overlay-text">DASHBOARD</div>
                  </Col>
                  <Col className="services-img"></Col>
                  <Col className="services-img">
                    <img
                      src={PictureSignin}
                      alt="Company Dashboard"
                      className="services-img"
                    />
                    <div className="overlay-text">SIGN-IN</div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="services-img">
                    <img
                      src={PictureDashboard}
                      alt="Company Dashboard"
                      className="services-img"
                    />

                    <div className="overlay-text">DASHBOARD</div>
                  </Col>
                  <Col className="services-img"> </Col>
                  <Col className="services-img">
                    <img
                      src={PicturePayment}
                      alt="Company Dashboard"
                      className="services-img"
                    />
                    <div className="overlay-text">PAYMENT</div>
                  </Col>
                  <Col className="services-img"> </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="services-img"> </Col>
                  <Col className="services-img">
                    <img
                      src={PictureDashboard}
                      alt="Company Dashboard"
                      className="services-img"
                    />
                    <div className="overlay-text">DASHBOARDS</div>
                  </Col>
                  <Col className="services-img"> </Col>
                  <Col className="services-img">
                    <img
                      src={PictureSignin}
                      alt="Company Dashboard"
                      className="services-img"
                    />
                    <div className="overlay-text">SIGN-IN</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="content-main-container">
        <Row>
          <Col>
            <div className="font-important text-center">
              Agilní vývoj aplikací nám umožňuje rychle se přizpůsobit měnícím
              se tržním podmínkám. Věříme, že změny jsou příležitostí ke
              zlepšení, růstu a vyšší hodnotě.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="content-main-container" id="kotva-nasi-klienti">
        <Row>
          <Col md={3}>
            <div className="font-section-name">Naši klineti</div>
            <div className="font-important">
              Spolupracovali jsme na mnoha projektech
            </div>
          </Col>
          <Col></Col>
          <Col md={7}>
            <CompanyLogo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeMain;
