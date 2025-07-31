import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowDropdown(false);
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyPortfolio
      </Link>

      <div className="flex gap-4 text-gray-700 text-xl">
        {location.pathname !== "/" && (
          <Link to="/" title="Expound"><FaHome /></Link>
        )}
        <Link to="/about" title="About"><FaUser /></Link>
        <Link to="/projects" title="Projects"><FaCode /></Link>
        <Link to="/contact" title="Contact"><FaEnvelope /></Link>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="focus:outline-none"
          >
            <FaUserCircle title="Profile" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-md z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar