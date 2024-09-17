import React from 'react';
import { HERO_CONTENT } from '../assests/constant';
import profilePic from "../assests/profile.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
    return ( 
        <div className='border-b border-neutral-900 pb-4 lg:mb-32'>
            <div className='flex flex-wrap '>

                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className='text-4xl lg:text-8xl pb-8 lg:mt-16 font-thin tracking-tight'>
                            Uzair Tagala
                        </motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
                            Web Developer
                        </motion.span>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='py-6 my-2 max-w-xl font-light tracking-tight'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            src={profilePic}
                            alt="Kevin Rush" 
                            className='rounded-[10px]'/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
