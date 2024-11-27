import "./../styles/styles.css";
import Services from "./Services";
import { Container } from "react-bootstrap";
import Agile from "./Agile";
import Team from "./Team";
import Clients from "./Clients";

const HomeMain = () => {
  return (
    <>
      <Container fluid className="container-content-main" id="what-we-can-do">
        <Services />
        <Agile />
        <Clients />
        <Team />
      </Container>
    </>
  );
};

export default HomeMain;
