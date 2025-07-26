import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-200 shadow-md text-black">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 ml-3">
            Warnal Labs
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleDrawer}
            className="text-3xl text-gray-800 focus:outline-none mr-4"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full z-50 bg-white/10 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800 "></h2>
          <button onClick={toggleDrawer}>
            <FiX className="text-2xl text-gray-700 mr-2" />
          </button>
        </div>

<ul className="flex flex-col p-4 gap-4 text-white text-xl font-medium shadow-xl">
  {["Home", "About", "Services", "Contact"].map((item, index, arr) => (
    <li
      key={item}
      className={`
        w-full cursor-pointer
        transform transition-all ease-out
        ${open ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
        hover:text-yellow-300
        hover:text-xl
        hover:shadow-lg
        hover:bg-gray-800
        hover:rounded-lg
        p-2
      `}
      style={{
        transitionDelay: `${
          open
            ? index * 100 + 100
            : (arr.length - index) * 100
        }ms`,
        transitionDuration: "600ms",
      }}
    >
      {item}
    </li>
  ))}
</ul>


      </div>
    </>
  );
};

export default Navbar;
