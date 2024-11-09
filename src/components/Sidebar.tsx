import React from 'react';
import { 
  MessageSquare, 
  BarChart2, 
  Settings, 
  Users, 
  PlusCircle,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: MessageSquare, label: 'Chatbots', active: true },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Users, label: 'Contacts' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Bridge</h1>
      </div>
      
      <button className="mx-6 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        <PlusCircle size={20} />
        <span>New Chatbot</span>
      </button>

      <nav className="mt-6 flex-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ${
              item.active
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;