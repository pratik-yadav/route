import React from 'react';

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        {/* Intro Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hello, I'm Prateek</h1>
          <p className="text-lg text-gray-600 mb-4">
            I'm a passionate web developer with expertise in front-end technologies and UI/UX design. 
            I enjoy creating responsive and interactive web applications that provide seamless user experiences.
          </p>
          <p className="text-lg text-gray-600">
            I'm constantly learning new technologies and improving my skills to stay up to date with the ever-evolving web development landscape.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">HTML5</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">CSS3</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">React</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">Node.js</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">Express</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-blue-500">✔️</span>
              <span className="text-gray-700">Git & GitHub</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Info;
