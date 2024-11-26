import React from "react";
import { team } from "../data.ts";
const TeamMembers = () => {
  return (
    <div className="d-flex flex-row ">
      {team.map((member) => {
        return (
          <div className="me-5">
            <img src={member.member} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
