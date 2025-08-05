import React from 'react';
import { FaReact, FaTools } from 'react-icons/fa';
import { RiFileList3Line } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="space-y-12">
      {/* Project Overview 1 */}
      <section className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
        <FaReact className="text-3xl text-blue-500 mt-1" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Portfolio Website</h3>
          <p className="text-gray-600">
            This portfolio was built using React and Tailwind CSS. It features multiple pages, dynamic routing, responsive design, and showcases my projects and skills in an organized layout.
          </p>
        </div>
      </section>

      {/* Project Overview 2 */}
      <section className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
        <RiFileList3Line className="text-3xl text-blue-500 mt-1" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">To-Do List App</h3>
          <p className="text-gray-600">
           Created a dynamic list where users can add, mark as complete, and delete tasks. Features sorting and searching of tasks as well as option to dowload individual and all tasks.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
          <FaTools /> Technologies Used
        </h3>
        <div className="flex flex-wrap gap-4">
          {['React', 'Tailwind', 'JavaScript', 'APIs'].map((tech) => (
            <span key={tech} className="bg-white px-4 py-2 rounded shadow text-sm text-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
