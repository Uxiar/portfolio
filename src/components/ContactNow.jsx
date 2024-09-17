import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { CONTACT } from '../assests/constant'
import { AiOutlineFileText } from 'react-icons/ai';
import resume from "../assests/Uzair-cv.pdf"


const ContactNow = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        className='my-10 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
        Get in touch
      </motion.h1>
      <div className='text-center tracking-tight'>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          className='my-4 flex items-center justify-center'>
          <a
            href={resume} 
            download="Uzair_Resume.pdf"
            target='_blank'
            className='flex justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110 '
            rel='noopener noreferrer'>
            < AiOutlineFileText className='text-purple-500 text-xl' />
            Resume
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className='my-4 flex items-center justify-center'>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
            target='_blank'
            className='flex justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110 '
            rel='noopener noreferrer'>
            < FaMapMarkerAlt className='text-red-500 text-xl' />
            {CONTACT.address}
          </a>
        </motion.div>



        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          className='my-4 flex items-center justify-center'>
          <a
            href={`tel:${CONTACT.phoneNo}`}
            target='_self'
            className='flex justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110 '
            rel='noopener noreferrer'>
            < FaPhoneAlt className='text-green-500 text-xl' />
            {CONTACT.phoneNo}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          className='my-4 flex items-center justify-center'>
          <a
            href={`mailto:${CONTACT.email}`}
            target='_self'
            className='flex justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110'
            rel='noopener noreferrer'>
            <MdEmail className='text-blue-500 text-xl' />
            {CONTACT.email}
          </a>
        </motion.div>


      </div>
    </div>
  )
}

export default ContactNow;
