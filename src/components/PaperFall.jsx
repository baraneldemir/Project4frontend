import React, { useState, useEffect } from 'react';
import logo from '../assets/logolaw.png';

export default function PaperFall() {
  const [logoWidth, setLogoWidth] = useState('200px');

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setLogoWidth('150px');
      } else if (screenWidth <= 576) {
        setLogoWidth('100px');
      } else {
        setLogoWidth('200px');
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial values
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <img src={logo} alt='logo' style={{ position: 'absolute', zIndex: '999', left: '50%', top: '25%', transform: 'translate(-50%, -50%)', width: logoWidth }}/>
      <section id='home' className='hero-block'>
        <img className='d-block w-100'
          src='https://i.imgur.com/9AqZE9o.png'
          alt='paper'
        />
      </section>
    </>
  );
}
