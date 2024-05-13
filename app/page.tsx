"use client";

import React from "react";
import { bungee } from "./fonts";
import { ItemI } from "@/utils/interfaces";
import { items, len, diff } from "@/utils/arrys";

import type { RootState } from "@/redux/store";

import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "@/redux/hooks";
import {
  setSuggestions,
  setDifficulty,
  setLength,
  setValues,
  setInputValue,
} from "@/redux/slices/startupSlice";
import Link from "next/link";

export default function Home() {
  const startup = useSelector((state: RootState) => state.startup);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(setInputValue(value));
    if (value.length > 0) {
      const filteredSuggestions = items.filter((item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase())
      );
      dispatch(setSuggestions(filteredSuggestions));
    } else {
      dispatch(setSuggestions([]));
    }
  };

  const handleSuggestionClick = (name: string) => {
    dispatch(setSuggestions([]));
    if (startup.values.find((item) => item.name === name)) {
      return;
    }

    dispatch(setInputValue(""));
    dispatch(
      setValues([
        ...startup.values,
        items.find((item) => item.name === name) as ItemI,
      ])
    );
  };

  return (
    <main className="flex min-h-screen xl:pt-64 lg:pt-40 pt-20 text-black dark:text-white transition ease-in-out duration-500 flex-col items-center justify-start xl:p-24  p-8  bg-white dark:bg-black">
      <div className="w-full flex justify-start xl:w-1/3 lg:w-3/4 ">
        <h1
          className={`hidden xl:block xl:text-8xl text-3xl font-bold text-center tracking-widest ${bungee.className}`}
        >
          Startup
        </h1>
      </div>

      <section className="flex lg:gap-10  lg:mt-6 gap-5 flex-col h-full xl:w-1/3 lg:w-3/4 w-full   justify-center items-start">
        <p className="font-bold text-sm lg:text-xl ">
          A platform to help you get started with your next big idea. We use AI
          to give you some great ideas for programming projects to get you
          started coding with confidence. All you have to do to get started is
          enter the technologies you want to use, and a couple of filters for
          personalization, and Startup will do the rest.
        </p>

        <div className="relative xl:mt-4  w-full">
          <input
            type="text"
            className="w-full outline-none rounded-sm border-black border-4 dark:bg-black dark:border-white dark:text-white px-4 dark:shadow-white py-2  mt-4  shadow-black shadow-hard font-semibold text-sm xl:text-lg"
            placeholder="Enter your tech (e.g. JavaScript) "
            value={startup.inputVlaue}
            onChange={handleInputChange}
          />
          {startup.suggestions.length > 0 && (
            <ul className="absolute w-full border-4 border-black dark:border-white mt-1 max-h-60 overflow-auto">
              {startup.suggestions.map((suggestion) => (
                <li
                  key={suggestion.name}
                  className="px-4 py-2 bg-white dark:bg-black dark:hover:text-black hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.name)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-full pl-2 flex gap-10 ">
          <button
            onClick={() => {
              dispatch(
                setLength(startup.length === 2 ? 0 : startup.length + 1)
              );
            }}
            className="rounded-sm px-4 lg:h-12 font-semibold tracking-wider py-2 dark:hover border-black border-4 lg:w-36 shadow-hard hover:shadow-hardLow hover:-translate-x-1 hover:translate-y-1 transition-all active:bg-black active:text-white dark:shadow-white dark:border-white  w-32 h-10 text-xs lg:text-md"
          >
            {len[startup.length]}
          </button>
          <button
            onClick={() => {
              dispatch(
                setDifficulty(
                  startup.difficulty === 2 ? 0 : startup.difficulty + 1
                )
              );
            }}
            className="rounded-sm px-4 lg:h-12  font-semibold tracking-wider py-2 dark:hover border-black border-4 lg:w-36 shadow-hard hover:shadow-hardLow hover:-translate-x-1 hover:translate-y-1 transition-all active:bg-black active:text-white dark:shadow-white dark:border-white  w-32 h-10 text-xs lg:text-md"
          >
            {diff[startup.difficulty]}
          </button>
        </div>

        <div className=" rounded-sm w-full no-scrollbar mt-4 overflow-y-scroll flex border-4 border-black h-40 flex-wrap dark:border-white dark:bg-black">
          {startup.values.map((value) => (
            <div
              key={value.name}
              onClick={() => {
                dispatch(
                  setValues(
                    startup.values.filter((item) => item.name !== value.name)
                  )
                );
              }}
              className="p-2 
               dark:bg-gray-800 cursor-pointer dark:text-white text-black m-1 h-10 border-4 border-black flex justify-center items-center font-semibold tracking-wider bg-gray-100 dark:border-white dark:hover:bg-gray-900 hover:bg-gray-200 transition-all"
            >
              {value.name}
            </div>
          ))}
        </div>
      </section>

      <div className="w-full mt-4 flex justify-center items-center">
        <Link href="/response">
          <button className="rounded-sm px-4 lg:h-16 lg:text-xl font-semibold tracking-wider py-2 dark:hover border-black border-4 lg:w-36 shadow-hard hover:shadow-hardLow hover:-translate-x-1 hover:translate-y-1 transition-all active:bg-black active:text-white dark:shadow-white dark:border-white  w-32 h-10  text-xs lg:text-md">
            Start
          </button>
        </Link>
      </div>
    </main>
  );
}
