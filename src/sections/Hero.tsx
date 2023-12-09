"use client"

import React from 'react'
import Lottie from 'react-lottie-player'
import  codingAnimation from '@/lottie/coding.json'
import heroContent from '@/data/hero'
import socialItems from '@/data/social'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Hero: React.FC = () => {
  
  return (
    <section id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{heroContent.title}</h1>
            <i className="text-sm text-bold ml-4">&quot;{heroContent.subtitle}&quot;</i>
            <p>{heroContent.description}</p>
          </div>
          <div className="flex flex-row gap-4">
            {socialItems.map((item, index) => item.icon && (
              <Link key={index} href={item.path} target='_blank'>
                <FontAwesomeIcon icon={item.icon} className={"text-white p-2 rounded-full hover:scale-125"} style={{
                  backgroundColor: item.color
                }} />
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center text-sm bg-white text-primary rounded px-4 py-2 w-fit font-bold hover:scale-125">
            <FontAwesomeIcon icon={faFile} />
            <Link href={heroContent.resumeLink}>{heroContent.resumeText}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Lottie
            loop
            animationData={codingAnimation}
            play
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero