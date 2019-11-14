import React, { useState } from "react";
import ReactDOM from "react-dom";

import Team from "./components/Team";
import TeamForm from "./components/TeamForm";

import "./index.css";

function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Kai Haskell",
      email: "me@kaihaskell.com",
      occupation: "Web 25"
    }
  ]);
  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      occupation: team.occupation
    };
    setTeams([...teams, newTeam]);
  };
  return (
    <div className="App">
      <h1>The Crew</h1>

      <TeamForm addNewTeam={addNewTeam} />
      <Team teams={teams} />
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
