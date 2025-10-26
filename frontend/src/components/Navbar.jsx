import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import { useTheme } from "../contextapi/themecontext/themeContext";

function Navbar() {
  const { theme, lightMode, darkMode } = useTheme();
  const changeMode = () => {
    if (theme === "light") {
      darkMode();
    } else {
      lightMode();
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="#">
              <img
                src={img1}
                alt="coaching logo"
                className="h-17 w-17 rounded-full object-fill"
              />
            </a>
            <h1 className="text-4xl leading-tight font-bold text-orange-400">
              RUDRA <span className="text-gray-400">CLASSES</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 text-2xl font-bold underline"
                          : "text-gray-300 text-2xl font-medium"
                      } transition hover:text-gray-500/75`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 text-2xl font-bold underline"
                          : "text-gray-300 text-2xl font-medium"
                      } transition hover:text-gray-500/75`
                    }
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 text-2xl font-bold underline"
                          : "text-gray-300 text-2xl font-medium"
                      } transition hover:text-gray-500/75`
                    }
                    to="/courses"
                  >
                    Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 text-2xl font-bold underline"
                          : "text-gray-300 text-2xl font-medium"
                      } transition hover:text-gray-500/75`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 text-2xl font-bold underline"
                          : "text-gray-300 text-2xl font-medium"
                      } transition hover:text-gray-500/75`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-orange-500 px-5 py-2.5 text-md font-medium text-white shadow-sm"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-md font-medium text-orange-500"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div> */}

            <li
              className="text-white text-xl cursor-pointer toggle"
              onClick={changeMode}
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </li>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
