import React from 'react';
import Color from "color-thief-react";
import { type ExperienceJob } from '@/types/experience';
import Image from 'next/image';

interface Props {
    item: ExperienceJob;
}

const ExperienceCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="w-full md:w-auto max-w-sm rounded bg-white dark:bg-black overflow-hidden shadow-lg hover:scale-110 p-4">
            <Color src={item.companylogo} format='hex'>
                {(color) => (
                    <div
                        className="px-6 py-4 text-white text-xl"
                        style={{ backgroundColor: color.data }}
                    >
                        {item.role}
                    </div>
                )}
            </Color>
            <div className="flex justify-center">
                <Image
                    className="h-24 w-24 my-4"
                    src={item.companylogo}
                    alt={`${item.company} logo`}
                    width={96}
                    height={96}
                />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col">
                    <div className="font-bold text-xl mb-2">{item.company}</div>
                    <p className="text-sm">{item.date}</p>
                </div>
                <p className="text-sm font-bold text-left">{item.desc}</p>
                <ul className="list-disc text-left ml-8">
                    {item.descBullets && item.descBullets.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard;
