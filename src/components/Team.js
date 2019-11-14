import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.teams.map(team => (
        <div className="team" key={team.id}>
          <p>Name: {team.name}</p>
          <p>Contact: {team.email}</p>
          <p>Occupation: {team.occupation}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
