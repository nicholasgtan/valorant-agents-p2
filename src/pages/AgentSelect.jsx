import { useState } from "react";
import AgentIcon from "../components/AgentIcon";
import BigImage from "../components/BigImage";

function AgentSelect({ agentData, allAgents, cb, cbb }) {
  const [bigImage, setBigImage] = useState([]);

  const handleClick = (e) => {
    if (e.target.value === "Duelist") {
      cbb(allAgents.filter((d) => d.role.displayName === "Duelist"));
    } else if (e.target.value === "Initiator") {
      cbb(allAgents.filter((d) => d.role.displayName === "Initiator"));
    } else if (e.target.value === "Controller") {
      cbb(allAgents.filter((d) => d.role.displayName === "Controller"));
    } else if (e.target.value === "Sentinel") {
      cbb(allAgents.filter((d) => d.role.displayName === "Sentinel"));
    } else {
      cbb(allAgents);
    }
  };

  return (
    <main className="charSelect">
      <BigImage image={bigImage} />
      <div>
        <p>Select your Agent:</p>
        <button onClick={handleClick}>Show All</button>{" "}
        <button value="Duelist" onClick={handleClick}>
          Duelist
        </button>{" "}
        <button value="Initiator" onClick={handleClick}>
          Initiator
        </button>{" "}
        <button value="Controller" onClick={handleClick}>
          Controller
        </button>{" "}
        <button value="Sentinel" onClick={handleClick}>
          Sentinel
        </button>
        <br />
        <br />
        {agentData.map((image) => (
          <AgentIcon
            img={image}
            key={image.uuid}
            callback={setBigImage}
            callback2={cb}
          />
        ))}
      </div>
    </main>
  );
}

export default AgentSelect;
