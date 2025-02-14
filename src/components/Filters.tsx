import React, { useState } from 'react';
import { Category, FilterState } from '../types';

interface FiltersProps {
  categories: Category[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export default function Filters({ categories, filters, setFilters }: FiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category,
      subcategory: '',
    });
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setFilters({
      ...filters,
      subcategory,
    });
  };

  const selectedCategory = categories.find((cat) => cat.name === filters.category);

  // Get a color for each category
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

  return (
    <div className="bg-white rounded-xl border border-indigo-50 p-6 sticky top-24 shadow-lg">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
        Discover Tools
      </h2>
      
      <div className="space-y-6">
        <div>
          <div className={`relative transition-all duration-200 ${
            isSearchFocused ? 'scale-105' : 'scale-100'
          }`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className={`h-5 w-5 transition-colors duration-200 ${
                isSearchFocused ? 'text-indigo-500' : 'text-gray-400'
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Search AI tools..."
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters({ ...filters, searchQuery: '' })}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => handleCategoryChange('')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                filters.category === ''
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Categories
            </button>
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                  filters.category === category.name
                    ? `bg-gradient-to-r ${getCategoryColor(index)} text-white font-medium shadow-md`
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory?.subcategories && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Subcategories</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleSubcategoryChange('')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                  filters.subcategory === ''
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                All Subcategories
              </button>
              {selectedCategory.subcategories.map((subcategory, index) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    filters.subcategory === subcategory
                      ? `bg-gradient-to-r ${getCategoryColor(index)} text-white font-medium shadow-md`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-100">
          <label className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="free"
                  type="checkbox"
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-colors cursor-pointer"
                  checked={filters.isFree}
                  onChange={(e) => setFilters({ ...filters, isFree: e.target.checked })}
                />
              </div>
              <div className="ml-3">
                <label htmlFor="free" className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  Free Tools Only
                </label>
                <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                  Show only free-to-use AI tools
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
