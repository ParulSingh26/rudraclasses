import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Courses() {

    // Function to get next batch date
  const getNextBatchDate = () => {
    const baseDate = new Date("2025-11-01"); // First batch start date
    const today = new Date();

    let nextBatch = new Date(baseDate);

    // Loop to add 6 months until the batch is in the future
    while (nextBatch <= today) {
      const month = nextBatch.getMonth() + 6;
      const year = nextBatch.getFullYear() + Math.floor(month / 12);
      nextBatch.setFullYear(year);
      nextBatch.setMonth(month % 12);
    }

    // Format date nicely
    const options = { year: "numeric", month: "long", day: "numeric" };
    return nextBatch.toLocaleDateString("en-IN", options);
  };

  const nextBatchDate = getNextBatchDate();
  return (
    <div className="dark:bg-gray-800 dark:text-gray-300 ">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold capitalize">
              <span className="text-teal-600">Web & App Design </span>
              New Batch Start
            </h1>
            <span className="font-bold">from {nextBatchDate}</span>
            <p>
              Learn to code, create, and launch — professional coaching in web & app development.
            </p>
            <NavLink
              to="webdev"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                `${
                  isActive ? "text-teal-600" : "text-gray-800"
                } inline-flex items-center py-2 space-x-2 text-sm`
              }
            >
              <span className="dark:text-white">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold capitalize">
              <span className="text-teal-600">Video and motion Graphics </span>
              New Batch Start
            </h1>
            <span className="font-bold">from {nextBatchDate}</span>
            <p>
              Transform your creative vision into cinematic motion with our coaching in video and graphics.
            </p>
            <NavLink
              to="graphics"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                `${
                  isActive ? "text-teal-600" : "text-gray-800"
                } inline-flex items-center py-2 space-x-2 text-sm`
              }
            >
              <span className="dark:text-white">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold capitalize">
              <span className="text-teal-600">Branding & Logos </span>
              New Batch Start
            </h1>
            <span className="font-bold">from {nextBatchDate}</span>
            <p>
              Transform creativity into brand identity through expert logo design training.
            </p>
            <NavLink
              to="branding"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                `${
                  isActive ? "text-teal-600" : "text-gray-800"
                } inline-flex items-center py-2 space-x-2 text-sm`
              }
            >
              <span className="dark:text-white">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold capitalize">
              <span className="text-teal-600">UI/UX Design </span>
              New Batch Start
            </h1>
            <span className="font-bold">from {nextBatchDate}</span>
            <p>
              Design seamless digital experiences with user-focused UI/UX training.
            </p>
            <NavLink
              to="design"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                `${
                  isActive ? "text-teal-600" : "text-gray-800"
                } inline-flex items-center py-2 space-x-2 text-sm`
              }
            >
              <span className="dark:text-white">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
           <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold capitalize">
              <span className="text-teal-600">Illustration & Print </span>
              New Batch Start
            </h1>
            <span className="font-bold">from {nextBatchDate}</span>
            <p>
              Turn your artistic vision into expressive illustrations and impactful print designs.
            </p>
            <NavLink
              to="illustration"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                `${
                  isActive ? "text-teal-600" : "text-gray-800"
                } inline-flex items-center py-2 space-x-2 text-sm`
              }
            >
              <span className="dark:text-white">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Courses;
