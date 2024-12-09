import ModalWindow from "./../components/ModalWindow";
import { Col } from "react-bootstrap";

interface ServiceGridProps {
  item: any[];
  windowWidth: number;
  showInfo: boolean;
  modalName: number;
  clickResult: (name: number) => void;
  setShowInfo: (showInfo: boolean) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
  item,
  windowWidth,
  showInfo,
  modalName,
  clickResult,
  setShowInfo,
}) => {
  return (
    <>
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
    </>
  );
};

export default ServiceGrid;
