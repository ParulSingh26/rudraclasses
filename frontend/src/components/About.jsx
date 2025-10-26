import React from "react";
import img1 from "../assets/img1.jpeg";

function About() {
  return (
    <div className="w-full dark:bg-gray-800 py-16 lg:py-20">
     <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
       <div className="grid gap-8 lg:grid-cols-2 items-center">
         {/* Left text section */}
         <div>
           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
             About Us
           </h2>
           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
             At Rudra Classes, we believe in empowering creativity and technology together.
             We offer expert-led coaching in Web Development, Graphic Designing, and
             various Digital Skills that help students and professionals build a strong
             foundation for their careers. Our mission is to make learning practical,
             engaging, and career-focused — preparing you for real-world projects and
             opportunities. Whether you’re a beginner exploring the digital world or a
             learner aiming to upgrade your skills, we provide personalized guidance,
             hands-on training, and professional mentorship to help you grow with confidence.
           </p>
         </div>
   
         {/* Right image section */}
         <div>
           <img
             className="object-cover w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-lg"
             src={img1}
             alt="Rudra Classes"
           />
         </div>
       </div>
     </div>
   </div>
  );
}

export default About;
