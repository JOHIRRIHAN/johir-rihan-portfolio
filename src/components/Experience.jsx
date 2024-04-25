import React from "react";
import boot from "../assets/bootstrap.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javas from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import next from "../assets/nextjs.png";
import node from "../assets/node.png";
import post from "../assets/postgre.png";
import react from "../assets/react.png";
import tailcss from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import graphQL from "../assets/gql.png";
import jqery from "../assets/jquery.png";
import jest from "../assets/jest.png";
import typescript from "../assets/typescript.png";
import supabase from "../assets/supabase.png";
import express from "../assets/express.png";
import socket from "../assets/socket.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      dataAos: "zoom-out",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      dataAos: "zoom-in",
    },

    {
      id: 3,
      src: tailcss,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
      dataAos: "zoom-out",
    },
    {
      id: 4,
      src: boot,
      title: "Bootstrap",
      style: "shadow-violet-500",
      dataAos: "zoom-out",
    },
    {
      id: 5,
      src: javas,
      title: "JavaScript",
      style: "shadow-yellow-500",
      dataAos: "zoom-in",
    },
    {
      id: 6,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
      dataAos: "zoom-out",
    },
    {
      id: 7,
      src: jqery,
      title: "JQuery",
      style: "shadow-blue-500 icon-bigger",
      dataAos: "zoom-out",
    },
    {
      id: 8,
      src: react,
      title: "ReactJS",
      style: "shadow-blue-400",
      dataAos: "zoom-in",
    },
    {
      id: 15,
      src: supabase,
      title: "Supabase",
      style: "shadow-green-400",
      dataAos: "zoom-out",
    },
    {
      id: 16,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
      dataAos: "zoom-out",
    },
    {
      id: 17,
      src: express,
      title: "ExpressJS",
      style: "shadow-gray-400",
      dataAos: "zoom-in",
    },
    {
      id: 19,
      src: github,
      title: "GitHub",
      style: "shadow-gray-200",
      dataAos: "zoom-out",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full text-white">
        <div className="pb-3 flex justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>
        <p className="py-6 text-center text-xl" >
          These are the technologies I have worked with
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 text-center py-4">
          {techs.map(({ id, src, title, style, dataAos }) => (
            <div
              key={id}
              className={`shadow-md flex flex-col justify-between gap-4 py-2 rounded-lg p-2 ${style}`}
              data-aos={dataAos}
              data-aos-once="false"
              data-aos-duration="1500"
            >
              <img
                src={src}
                alt=""
                className={`w-16 mx-auto ${
                  title === "JQuery"
                    ? "w-20 h-20"
                    : title === "Jest"
                    ? "w-20 h-20"
                    : ""
                }  `}
              />
              <p className="text-lg font-txt">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
