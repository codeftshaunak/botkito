import { Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 glass-panel border-b border-white/20 flex items-center justify-between px-6 relative z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Welcome Campaign</h2>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Active
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock size={14} />
            Last edited 2m ago
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <button className="btn btn-secondary">
          <Save size={18} className="mr-2" />
          Save
        </button>
        <button className="btn btn-secondary">
          <Play size={18} className="mr-2" />
          Test
        </button>
        <button className="btn btn-primary">
          <Share2 size={18} className="mr-2" />
          Deploy
        </button> */}
      </div>
    </header>
  );
};

export default Header;