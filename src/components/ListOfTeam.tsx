import "./../styles/styles.css";

import { team } from "../data.ts";
import { Row, Col } from "react-bootstrap";
const ListOfTeam = () => {
  return (
    <Row>
      {team.map((member, id) => {
        return (
          <Col
            key={id}
            sm={12}
            md={6}
            lg={3}
            className="d-flex text-center flex-column mb-4"
          >
            <img
              src={member.member}
              alt={member.name}
              className="img-fluid team-container-img m-lg-2 m-md-1 m-0"
            />
            <div>
              <div className="fs-5">{member.name}</div>
              <div className="font-grey">{member.role}</div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default ListOfTeam;
