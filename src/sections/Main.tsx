import "./../styles/styles.css";
import Services from "./Services";
import { Container } from "react-bootstrap";
import Agile from "./Agile";
import Team from "./Team";
import Clients from "./Clients";
import RunningText from "../components/RunningText";
import Stack from "./Stack";
const HomeMain = () => {
  return (
    <>
      <Container fluid className="container-content-main" id="what-we-can-do">
        <Services />
        <RunningText />
        <Clients />
        <Agile />
        <Stack />
        <Team />
      </Container>
    </>
  );
};

export default HomeMain;
