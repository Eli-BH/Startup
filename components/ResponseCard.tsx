import React, { SetStateAction } from "react";
import { ProjectI } from "../utils/interfaces";
import { motion as m } from "framer-motion";
React;

const ResponseCards = ({
  data,

  setCurrProject,
}: {
  data: ProjectI[];

  setCurrProject: any;
}) => {
  return (
    <div className="xl:w-1/2   w-full h-full lg:p-10  p-2 grid place-items-center gap-10 xl:gap-20  xl:grid-cols-2 grid-cols-1 xl:grid-rows-2 grid-rows-1">
      {data.length &&
        data.map((project: ProjectI, index: number) => (
          <m.div
            onClick={() => setCurrProject(project)}
            whileHover={{
              rotate: [0, 5, -5, 0],
              transition: { loop: Infinity, duration: 0.25 },
              scale: 1.05,
            }}
            initial={{ rotate: 0, scale: 1 }}
            key={index}
            className="xl:mx-3 cursor-pointer p-5 h-full border-4 border-black dark:border-white dark:shadow-white dark:shadow-hard shadow-hardLow bg-white dark:bg-black rounded-md "
          >
            <h2 className="mb-2 xl:mb-5 font-mono font-semibold  xl:text-3xl text-lg text-balance">
              {project.title || "..."}
            </h2>
            <p className="font-mono mb-4 text-balance font-light xl:text-lg text-base">
              <span className="font-semibold"> Description: </span>
              {project.projectDescription || "..."}
            </p>
            <p className="font-mono mb-4 text-balance font-light xl:text-lg text-base">
              <span className="font-semibold">Difficulty: </span>
              {project.difficultyLevel || "..."}
            </p>
            <p className="font-mono mb-4 text-balance font-light xl:text-lg text-base">
              <span className="font-semibold">Approx. Duration: </span>
              {project.approxDuration || "..."}
            </p>
            <p className="font-mono mb-4 text-balance font-light xl:text-lg text-base">
              <span className="font-semibold">Technologies:</span>{" "}
              {project.technologies.map((tech) => tech.name).join(", ") ||
                "..."}
            </p>
          </m.div>
        ))}
    </div>
  );
};

export default ResponseCards;
