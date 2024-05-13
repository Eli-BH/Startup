"use client";
import { useEffect, useState } from "react";
import { useAppSelector as useSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { motion as m } from "framer-motion";
import { ProjectI } from "@/utils/interfaces";
import ResponseCard from "@/components/ResponseCard";

import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Response() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProjectI[]>([]);
  const [currProject, setCurrProject] = useState<ProjectI>({} as ProjectI);

  const startup = useSelector((state: RootState) => state.startup);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            duration: startup.length,
            difficulty: startup.difficulty,
            values: startup.values.map((item) => item.name),
          }),
        });

        if (!response.ok) {
          setError(true);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error: any) {
        setError(true);
        setLoading(false);
      }
    };

    fetchApi();

    return () => {
      setData([]);
      setLoading(false);
      setError(false);
    };
  }, [startup]);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen xl:pt-64 lg:pt-40 pt-20 text-black dark:text-white transition ease-in-out duration-500 flex-col items-center justify-start xl:p-24  p-8  bg-white dark:bg-black"
    >
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/images/loadingSvg.svg"
            alt="loading"
            className="mt-40 dark:hidden block"
            width={100}
            height={100}
          />
          <Image
            src="/images/loadingWhite.svg"
            alt="loading"
            className="mt-40 hidden dark:block "
            width={100}
            height={100}
          />
        </div>
      ) : error ? (
        <p>Error</p>
      ) : !currProject.title ? (
        <div className="xl:w-1/2   w-full h-full lg:p-10  p-2 grid place-items-center gap-10 xl:gap-20  xl:grid-cols-2 grid-cols-1 xl:grid-rows-2 grid-rows-1">
          {data.length > 0 &&
            data.map((project: ProjectI, index: number) => (
              <ResponseCard
                project={project}
                index={index}
                setCurrProject={setCurrProject}
              />
            ))}
        </div>
      ) : (
        <ProjectCard data={[currProject]} setCurrProject={setCurrProject} />
      )}
    </m.main>
  );
}
