// import PictureDashboard from "../assets/images/services/dashboard1.jpg";
// import ModalWindow from "./../components/ModalWindow";
// import { Container, Row, Col } from "react-bootstrap";
// import { services } from "./../data.ts";
// import "./../styles/styles.css";

// interface ServicesType {
//   onClick: (click: number) => void;
// }

// const ListOfServices = ({ onClick }: ServicesType) => {
//   return (
//     <Container>
//       <Row>
//         <Col
//           md={9}
//           className="d-flex flex-row flex-wrap justify-content-center"
//         >
//           {services.map((service, id) => {
//             return <p key={id}>{service.title}</p>;
//           })}
//           <div className="services-img hide"></div>

//           <div className="services-img">
//             <img
//               src={PictureDashboard}
//               alt="Company Dashboard"
//               className="img-fluid services-img"
//               onClick={() => clickResult(0)}
//             />
//             {showInfo && modalName === 0 && (
//               <ModalWindow
//                 showInfo={setShowInfo}
//                 title={services[modalName].title}
//                 about={services[modalName].about}
//                 image={services[modalName].image}
//                 link={services[modalName].link}
//               />
//             )}
//             <div className="overlay-text">
//               {modalName !== undefined &&
//                 services[modalName]?.title.toUpperCase()}
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ListOfServices;
