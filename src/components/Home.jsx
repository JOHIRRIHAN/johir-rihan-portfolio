import React from "react";
import HeroImage from '../assets/hero-img.jpg'
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  // const transition = { type: "spring", duration: 3 };
  const text = "I'm a Front-end Developer".split(" ");
  return (
    <div
      name="Home"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white md:h-screen"
    >
      <div className="max-w-screen-xl pt-20 sm:pt-10 md:pt-10 mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-screen-md">
          <h2 className="text-4xl sm:text-7xl text-center lg:text-left md:text-left font-bold text-white txt-style">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: i / 6,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h2>
          <p className="text-gray-500 py-4 pr-2 text-lg text-center lg:text-left">
            I have experience with building and designing web applications.
            Currently, I love to work on web applications using technologies
            like ReactJs, TailwindCSS, NextJS & MongoDB.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              to="Projects"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="false"
          className="p-1 md:w-3/5"
        >
          {/*  */}

          {/*  */}

          <img
            src={HeroImage}
            alt="Myprofile"
            className="rounded-3xl mx-auto w-3/5 md:w-4/5 hover:shadow-lg hover:shadow-white duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
