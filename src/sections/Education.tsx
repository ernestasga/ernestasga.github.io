import React from 'react'
import { educationContent, education } from '@/data/education' // Assuming the correct variable name is educationContent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EducationCard from '@/components/EducationCard' // Assuming the correct component name is EducationCard

const Education: React.FC = () => {
    return (
        <section id="education" className="w-full"> {/* Assuming id should be "education" */}
            <div className="flex flex-col justify-center gap-6 w-full">
                <div className="flex flex-col gap-2 text-left px-4 md:px-0">
                    <div className="flex flew-row gap-4 items-center">
                        <FontAwesomeIcon icon={educationContent.icon} size="2xl" className="text-primary" />
                        <h2 className="text-4xl">{educationContent.title}</h2>
                    </div>
                    <p className="w-full">{educationContent.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0 w-full place-items-center md:place-items-start">
                    {education.map((item, index) => (
                        <EducationCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
