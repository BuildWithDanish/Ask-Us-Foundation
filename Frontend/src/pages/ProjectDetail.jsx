import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));  

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF9F6]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h2>
        <Link to="/" className="text-orange-500 font-medium hover:underline">
          &larr; Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-800 pb-24">

      {/* 1. Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">

        {/* 2. Header / Title Area */}
        <div className="mb-8 max-w-4xl">
          <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">
            <span className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            {project.title}
          </h1>
        </div>

        {/* 3. Featured Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden mb-12 shadow-sm relative bg-gray-200">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4. Main Content */}
        <div className='w-full'>
          <div className="lg:col-span-2">

            {/* Tabs for Navigation */}
            <div className="flex space-x-8 border-b border-gray-200 mb-8">
              <button className="text-lg font-bold text-gray-900 border-b-2 border-orange-500 pb-4 -mb-[2px]">
                Our Story
              </button>
            </div>

            {/* Dynamic Rich Text Content (from projectsData.js) */}
            <div
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: project.story }}
            />
          </div>

          <Link
            to="/donate"
            className="w-full mt-4 md:w-fit mx-auto sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;