import React from 'react';
import { EXPERIENCES } from '../assests/constant';
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8 }}
                className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='flex flex-wrap lg:justify-center mb-8'>
                        <div className=' w-full lg:w-1/4'>
                            <motion.p 
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:-100}}
                            transition={{duration:0.5}}
                            className='text-neutral-400 mb-2'>{experience.year}</motion.p>
                        </div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:0.8}}
                        className='w-full  max-w-xl lg:w-3/4'>
                            <h6 className='font-semibold mb-2'>
                                {experience.role} -{" "}
                                <span className='text-sm text-purple-100'>{experience.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {/* Flexbox for tech stack with wrapping */}
                            <div className='flex flex-wrap gap-2'>
                                {experience.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className='mr-2 mt-4 rounded bg-purple-900 px-2 py-1 text-sm font-medium text-neutral-100'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
