import React, { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="bg-white border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                AI Tools Platform
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setIsAboutOpen(true)}
              >
                About
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-lg shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              About This Project
            </h2>
            <div className="prose max-w-none mb-8">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>A comprehensive platform showcasing cutting-edge AI tools and technologies</li>
                <li>Curated collection of AI-powered solutions for various use cases and industries</li>
                <li>Built with modern web technologies including Next.js, TypeScript, and Tailwind CSS</li>
                <li>Open-source project welcoming contributions from the developer community</li>
                <li>Regular updates with new AI tools and features</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Connect With Me
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/imharesh/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/LinkedIn-Connect%20with%20me-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                </a>
                <a href="https://x.com/imharesh20" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Twitter-Follow%20%40imharesh20-black?style=for-the-badge&logo=x&logoColor=white" alt="Twitter" />
                </a>
                <a href="https://github.com/imharesh" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-Follow%20%40imharesh-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </a>
                <a href="mailto:imharesh20@gmail.com">
                  <img src="https://img.shields.io/badge/Email-Send%20Message-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
                </a>
              </div>
              <p className="text-center text-indigo-600/80 mt-4 italic">
                Feel free to reach out for collaborations, questions, or just to say hi! I'm always excited to connect with fellow developers and tech enthusiasts. 🚀
              </p>
              <div className="flex justify-center mt-4">
                <img src="https://komarev.com/ghpvc/?username=imharesh&label=Profile%20Views&color=brightgreen&style=flat" alt="Profile Views" />
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-indigo-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            {new Date().getFullYear()} AI Tools Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
