import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { MessageSquare, Image, Clock, GitBranch } from 'lucide-react';

const icons = {
  text: MessageSquare,
  media: Image,
  delay: Clock,
  condition: GitBranch,
};

const getNodeStyles = (type: keyof typeof icons) => {
  const styles = {
    text: 'from-blue-50 to-blue-100/50 border-blue-200',
    media: 'from-purple-50 to-purple-100/50 border-purple-200',
    delay: 'from-amber-50 to-amber-100/50 border-amber-200',
    condition: 'from-emerald-50 to-emerald-100/50 border-emerald-200',
  };
  return styles[type];
};

const getIconStyles = (type: keyof typeof icons) => {
  const styles = {
    text: 'text-blue-600',
    media: 'text-purple-600',
    delay: 'text-amber-600',
    condition: 'text-emerald-600',
  };
  return styles[type];
};

const CustomNode = ({ data }: { data: { type: keyof typeof icons; content: string } }) => {
  const Icon = icons[data.type];
  const nodeStyle = getNodeStyles(data.type);
  const iconStyle = getIconStyles(data.type);

  return (
    <div className={`animate-slide-in bg-gradient-to-br ${nodeStyle} rounded-xl shadow-lg p-4 min-w-[240px] border-2`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center ${iconStyle}`}>
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900 capitalize">{data.type}</div>
          <div className="text-xs text-gray-500 mt-0.5">{data.content}</div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
};

export default memo(CustomNode);