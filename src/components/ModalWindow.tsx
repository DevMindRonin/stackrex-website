import { Modal, Button, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

interface Services {
  showInfo: (setShowInfo: boolean) => void;
  title: string;
  about: string;
  image: string;
  link: string;
}

const ModalWindow = ({ showInfo, title, about, image, link }: Services) => {
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
          <a href={link} target="_blank" rel="noreferrer">
            <img className="img-fluid pb-5 border" src={image} alt="" />
          </a>
          <div className="fw-bold pt-3">Popis: </div>
          {about}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={link} target="_blank">
            Ukázka
          </Button>
          <Button variant="secondary" onClick={handleDisableModal}>
            Zavřít
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalWindow;
