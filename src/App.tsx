import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FlowBuilder from './components/FlowBuilder';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <FlowBuilder />
      </div>
    </div>
  );
}

export default App;