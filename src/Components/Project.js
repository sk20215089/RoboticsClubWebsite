import React from "react";
import Card from "../Components/Card";
import data from "../constants/projects.json";

console.log(data);

function Project(props) {
  const { theme } = props;
  const { setTheme } = props;
  return (
    <div className={` ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div
        className={`mx-auto max-w-screen-2xl px-6 sm:px-6 lg:px-8  min-h-screen
        ${theme === "dark" ? "text-white" : "text-black"}
        `}
      >
        <div className="flex justify-center items-center text-6xl p-6 font-extrabold">
          PROJECTS
        </div>
        <div className=" flex flex-wrap gap-6 p-6 ">
          {data.map((project, index) => {
            return (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                techStacks={project.techStacks}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
