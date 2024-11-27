import "../styles/styles.css";
import TeamMembers from "../components/ListOfMembers";
import "./../styles/styles.css";
import { Container } from "react-bootstrap";

const Team = () => {
  return (
    <Container className="container-content-main-sections" id="our-team">
      <div>
        <div className="font-section-name">Naši klineti</div>
        <div className="font-important">Členové týmu</div>
        <TeamMembers />
        Mgr. Marek Dlouhý, marketingový manažer Mgr. Pavel Hála, webový
        specialista Alena Dvořáková, content manažerka JUDr. Soňa Kozová,
        advokátka
      </div>
    </Container>
  );
};

export default Team;
