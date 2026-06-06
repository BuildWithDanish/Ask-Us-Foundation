import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // pathname ke sath-sath hash bhi extract kar lein
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Agar URL mein koi hash (#) hai (jaise #membershipform)
    if (hash) {
      // Thoda sa delay (100ms) tak ki naya page pura render ho jaye
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } 
    // Agar URL mein hash nahi hai, toh simply top par scroll kar do
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;