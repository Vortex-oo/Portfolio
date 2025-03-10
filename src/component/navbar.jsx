import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="bg-transparent">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full bg-transparent px-7"
    >
      <Tab setPosition={setPosition} to="home">Home</Tab>
      <Tab setPosition={setPosition} to="projects">Projects</Tab>
      <Tab setPosition={setPosition} to="about">About</Tab>
      <Tab setPosition={setPosition} to="contacts">Contacts</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#e9dfce] mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link to={to} smooth={true} duration={500}>
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};