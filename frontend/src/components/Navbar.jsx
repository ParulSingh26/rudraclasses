// import React from "react";
// import { NavLink } from "react-router-dom";
// import img1 from "../assets/img1.jpeg";
// import { useTheme } from "../contextapi/themecontext/themeContext";

// function Navbar() {
//   const { theme, lightMode, darkMode } = useTheme();
//   const changeMode = () => {
//     if (theme === "light") {
//       darkMode();
//     } else {
//       lightMode();
//     }
//   };
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 dark:bg-gray-900">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex h-16 items-center justify-between">
//           <div className="md:flex md:items-center md:gap-12">
//             <a href="#">
//               <img
//                 src={img1}
//                 alt="coaching logo"
//                 className="h-17 w-17 rounded-full object-fill"
//               />
//             </a>
//             <h1 className="text-4xl leading-tight font-bold text-orange-400">
//               RUDRA <span className="text-gray-400">CLASSES</span>
//             </h1>
//           </div>

//           <div className="hidden md:block">
//             <nav aria-label="Global">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 text-2xl font-bold underline"
//                           : "text-gray-300 text-2xl font-medium"
//                       } transition hover:text-gray-500/75`
//                     }
//                     to="/"
//                   >
//                     Home
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 text-2xl font-bold underline"
//                           : "text-gray-300 text-2xl font-medium"
//                       } transition hover:text-gray-500/75`
//                     }
//                     to="/pricing"
//                   >
//                     Pricing
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 text-2xl font-bold underline"
//                           : "text-gray-300 text-2xl font-medium"
//                       } transition hover:text-gray-500/75`
//                     }
//                     to="/courses"
//                   >
//                     Courses
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 text-2xl font-bold underline"
//                           : "text-gray-300 text-2xl font-medium"
//                       } transition hover:text-gray-500/75`
//                     }
//                     to="/about"
//                   >
//                     About
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 text-2xl font-bold underline"
//                           : "text-gray-300 text-2xl font-medium"
//                       } transition hover:text-gray-500/75`
//                     }
//                     to="/contact"
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <div className="flex items-center gap-4">
//             {/* <div className="sm:flex sm:gap-4">
//               <a
//                 className="rounded-md bg-orange-500 px-5 py-2.5 text-md font-medium text-white shadow-sm"
//                 href="#"
//               >
//                 Login
//               </a>

//               <div className="hidden sm:flex">
//                 <a
//                   className="rounded-md bg-gray-100 px-5 py-2.5 text-md font-medium text-orange-500"
//                   href="#"
//                 >
//                   Register
//                 </a>
//               </div>
//             </div> */}

//             <li
//               className="text-white text-xl cursor-pointer toggle"
//               onClick={changeMode}
//             >
//               {theme === "light" ? (
//                 <i className="fa-solid fa-moon"></i>
//               ) : (
//                 <i className="fa-solid fa-sun"></i>
//               )}
//             </li>

//             <div className="block md:hidden">
//               <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="size-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import img1 from "../assets/img1.jpeg";
// import { useTheme } from "../contextapi/themecontext/themeContext";

// function Navbar() {
//   const { theme, lightMode, darkMode } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const changeMode = () => {
//     if (theme === "light") darkMode();
//     else lightMode();
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 dark:bg-gray-900 shadow-lg">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex h-16 items-center justify-between">
//           {/* Left Logo & Title */}
//           <div className="flex items-center gap-3">
//             <img
//               src={img1}
//               alt="coaching logo"
//               className="h-12 w-12 rounded-full object-cover"
//             />
//             <h1 className="text-2xl sm:text-3xl font-bold text-orange-400">
//               RUDRA <span className="text-gray-300">CLASSES</span>
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-8">
//             {["Home", "Pricing", "Courses", "About", "Contact"].map(
//               (item, index) => (
//                 <NavLink
//                   key={index}
//                   to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                   className={({ isActive }) =>
//                     `${
//                       isActive
//                         ? "text-orange-500 font-bold underline"
//                         : "text-gray-300"
//                     } text-lg hover:text-orange-400 transition`
//                   }
//                 >
//                   {item}
//                 </NavLink>
//               )
//             )}
//           </nav>

//           {/* Right Side: Theme + Mobile Menu Button */}
//           <div className="flex items-center gap-4">
//             {/* Theme Toggle */}
//             <button
//               onClick={changeMode}
//               className="text-white text-xl focus:outline-none"
//             >
//               {theme === "light" ? (
//                 <i className="fa-solid fa-moon"></i>
//               ) : (
//                 <i className="fa-solid fa-sun text-yellow-400"></i>
//               )}
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-gray-200 p-2 rounded-md hover:bg-gray-700 transition"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu (Dropdown) */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-3 bg-gray-900 rounded-lg shadow-lg">
//             <nav className="flex flex-col space-y-3 p-4">
//               {["Home", "Pricing", "Courses", "About", "Contact"].map(
//                 (item, index) => (
//                   <NavLink
//                     key={index}
//                     to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `${
//                         isActive
//                           ? "text-orange-500 font-semibold underline"
//                           : "text-gray-300"
//                       } text-lg hover:text-orange-400 transition`
//                     }
//                   >
//                     {item}
//                   </NavLink>
//                 )
//               )}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import { useTheme } from "../contextapi/themecontext/themeContext";

function Navbar() {
  const { theme, lightMode, darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeMode = () => {
    if (theme === "light") darkMode();
    else lightMode();
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-gray-800 dark:bg-gray-900 shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section (Logo + Name) */}
          <div className="flex items-center gap-3">
            <a href="#">
              <img
                src={img1}
                alt="coaching logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
            <h1 className="text-3xl font-bold text-orange-400">
              RUDRA <span className="text-gray-300">CLASSES</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Courses", "About", "Contact"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-orange-500 font-bold underline"
                        : "text-gray-300"
                    } text-lg hover:text-orange-400 transition`
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </nav>

          {/* Right side (Theme toggle + Hamburger) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={changeMode}
              className="text-white text-xl focus:outline-none"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun text-yellow-400"></i>
              )}
            </button>

            {/* Hamburger Menu Button (Mobile) */}
            <button
              className="md:hidden text-gray-200 p-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-900 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3 p-4">
              {["Home", "Courses", "About", "Contact"].map(
                (item, index) => (
                  <NavLink
                    key={index}
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 font-semibold underline"
                          : "text-gray-300"
                      } text-lg hover:text-orange-400 transition`
                    }
                  >
                    {item}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;


