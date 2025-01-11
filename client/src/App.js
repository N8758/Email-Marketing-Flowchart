import React from "react";
import FlowChart from "./components/FlowChart";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "10px" }}>
        <h1>Email Marketing Flowchart Builder</h1>
        <FlowChart />
      </div>
    </div>
  );
}

export default App;
