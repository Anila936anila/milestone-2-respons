import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Anila Hunain</div>
            <ul className='gap-10 lg:gap-16  hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={togglemenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> :
              <AiOutlineMenu size={30} />
              }
            </div>
        </div>

        {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href='#hero' onClick={togglemenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href='#about' onClick={togglemenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href='#skills' onClick={togglemenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href='#contact' onClick={togglemenu}>Contact</a>
            </li>
          </ul>
        )

        }
      
    </div>
  );
}

export default Navbar;
