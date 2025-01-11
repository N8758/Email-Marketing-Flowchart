import React from "react";

const CustomNode = ({ data }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #007bff",
        borderRadius: "5px",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
      }}
    >
      <strong>{data.label}</strong>
    </div>
  );
};

export default CustomNode;
