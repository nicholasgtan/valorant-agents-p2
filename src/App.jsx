import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentSelect from "./pages/AgentSelect";
import AgentInfo from "./pages/AgentInfo";
import Team from "./pages/Team";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";

// const fetchAgents = async () => {
//   try {
//     const request = await fetch("https://valorant-api.com/v1/agents");
//     const data = await request.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// fetchAgents();

const request = await fetch("https://valorant-api.com/v1/agents");
const data = await request.json();
const dataArr = data.data;
const filterPlayable = dataArr.filter(
  (data) => data.isPlayableCharacter === true
);

function App() {
  const [agentData, setAgentData] = useState([]);
  const [chooseAgent, setChooseAgent] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const request = await fetch("https://valorant-api.com/v1/agents");
        const data = await request.json();
        const dataArr = data.data;
        const filterPlayable = dataArr.filter(
          (data) => data.isPlayableCharacter === true
        );
        setAgentData(filterPlayable);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AgentSelect
                  agentData={agentData}
                  data={filterPlayable}
                  cb={setChooseAgent}
                  cbb={setAgentData}
                />
              }
            />
            <Route
              path="/agent"
              element={<AgentInfo agentData={agentData} agent={chooseAgent} />}
            />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
