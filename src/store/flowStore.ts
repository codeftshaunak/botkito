import { create } from 'zustand';
import { 
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges
} from 'reactflow';
import { FlowStore } from '../types';

let nodeId = 1;

export const useFlowStore = create<FlowStore>((set, get) => ({
  nodes: [
    {
      id: 'start',
      type: 'input',
      data: { type: 'text', content: 'Start' },
      position: { x: 250, y: 0 },
    },
  ],
  edges: [],
  
  addNode: (type, position) => {
    const newNode: Node = {
      id: `node-${nodeId++}`,
      type: 'custom',
      position,
      data: { type, content: `New ${type} node` },
    };

    set({ nodes: [...get().nodes, newNode] });
  },

  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
}));