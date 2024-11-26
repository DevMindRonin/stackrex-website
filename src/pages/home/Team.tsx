import React from "react";
import "../../styles/styles.css";
import TeamMembers from "../../components/ListOfMembers";

const Team = () => {
  return (
    <div>
      <div className="font-section-name">Naši klineti</div>
      <div className="font-important">Členové týmu</div>
      <TeamMembers />
      Mgr. Marek Dlouhý, marketingový manažer Mgr. Pavel Hála, webový
      specialista Alena Dvořáková, content manažerka JUDr. Soňa Kozová,
      advokátka
    </div>
  );
};

export default Team;
