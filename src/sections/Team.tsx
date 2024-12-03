import ListOfMembers from "../components/ListOfMembers";
import { Container } from "react-bootstrap";
import "./../styles/styles.css";

const Team = () => {
  return (
    <Container className="container-content-main sections" id="our-team">
      <div>
        <div className="font-section-name">Naši klineti</div>
        <div className="font-important mb-5">Členové týmu</div>
      </div>
      <ListOfMembers />
    </Container>
  );
};

export default Team;
