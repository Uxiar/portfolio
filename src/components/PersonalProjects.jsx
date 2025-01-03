import React from 'react';
import { PERSONALPROJECTS } from '../assests/constant';
import { motion } from "framer-motion"

const PersonalProjects = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0,y:-100}}
             transition={{duration:0.5}}
             className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
                Personal Projects
            </motion.h1>
            <div>
                {PERSONALPROJECTS.map((projects, index) => (
                    <div key={index} className='flex flex-wrap lg:gap-8 lg:justify-center mb-8'>
                        <motion.div 
                          whileInView={{opacity:1,x:0}}
                          initial={{opacity:0,x:-100}}
                          transition={{duration:0.5}}
                          className='w-full lg:w-1/4'>
                         <a href={projects.link} target="_blank" rel='noopener noreferrer'>
                            <img src={projects.image}
                                alt={projects.title}
                                className='mb-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-110'
                            />      
                          </a>
                        </motion.div>
                        <motion.div
                          whileInView={{opacity:1,x:0}}
                          initial={{opacity:0,x:100}}
                          transition={{duration:0.5}}
                         className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='font-semibold mb-2'>
                                {projects.title}
                            </h6>
                            <p className='mb-4 text-neutral-400'>{projects.description}</p>
                            {projects.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='mr-2 mt-4 rounded bg-purple-900 px-2 py-1 text-sm font-medium text-neutral-100'
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonalProjects;
