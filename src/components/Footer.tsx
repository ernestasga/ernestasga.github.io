import Image from 'next/image'
import React from 'react'
import footerContent from '@/data/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import socialItems from '@/data/social'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher';

const Footer: React.FC = () => {
    return (
        <section id="get-in-touch" className="py-12 bg-primary text-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row justify-between p-4 text-center md:text-start">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl">{footerContent.title}</h2>
                        <i className="ml-4 text-sm font-bold">{footerContent.description}</i>
                        <p className="max-w-2xl">{footerContent.bio}</p>
                    </div>
                    <div className="hidden md:flex flex-col gap-6">
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex flex-row gap-2 items-center bg-white rounded px-4 py-2 text-primary w-fit font-bold hover:scale-105">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                {footerContent.location}
                            </div>
                            <ThemeSwitcher />
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
                    </div>

                </div>
                <div className="flex flex-row md:flex-col justify-between gap-8">
                    <Image
                        src={footerContent.avatar_url}
                        alt="profile pic"
                        className="rounded-full"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href={`tel:${footerContent.phone}`}>{footerContent.phone}</a>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href={`mailto:${footerContent.email}`}>{footerContent.email}</a>
                        </div>
                        <div className="md:hidden">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="flex flex-row gap-2 items-center bg-white rounded px-4 py-2 text-primary w-fit font-bold hover:scale-105">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        {footerContent.location}
                                    </div>
                                    <ThemeSwitcher />
                                </div>
                                <div className="flex flex-row gap-4">
                                    {socialItems.map((item, index) => item.icon && (
                                        <Link key={index} href={item.path} target='_blank'>
                                            <FontAwesomeIcon icon={item.icon} className={"p-2 rounded-full"} style={{
                                                backgroundColor: item.color
                                            }} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer