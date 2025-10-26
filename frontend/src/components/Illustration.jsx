import React from 'react'
import { Link } from "react-router-dom";

function Illustration() {

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
     <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://img.freepik.com/premium-photo/creative-mind-3d-illustration-with-light-bulb-generative-ai_549702-683.jpg?w=2000)] mt-20 mb-20 bg-center">
      <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
        <h1 className="py-4 text-5xl font-bold">
          <span className="text-teal-600">Illustration and Print</span>
          <br />
          New Batch Start
        </h1>
        <span className="font-bold text-black">from {nextBatchDate}</span>
        <p className="pb-6">
          Welcome to Rudra Classes, where creativity takes shape through art and design. Our Illustration and Print Design Coaching Program is designed for aspiring artists, designers, and storytellers who want to turn their imagination into powerful visual communication. This course helps you master the fundamentals of illustration — from sketching and concept art to digital illustration and vector graphics — while also exploring the world of print media design.
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

export default Illustration