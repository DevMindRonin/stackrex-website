import ModalWindow from "./../components/ModalWindow";
import { Container, Row, Col } from "react-bootstrap";
import { services } from "./../data.ts";
import "./../styles/styles.css";
import { useState, useEffect } from "react";
import ListOfServices from "./../components/ListOfServices";

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
              <ListOfServices
                item={item}
                windowWidth={windowWidth}
                showInfo={showInfo}
                modalName={modalName}
                clickResult={clickResult}
                setShowInfo={setShowInfo}
              />
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
