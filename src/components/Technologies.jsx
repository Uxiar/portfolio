import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';  // Tailwind CSS icon
import { SiSass } from 'react-icons/si';
import { MdAccessibility } from 'react-icons/md';
import { SiGit } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { SiNextdotjs } from 'react-icons/si';


const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-4xl  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < FaHtml5 className='text-6xl text-orange-500' />
          </div>
          <p className='text-center mt-3'>HTML</p>
        </motion.div>

        <motion.div initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < FaCss3Alt className='text-6xl text-blue-700' />
          </div>
          <p className='text-center mt-3'>CSS</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < FaJsSquare className='text-6xl text-yellow-300' />
          </div>
          <p className='text-center mt-3'>JAVASCRIPT</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < SiTailwindcss className='text-6xl text-blue-600' />
          </div>
          <p className='text-center mt-3'>TAILWIND</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < SiSass className='text-6xl text-pink-400' />
          </div>
          <p className='text-center mt-3'>SASS</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 4.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < BsBootstrap className='text-6xl text-purple-950' />
          </div>
          <p className='text-center mt-3'>BOOTSTRAP</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < RiReactjsLine className='text-6xl text-cyan-400' />
          </div>
          <p className='text-center mt-3'>REACT JS</p>
        </motion.div>


        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < SiNextdotjs className='text-6xl text-neutral-100' />
          </div>
          <p className='text-center mt-3'>NEXT JS</p>
        </motion.div>


        
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < MdAccessibility className='text-6xl text-green-500' />
          </div>
          <p className='text-center mt-3'>NEXT JS</p>
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            < SiGit className='text-6xl text-red-600' />
          </div>
          <p className='text-center mt-3'>GIT</p>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies;