import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
  index: number;
}

const getCategoryColor = (index: number) => {
  const colors = [
    'from-pink-500 to-rose-500',
    'from-purple-500 to-indigo-500',
    'from-blue-500 to-cyan-500',
    'from-teal-500 to-emerald-500',
    'from-orange-500 to-amber-500'
  ];
  return colors[index % colors.length];
};

export default function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-indigo-50 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(index)} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity`} />
      
      <div className="relative p-6">
        <div className="flex justify-between items-start space-x-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
              {tool.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-200">
              {tool.description}
            </p>
          </div>
          <div className="flex flex-col items-end space-y-2 flex-shrink-0">
            {tool.isFree && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                Free
              </span>
            )}
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(index)} text-white shadow-sm`}>
              {tool.subcategory || tool.category}
            </span>
          </div>
        </div>

        {tool.features && tool.features.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {tool.url && (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors group-hover:translate-x-1 transform transition-transform"
              >
                Visit Website
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
