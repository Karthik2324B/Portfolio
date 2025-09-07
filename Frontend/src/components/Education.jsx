import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <div
      name="Education"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-r from-[#050414] via-[#120a2a] to-[#1a0e38] min-h-screen pb-8"
    >
      {/* Section Title */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-35 h-1 bg-purple-500 mx-auto mt-1"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold text-justify md:px-20">
          Education has been a key part of my growth—shaping both my knowledge
          and curiosity. Below is a glimpse into the academic steps that have
          led me here.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-16 relative z-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`
                relative w-full flex
                ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}
                justify-start
              `}
            >
              {/* Dot */}
              <div
                className="
               absolute top-6
               left-2 sm:left-1/2
               w-5 h-5 md:w-16 md:h-16 bg-blue-500
            md:bg-slate-900 rounded-full border-2 border-white z-20
               flex items-center justify-center
               sm:-translate-x-1/2"
              >
                <img src={edu.img} alt="" className="h-12 w-12 hidden md:block" />
              </div>

              {/* Card */}
              <div
                className={`
                  ml-10 sm:ml-0 sm:w-[45%] w-[85%]
                  bg-[#121212] min-h-[250px] py-8 px-6
                  rounded-lg shadow-md border border-blue-500 relative z-10
                  ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}
                `}
              >
                <div className="flex items-start space-x-4">
                  {/* {edu.img && (
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-15 h-15 object-contain rounded-md border border-gray-600"
                    />
                  )} */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.date}</p>
                    {edu.grade && (
                      <p className="text-gray-400 text-sm">
                        Grade: {edu.grade}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;










