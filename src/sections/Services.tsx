import PictureDashboard from "../assets/images/dashboard1.jpg";
import PicturePayment from "../assets/images/payment1.jpg";
import PictureSignin from "../assets/images/signin1.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./../styles/styles.css";

const Services = () => {
  return (
    <Container className="container-content-main-sections">
      <Row>
        <Col md={3}>
          <div className="font-section-name">Co umíme</div>
          <div className="font-important">
            Aplikace napříč firemními potřebami
          </div>
        </Col>

        <Col
          md={9}
          className="d-flex flex-row flex-wrap justify-content-center"
        >
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PictureDashboard}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">DASHBOARD</div>
          </div>
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PictureSignin}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">SIGN-IN</div>
          </div>
          <div className="services-img">
            <img
              src={PictureDashboard}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">DASHBOARD</div>
          </div>
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PicturePayment}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">PAYMENT</div>
          </div>
          <div className="services-img hide"></div>
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PictureDashboard}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">DASHBOARDS</div>
          </div>
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PictureSignin}
              alt="Company Dashboard"
              className="services-img"
            />
            <div className="overlay-text">SIGN-IN</div>
          </div>
          <div className="services-img hide"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
