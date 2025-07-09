import React, { useEffect } from 'react'
import { navLinks } from '../../../constants';
import { useState } from 'react';

const NavBar = ( { setCursorEnlarge } ) => {
const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
return (
    <header className={`navbar ${scrolled? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner '>
            <a className='logo' href="#hero">
                  \/  
            </a>

            <nav className='desktop cursorHover'>
                <ul>
                    {navLinks.map(({ link, name }) => 
                        <li onMouseEnter={() => setCursorEnlarge(true)}
                            onMouseLeave={() => setCursorEnlarge(false)} 
                            key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    )}
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Ligar Agora</span>
                </div>
            </a>
        </div>

    </header>
  )
}

export default NavBar