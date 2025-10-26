import React from 'react'
import { Link } from "react-router-dom";

function Webdev() {
  
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
     <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] mt-20 mb-20 bg-center">
      <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
        <h1 className="py-4 text-5xl font-bold">
          <span className="text-teal-600">Web & App Design</span>
          <br /> New Batch Start
        </h1>
        <span className="font-bold text-black">from {nextBatchDate}</span>
        <p className="pb-6">
         Welcome to Rudra Classes, where we turn your ideas into real-world skills! Our Web App and Development Coaching Classes are designed for beginners and aspiring developers who want to build modern, responsive, and high-performing websites and applications from scratch. With hands-on projects, personalized guidance, and practical exposure to the latest technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express, we help you gain the confidence to create, deploy, and manage full-stack web apps like a pro. Whether you dream of becoming a web developer or want to enhance your coding skills, our coaching ensures you learn by doing — one project at a time.
        </p>
        <Link
          className="py-3 px-5 bg-teal-600 rounded-md text-white font-semibold"
          to="/contact"
        >
          Contact Now
        </Link>
      </div>
    </div>
  )
}

export default Webdev