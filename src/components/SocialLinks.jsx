import React from 'react'
import gmail from '../assets/navlinks/gmail.png'
import github from '../assets/navlinks/github.png'
import linkedin from "../assets/navlinks/linkedin.png";
import resume from "../assets/navlinks/resume.png";

const SocialLinks = () => {
    const links = [
      {
        id: 1,
        child: (
          <>
            LinkedIn <img src={linkedin} alt="Linkedin" className="w-9" />
          </>
        ),
        href: "https://www.linkedin.com/in/johir-rihan-87391a257/",
      },
      {
        id: 2,
        child: (
          <>
            GitHub <img src={github} alt="Github" className="w-9" />
          </>
        ),
        href: "https://github.com/JOHIRRIHAN",
      },
      {
        id: 3,
        child: (
          <>
            Email <img src={gmail} alt="Email" className="w-7" />
          </>
        ),
        href: "jr7718301@gmail.com",
      },
      {
        id: 4,
        child: (
          <>
            Resume <img src={resume} alt="Resume" className="w-7" />
          </>
        ),
        href: "/public/Johir-Rihan-CV.pdf",
        style: "rounded-br-md",
        download: true,
      },
    ];

  return (
    <div className="hidden md:block flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex items-center w-40 h-10 px-2 pl-4 ml-[-140px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-r-lg bg-gray-500" +
              " " +
              style
            }
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
  );
}

export default SocialLinks