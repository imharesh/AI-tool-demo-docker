'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import Filters from '../components/Filters';
import ToolCard from '../components/ToolCard';
import { categories, aiTools } from '../data/aiTools';
import { FilterState } from '../types';

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    subcategory: '',
    searchQuery: '',
    isFree: false,
  });

  const filteredTools = aiTools.filter((tool) => {
    if (filters.category && tool.category !== filters.category) return false;
    if (filters.subcategory && tool.subcategory !== filters.subcategory) return false;
    if (filters.isFree && !tool.isFree) return false;
    if (
      filters.searchQuery &&
      !tool.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      !tool.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Discover the Best AI Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of AI-powered tools to enhance your productivity and creativity.
            Find the perfect tools for your needs, from content creation to development.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters
              categories={categories}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-indigo-50 p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} Found
                  </h2>
                  {filters.category && (
                    <p className="text-sm text-gray-500 mt-1">
                      in {filters.category}
                      {filters.subcategory && ` › ${filters.subcategory}`}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2 self-stretch sm:self-auto">
                  <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Most Popular
                  </button>
                  <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Recently Added
                  </button>
                </div>
              </div>

              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTools.map((tool, index) => (
                    <ToolCard key={tool.name} tool={tool} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No tools found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Try adjusting your filters or search query to find the AI tools you&apos;re looking for.
                  </p>
                  <button
                    onClick={() => setFilters({
                      category: '',
                      subcategory: '',
                      searchQuery: '',
                      isFree: false,
                    })}
                    className="mt-6 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
