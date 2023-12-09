import React from 'react';
import { Education } from '@/types/education';

interface Props {
    item: Education;
}

const EducationCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="w-full md:w-auto max-w-sm rounded bg-white dark:bg-black overflow-hidden shadow-lg hover:scale-110 p-4">
            <span className="text-2xl text-primary">{item.schoolName}</span>
            <div className="flex flex-col gap-4">
            
                <p className="text-sm">{item.subHeader}</p>
                <div className="px-2 bg-primary text-white w-fit rounded-md">{item.duration}</div>
                <p className="text-sm text-gray-400">{item.desc}</p>
                <ul className="list-disc text-left ml-8">
                    {item.descBullets && item.descBullets.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default EducationCard