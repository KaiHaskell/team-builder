import React, { useState } from "react";
import "../App.css";
const TeamForm = props => {
  const [team, setTeam] = useState({ name: "", email: "", occupation: "" });

  const handleChanges = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "", email: "", occupation: "" });
  };
  return (
    <form className="formStyles" onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={team.name}
      />
      <label htmlFor="team">eMail: </label>
      <input
        id="email"
        name="email"
        type="text"
        value={team.email}
        onChange={handleChanges}
      />
      <label htmlFor="occupation">Occupation</label>
      <input
        id="occupation"
        name="occupation"
        type="text"
        value={team.occupation}
        onChange={handleChanges}
      />
      <button type="submit">Add member</button>
    </form>
  );
};

export default TeamForm;
