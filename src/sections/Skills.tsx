"use client"

import React from 'react'
import { Icon } from "@iconify/react";
import { skillsContent, skillBadges, skills, proficiency } from '@/data/skills'
import Lottie from 'react-lottie-player';
import webdevAnimation from '@/lottie/webdev.json'
import buildAnimation from '@/lottie/build.json'

const Skills: React.FC = () => {
    console.log(skills.length)
    return (
        <section id="what-i-do">
            <div className="flex flex-col justify-center text-center gap-6">
                <h2 className="text-4xl">{skillsContent.title}</h2>
                <p>{skillsContent.description}</p>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {skillBadges.map((item, index) => (
                        <Icon
                            key={index}
                            className='text-2xl'
                            icon={
                                item.fontAwesomeClassname
                            }
                            data-inline="false"
                        ></Icon>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                    <div className="flex flex-col gap-4">
                        <Lottie
                            loop
                            animationData={webdevAnimation}
                            play
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        {skills.map((item, index) => (
                            <p key={index} className={`text-left ${index + 1 === skills.length && 'font-bold'}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                    <div className="flex flex-col gap-4 text-left">
                        <h3 className="text-4xl">{skillsContent.proficiencyTitle}</h3>
                        {proficiency.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <h4 className="font-bold uppercase">{item.subject}</h4>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <Lottie
                            loop
                            animationData={buildAnimation}
                            play
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills