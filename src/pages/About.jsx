import React from 'react';
import { FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <div className="space-y-12">
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          I’m a full-stack developer currently working at <strong>Expound Technivo</strong>, where I build scalable web applications and help improve user experience through clean design and optimized code.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
          <FaTools /> Skills
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React, JavaScript, Node.js</li>
          <li>Tailwind CSS & Responsive UI</li>
          <li>REST APIs & State Management</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
