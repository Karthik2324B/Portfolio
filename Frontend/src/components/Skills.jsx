import React from 'react'
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
    return (
        <div name="Skills" className="min-h-screen bg-gradient-to-r from-[#050414] via-[#120a2a] to-[#1a0e38] text-white px-4 md:px-20">
            {/* Section Title */}
            <div className="text-center py-5">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto "></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold text-center">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </p>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-5 py-5 justify-between">
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                            {category.title}
                        </h3>

                        {/* Skill Items - 3 per row on larger screens */}
                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="grid grid-cols-2  gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                                    > <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                                        />
                                        <span className="text-xs sm:text-sm text-gray-300 truncate max-w-[80px]">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>

        </div>





    )
}

export default Skills
