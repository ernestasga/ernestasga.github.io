import React from 'react';
import { type Project } from '@/types/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
    item: Project;
}

const ProjectCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white dark:bg-black  text-start p-2 flex flex-col justify-between gap-2">
            <span className="text-xl">{item.name}</span>
            <p className="text-sm">{item.desc}</p>
            <div className="flex flex-row flex-wrap items-center gap-4 font-bold">
                {item.github && (
                    <Link href={item.github} target="_blank" className="hover:scale-110">
                        <FontAwesomeIcon icon={faGithub} className="py-2 px-4 bg-black text-white rounded-md" />
                    </Link>
                )}
                {item.link && (
                    <Link href={item.link.path} target="_blank" className="hover:scale-110">
                        <div className="flex flex-row gap-2 p-2 bg-secondary text-white rounded-xl items-center text-xs">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>{item.link.name}</span>
                        </div>
                    </Link>
                )}
                {item.link2 && (
                    <Link href={item.link2.path} target="_blank" className="hover:scale-110">
                        <div className="flex flex-row gap-2 p-2 bg-secondary text-white rounded-xl items-center text-xs">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>{item.link2.name}</span>
                        </div>
                    </Link>     
                )}
            </div>
        </div>
    )
}

export default ProjectCard;
