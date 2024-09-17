import React from 'react'
import logo from "../assests/signature-2.png"
import { FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { AiOutlineFileText } from 'react-icons/ai';


const Navbar = () => {
    return (
        <nav className='mb-18 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='logo' className='mx-2 w-16' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
                <a
                    href='https://www.linkedin.com/in/uzair-tagala-259554306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition duration-300 ease-in-out transform hover:scale-125 '
                >
                    <FaLinkedin />
                </a>

                <a 
                  href='https://x.com/_uxair_tagala_?t=98J1lzHW-HJpDIKiTuSKVA&s=08' target='_blank'
                  rel='noopener noreferrer'
                  className='transition duration-300 ease-in-out transform hover:scale-125'
                >
                    <FaSquareXTwitter />
                </a>
                <a href='https://www.instagram.com/_uxair_tagala_?igsh=MWMxMzY2Nzk1dzZzNQ==' target='_blank' rel='noopener noreferrer'
                   className='transition duration-300 ease-in-out transform hover:scale-125 '>
                    <FaInstagram />
                </a>
                <a href='https://github.com/Uxiar' target='_blank' rel='noopener noreferrer'
                   className='transition duration-300 ease-in-out transform hover:scale-125 '>
                    <FaGithub />
                </a>

                
            </div>
        </nav>
    )
}

export default Navbar;
