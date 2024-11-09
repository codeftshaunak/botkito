import { Node, Edge } from 'reactflow';

export interface FlowNode extends Node {
  data: {
    type: 'text' | 'media' | 'condition' | 'delay';
    content: string;
  };
}

export interface FlowEdge extends Edge {}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'developer' | 'analyst';
  avatar: string;
}

export interface ChatbotStats {
  totalUsers: number;
  activeChats: number;
  messagesSent: number;
  responseRate: number;
}

export interface FlowStore {
  nodes: FlowNode[];
  edges: FlowEdge[];
  addNode: (type: FlowNode['data']['type'], position: { x: number; y: number }) => void;
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  onConnect: (connection: any) => void;
}