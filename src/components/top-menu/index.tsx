import React from 'react';

function TopMenu() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-4" />
          <ul className="flex space-x-4">
            <li><a href="#">Menu Item 1</a></li>
            <li><a href="#">Menu Item 2</a></li>
            {/* Add more menu items */}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="px-2 py-1 rounded" />
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Search</button>
          {/* Add theme change and language section */}
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;
