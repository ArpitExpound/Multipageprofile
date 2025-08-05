import React from 'react';
import logo from '../assets/exp.png'
import { FaBolt, FaMobileAlt, FaRocket } from 'react-icons/fa';

const Expound = () => {
  return (
    <div className="space-y-12">
      {/* Logo + Intro */}
      <section className="text-center py-10 bg-white rounded-lg shadow">
        <img
          src ={logo}
          alt="Expound Technivo Logo"
          className="mx-auto mb-4 w-40 h-24 object-contain"
        />
        <h2 className="text-4xl font-bold text-blue-600 mb-2">Welcome to My Portfolio</h2>
        <p className="text-gray-600">I build fast, responsive, and modern web applications.</p>
      </section>

      {/* Feature Icons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-lg shadow">
        <div className="bg-white p-6 rounded shadow text-center">
          <FaBolt className="text-4xl text-blue-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-blue-500">Fast</h3>
          <p className="text-gray-600 mt-2">
            I focus on performance so websites load quickly and feel smooth.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <FaMobileAlt className="text-4xl text-blue-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-blue-500">Responsive</h3>
          <p className="text-gray-600 mt-2">
            Designs adapt perfectly across devices — mobile, tablet, or desktop.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <FaRocket className="text-4xl text-blue-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-blue-500">Modern</h3>
          <p className="text-gray-600 mt-2">
            I use the latest tools and design trends to keep interfaces clean and intuitive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Expound;
