import React from "react";

const Sidebar = () => {
  const handleAddNode = () => {
    alert("Add node functionality is coming soon!");
  };

  return (
    <div className="sidebar">
      <h2>Controls</h2>
      <button onClick={handleAddNode}>Add Node</button>
      <button onClick={() => alert("Coming Soon!")}>Save Flowchart</button>
    </div>
  );
};

export default Sidebar;
