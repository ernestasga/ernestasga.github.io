"use client"
import React from 'react'
import { experienceContent, experienceJobs } from '@/data/experience'
import ExperienceCard from '@/components/ExperienceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Experience: React.FC = () => {
    return (
        <section id="experience" className="w-full">
            <div className="flex flex-col justify-center gap-6 w-full">
                <div className="flex flex-col gap-2 text-left px-4 md:px-0"> {/* Add horizontal padding for smaller screens */}
                    <div className="flex flew-row gap-4 items-center">
                        <FontAwesomeIcon icon={experienceContent.icon} size="2xl" className="text-primary" />
                        <h2 className="text-4xl">{experienceContent.title}</h2>
                    </div>
                    <p className="w-full">{experienceContent.description}</p> {/* Make sure p takes the full width */}
                </div>
                {/* Ensure the grid takes the full width and adjust padding as needed */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 w-full place-items-center md:place-items-start">
                    {experienceJobs.map((item, index) => (
                        <ExperienceCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
