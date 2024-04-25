import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import gmail from "../assets/navlinks/gmail.png";
import github from "../assets/navlinks/github.png";
import linkedin from "../assets/navlinks/linkedin.png";
import resume from "../assets/navlinks/resume.png";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const socials = [
    {
      id: 1,
      child: (
        <>
          <img src={linkedin} alt="Linkedin" className="w-9" />
        </>
      ),
      href: "https://www.linkedin.com/in/johir-rihan-87391a257/",
    },
    {
      id: 2,
      child: (
        <>
          <img src={github} alt="Github" className="w-9" />
        </>
      ),
      href: "https://github.com/JOHIRRIHAN",
    },
    {
      id: 3,
      child: (
        <>
          <img src={gmail} alt="Email" className="w-7" />
        </>
      ),
      href: "jr7718301@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <img src={resume} alt="Resume" className="w-7" />
        </>
      ),
      href: "/public/Johir-Rihan-CV.pdf",
      download: true,
    },
  ];

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.6,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-30 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
      <div>
        <h1 className="text-5xl font-signature ml-2">Johir Rihan</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-lg text-gray-500 hover:scale-105 duration-300 hover:text-gray-200"
          >
            <Link to={link} smooth duration={600} className="nav-styled">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-white p-10"
          >
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 overflow-auto">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize text-4xl py-4"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    data-aos="zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-duration="700"
                  >
                    {link}
                  </Link>
                </li>
              ))}

              {/* Social Links */}
              <div className="flex pt-3">
                <ul className="flex space-x-2">
                  {socials.map(({ id, child, href, download }) => (
                    <li
                      key={id}
                      className="flex items-center rounded-xl p-1 bg-slate-600"
                      data-aos="fade-up"
                      data-aos-easing="ease-in"
                      data-aos-duration="700"
                      data-aos-delay={(id * 200).toString()}
                    >
                      <a
                        href={href}
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
