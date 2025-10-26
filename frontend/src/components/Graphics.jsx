import React from 'react'
import { Link } from "react-router-dom";

function Graphics() {

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
     <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/Graphic%20Designing%20Training.jpg)] mt-20 mb-20 bg-center">
      <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
        <h1 className="py-4 text-5xl font-bold">
          <span className="text-teal-600">Video and Motion Graphics</span>
          <br />
          New Batch Start
        </h1>
        <span className="font-bold text-black">from {nextBatchDate}</span>
        <p className="pb-6">
        Welcome to Rudra Classes, where creativity meets technology. Our Video and Motion Graphics Coaching Classes are designed to help students master the art of visual storytelling through advanced editing and animation techniques. From learning industry-standard tools like Adobe After Effects, Premiere Pro, and DaVinci Resolve to understanding composition, timing, and transitions, our program equips you with the skills to create professional-quality videos and engaging motion graphics for brands, social media, and digital media production.
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

export default Graphics