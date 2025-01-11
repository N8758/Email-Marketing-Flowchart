import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input', // Start node
    data: { label: 'Lead Source' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'default', // Delay node
    data: { label: 'Wait/Delay' },
    position: { x: 250, y: 150 },
  },
  {
    id: '3',
    type: 'output', // Email node
    data: { label: 'Cold Email' },
    position: { x: 250, y: 300 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const FlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleSave = () => {
    const flowData = { nodes, edges };
    console.log('Saving flow:', flowData);

    // Save flow to the backend
    // Replace with your API endpoint
    fetch('http://localhost:5000/api/flows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flowData),
    })
      .then((response) => response.json())
      .then((data) => console.log('Saved:', data))
      .catch((error) => console.error('Error saving flow:', error));
  };

  return (
    <div style={{ height: '90vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Save Flow
      </button>
    </div>
  );
};

export default FlowChart;
