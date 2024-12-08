import PictureDashboard from "../assets/images/services/dashboard1.jpg";
import ModalWindow from "./../components/ModalWindow";
import { Container, Row, Col } from "react-bootstrap";
import { services } from "./../data.ts";
import "./../styles/styles.css";
import { useState, useEffect } from "react";

const Services = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [modalName, setModalName] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const clickResult = (name: number) => {
    setShowInfo(true);
    setModalName(name);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className="container-content-main sections firstone">
      <Row>
        <Col sm={12} md={12} lg={12} xl={3} id="our-servicies">
          <div className="font-section-name">Co umíme</div>
          <div className="font-important">
            Aplikace napříč firemními potřebami
          </div>
        </Col>

        <Col sm={12} md={12} lg={12} xl={9} className="mt-5">
          {services.map((item, index) => (
            <Row key={index}>
              {item.map((service, subIndex) => {
                if (service.type === "empty" && windowWidth < 992) {
                  return null;
                }

                return (
                  <Col key={subIndex} xs={12} md={6} lg={3}>
                    {service.id !== undefined && (
                      <div className="service-img-container">
                        <div className="services-img mb-5">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="img-fluid services-img"
                            onClick={() => clickResult(service.id)}
                          />
                          <div className="overlay-text">{service.title}</div>
                          {showInfo && modalName === service.id && (
                            <ModalWindow
                              showInfo={setShowInfo}
                              title={service.title}
                              about={service.about}
                              image={service.image}
                              link={service.link}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </Col>
                );
              })}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

// Dashboard app
// Payment component
// Sign-in component
// Report component

// TextCharts app
// NNTB app
// Loancalc app
// Website 

// Shortener
// Budget

export default Services;
