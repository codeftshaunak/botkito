import { Clock, GitBranch, Image, MessageSquare, Plus, Search } from 'lucide-react';
import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import { useFlowStore } from '../store/flowStore';
import CustomNode from './nodes/CustomNode';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const FlowBuilder = () => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode
  } = useFlowStore();

  const components = [
    { icon: MessageSquare, label: 'Text Message', type: 'text' },
    { icon: Image, label: 'Media Message', type: 'media' },
    { icon: Clock, label: 'Delay', type: 'delay' },
    { icon: GitBranch, label: 'Condition', type: 'condition' }
  ];

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow') as any;
      const position = {
        x: event.clientX - 250,
        y: event.clientY - 100,
      };

      addNode(type, position);
    },
    [addNode]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="flex-1 flex">
      {/* Components Panel */}
      <div className="w-72 glass-panel border-r border-white/20 p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search components"
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>

        <div className="mt-6 space-y-3">
          {components.map((component) => (
            <div
              key={component.label}
              draggable
              onDragStart={(e) => onDragStart(e, component.type)}
              className="group flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg cursor-move hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <component.icon size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {component.label}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Plus size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-500">Drag to add</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flow Canvas */}
      <div className="flex-1 h-full" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50 w-5"
        >
          <Background color="#94a3b8" gap={16} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowBuilder;