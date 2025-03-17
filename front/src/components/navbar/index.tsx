import { Navbar as DesktopNavbar } from './desktop';
import { Navbar as MobileNavbar } from './mobile';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size using a resize event listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint is at 768px
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

