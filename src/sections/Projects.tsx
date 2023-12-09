"use client"

import ProjectCard from '@/components/ProjectCard'
import { projectContent, projects } from '@/data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Projects: React.FC = () => {
  return (
      <section id="projects" className="w-full">
          <div className="flex flex-col justify-center text-center gap-6">
              <div className="flex flex-col gap-2 text-left">
                  <div className="flex flew-row gap-4 items-center">
                      <FontAwesomeIcon icon={projectContent.icon} size="2xl" className="text-primary" />
                      <h2 className="text-4xl">{projectContent.title}</h2>
                  </div>
                  <p>{projectContent.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 w-full place-items-center md:place-items-start">
                  {projects.map((item, index) => (
                      <ProjectCard key={index} item={item} />
                  ))}
              </div>
          </div>
      </section>  )
}

export default Projects