import React, { useState } from 'react';

const initialMaterials = [
  { id: 1, title: 'Introduction to React', type: 'video', bookmarked: false, viewed: false },
  { id: 2, title: 'JavaScript Basics', type: 'pdf', bookmarked: false, viewed: false },
  { id: 3, title: 'CSS Flexbox Guide', type: 'pdf', bookmarked: false, viewed: false },
  { id: 4, title: 'React Hooks Explained', type: 'video', bookmarked: false, viewed: false },
  { id: 5, title: 'Node.js for Beginners', type: 'quiz', bookmarked: false, viewed: false },
  { id: 6, title: 'Advanced JavaScript', type: 'pdf', bookmarked: false, viewed: false },
];

const StudyMaterialsScreen: React.FC = () => {
  const [materials, setMaterials] = useState(initialMaterials);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [showViewed, setShowViewed] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleBookmark = (id: number) => {
    setMaterials(prev =>
      prev.map(material =>
        material.id === id
          ? { ...material, bookmarked: !material.bookmarked }
          : material
      )
    );
  };

  const toggleViewed = (id: number) => {
    setMaterials(prev =>
      prev.map(material =>
        material.id === id
          ? { ...material, viewed: !material.viewed }
          : material
      )
    );
  };

  let filtered = materials.filter(material =>
    material.title.toLowerCase().includes(searchTerm)
  );
  if (showBookmarked) filtered = filtered.filter(m => m.bookmarked);
  if (showViewed) filtered = filtered.filter(m => m.viewed);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Study Materials
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our comprehensive collection of study materials to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setShowBookmarked(!showBookmarked)}
                className={`px-4 py-2 rounded-lg ${showBookmarked ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {showBookmarked ? 'Show All' : 'Show Bookmarked'}
              </button>
              <button
                onClick={() => setShowViewed(!showViewed)}
                className={`px-4 py-2 rounded-lg ${showViewed ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {showViewed ? 'Show All' : 'Show Viewed'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Materials List Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(material => (
              <div key={material.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{material.title}</h3>
                  <button onClick={() => toggleBookmark(material.id)} aria-label="Toggle bookmark">
                    <svg
                      className={`w-6 h-6 ${material.bookmarked ? 'text-yellow-500' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 3a2 2 0 00-2 2v12l7-4 7 4V5a2 2 0 00-2-2H5z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  {material.type === 'pdf' && (
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-4-4z" />
                    </svg>
                  )}
                  {material.type === 'video' && (
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L2 7h16L10 2zM2 8v10h16V8H2z" />
                    </svg>
                  )}
                  {material.type === 'quiz' && (
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 11H8v-2h1v2zm0-4H8V7h1v2zm3 4h-1v-2h1v2zm0-4h-1V7h1v2z" />
                    </svg>
                  )}
                  <span className="text-gray-600">{material.type.charAt(0).toUpperCase() + material.type.slice(1)}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => toggleViewed(material.id)}
                    className={`px-3 py-1 rounded ${material.viewed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {material.viewed ? 'Viewed' : 'Mark as Viewed'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterialsScreen;
