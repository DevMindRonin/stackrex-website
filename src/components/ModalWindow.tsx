import { Modal, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";

interface Benefit {
  icon: string;
  subtitle: string;
  description: string;
}

interface ServicesType {
  showInfo: (setShowInfo: boolean) => void;
  title: string;
  about: string;
  benefits: Benefit[];
  image: string;
  link: string;
}

const ModalWindow = ({
  showInfo,
  title,
  about,
  benefits,
  image,
  link,
}: ServicesType) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleDisableModal = () => {
    setIsShow(false);
    showInfo(false);
  };

  return (
    <div>
      <Modal size="lg" show={isShow} onHide={handleDisableModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          {/* <a href={link} target="_blank" rel="noreferrer">
            <img className="img-fluid pb-5 border" src={image} alt="" />
          </a> */}

          <img className="img-fluid pb-5 border" src={image} alt="" />
          <div className="fw-bold pt-3">Popis: </div>
          <Row>
            <Col md={5} className="mb-3">
              {about}
            </Col>
            <Col md={7}>
              {benefits.map((benefit) => {
                return (
                  <div className="">
                    <Row>
                      <Col md={1}>
                        <span>{benefit.icon} </span>
                      </Col>
                      <Col md={11}>
                        <span>
                          <b>{benefit.subtitle}: </b>
                        </span>
                        <span>{benefit.description}</span>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" href={link} target="_blank">
            Ukázka
          </Button> */}
          <Button variant="secondary" onClick={handleDisableModal}>
            Zavřít
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalWindow;
