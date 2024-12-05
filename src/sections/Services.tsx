import PictureDashboard from "../assets/images/services/dashboard1.jpg";
import PicturePayment from "../assets/images/services/payment1.jpg";
import PictureSignin from "../assets/images/services/signin1.jpg";
import ModalWindow from "./../components/ModalWindow";
import { Container, Row, Col } from "react-bootstrap";
import { services } from "./../data.ts";
import "./../styles/styles.css";
import { useState } from "react";

const Services = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [modalName, setModalName] = useState<number>();

  const clickResult = (name: number) => {
    setShowInfo(true);
    setModalName(name);
  };

  return (
    <Container className="container-content-main sections firstone">
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
              className="img-fluid services-img"
              onClick={() => clickResult(0)}
            />
            {showInfo && modalName === 0 && (
              <ModalWindow
                showInfo={setShowInfo}
                title={services[modalName].title}
                about={services[modalName].about}
                image={services[modalName].image}
                link={services[modalName].link}
              />
            )}
            <div className="overlay-text">DASHBOARD</div>
          </div>

          <div className="services-img hide"></div>

          <div className="services-img">
            <img
              src={PictureSignin}
              alt="Company Dashboard"
              className="img-fluid services-img"
              onClick={() => clickResult(1)}
            />
            {showInfo && modalName === 1 && (
              <ModalWindow
                showInfo={setShowInfo}
                title={services[modalName].title}
                about={services[modalName].about}
                image={services[modalName].image}
                link={services[modalName].link}
              />
            )}
            <div className="overlay-text">SIGN-IN</div>
          </div>
          <div className="services-img">
            <img
              src={PictureDashboard}
              alt="Company Dashboard"
              className="img-fluid services-img"
            />
            <div className="overlay-text">DASHBOARD</div>
          </div>

          <div className="services-img hide"></div>

          <div className="services-img">
            <img
              src={PicturePayment}
              alt="Company Dashboard"
              className="img-fluid services-img"
            />
            <div className="overlay-text">PAYMENT</div>
          </div>
          <div className="services-img hide"></div>
          <div className="services-img hide"></div>
          <div className="services-img">
            <img
              src={PictureDashboard}
              alt="Company Dashboard"
              className="img-fluid services-img"
            />
            <div className="overlay-text">DASHBOARDS</div>
          </div>

          <div className="services-img hide"></div>

          <div className="services-img">
            <img
              src={PictureSignin}
              alt="Company Dashboard"
              className="img-fluid services-img"
            />
            <div className="overlay-text">SIGN-IN</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
