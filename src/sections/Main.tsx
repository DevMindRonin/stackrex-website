import Services from "./Services";
import "./../styles/styles.css";
import { Container } from "react-bootstrap";
import Agile from "./Agile";
import Team from "./Team";
import Clients from "./Clients";
import Contacts from "./Contacts";

const HomeMain = () => {
  return (
    <Container fluid className="container-content-main" id="what-we-can-do">
      <Services />
      {/* <Agile />
      <Clients />
      <Team />
      <Contacts /> */}
    </Container>
  );
};

export default HomeMain;
