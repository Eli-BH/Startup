import { ProjectI } from "@/utils/interfaces";
import { motion as m } from "framer-motion";
import React from "react";

const ProjectCard = ({
  data,

  setCurrProject,
}: {
  data: ProjectI[];

  setCurrProject: any;
}) => {
  return (
    <div className="xl:w-1/2 relative   dark:bg-black dark:shadow-white  w-full dark:text-white dark:border-white h-auto lg:p-20  p-2 gap-10 xl:gap-20 border-4 rounded-sm border-black shadow-hard">
      {data[0]?.title && (
        <div>
          <h2 className="mb-2 xl:mb-20 font-mono font-semibold  xl:text-5xl text-lg text-balance">
            {data[0].title || "..."}
          </h2>
          <p className="font-mono my-8 text-balance font-light xl:text-xl text-base">
            <span className="font-semibold"> Description: </span>
            {data[0].projectDescription || "..."}
          </p>
          <p className="font-mono my-8 text-balance font-light xl:text-xl text-base">
            <span className="font-semibold">Difficulty: </span>
            {data[0].difficultyLevel || "..."}
          </p>
          <p className="font-mono my-8 text-balance font-light xl:text-xl text-base">
            <span className="font-semibold">Approx. Duration: </span>
            {data[0].approxDuration || "..."}
          </p>
          <p className="font-mono my-8 text-balance font-light xl:text-xl text-base">
            <span className="font-semibold">Technologies:</span>{" "}
            {data[0].technologies.map((tech) => tech.name).join(", ") || "..."}
          </p>
          <p className="font-mono my-8 text-balance font-light xl:text-xl text-base">
            <span className="font-semibold">Terminal Commands:</span>{" "}
            {data[0].terminalCommands || "..."}
          </p>
          {data[0].documentationNeeded.length && (
            <div className="font-mono mb-4 text-balance font-light xl:text-lg mt-10 text-base flex flex-col">
              <span className="font-semibold">Documentation Needed:</span>{" "}
              {data[0].documentationNeeded.map((doc) => (
                <m.a
                  whileHover={{ scale: 1.1, x: 10 }}
                  initial={{ scale: 1, x: 0 }}
                  key={doc}
                  href={doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {doc.split("/")[2]}
                </m.a>
              )) || "..."}
              {data[0].resources.length && (
                <div className="font-mono mb-4 text-balance font-light xl:text-lg text-base mt-10 flex flex-col">
                  <span className="font-semibold">Resources:</span>{" "}
                  {data[0].resources.map((resource) => (
                    <a
                      key={resource}
                      href={resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {resource.split("/")[2]}
                    </a>
                  )) || "..."}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="w-full mt-10 mb-2 ml-2 ">
        <button
          onClick={() => setCurrProject({} as ProjectI)}
          className="mr-auto tracking-widest font-semibold h-12 w-40 border-4 border-black shadow-hard hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-300 hover:-translate-x-1 hover:translate-y-1 hover:shadow-hardLow dark:shadow-white dark:border-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
