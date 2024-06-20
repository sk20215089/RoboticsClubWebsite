import React from "react";

function Card(props) {
  const { title, description, image, techStacks, theme } = props;

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-lg shadow-md mx-auto my-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-lg hover:scale-110`}>
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
      <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
      <div className="flex flex-wrap">
        {techStacks.map((tech, index) => (
          <span key={index} className={`bg-gray-200 text-gray-700 rounded-full py-1 px-3 text-sm font-semibold mr-2 mb-2 ${theme === 'dark' ? 'text-gray-800' : ''}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
