"use client";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion, spring, useAnimation } from "framer-motion";
import { bungee } from "@/app/fonts";
import Link from "next/link";

const NavBar = () => {
  const controls = useAnimation();
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // I want a space as a character
  const text: string = "Startup";
  const textArr: string[] = text.split("");

  const defaultAnimations = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
    },
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      await controls.start("visible");
      await controls.start("hidden");
    }, 3000); // Adjust timing as needed for your effect

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div
      className={`h-16 lg:h-32 w-full dark:text-white text-black absolute top-0 left-0 right-0
        flex items-center justify-between  px-10  xl:px-80 lg:px-40  text-2xl font-bold  ${bungee.className}`}
    >
      <Link href="/">
        <motion.span
          initial="hidden"
          animate={controls}
          transition={{ staggerChildren: 0.1 }}
          className="text-2xl lg:text-5xl cursor-pointer"
          aria-hidden
        >
          {textArr.map((letter, index) => (
            <motion.span
              className="inline-block"
              variants={defaultAnimations}
              key={index}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </Link>
      <div
        onClick={() => toggleDark()}
        className={`lg:w-10 w-8 lg:h-10 h-8 bg-black dark:bg-white flex justify-center items-center rounded-full overflow-hidden cursor-pointer`}
      >
        <motion.div
          animate={{ rotate: dark ? 180 : 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ rotate: 0, opacity: 0 }}
        >
          {dark ? <MdLightMode fill="black" /> : <MdDarkMode fill="white" />}
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
