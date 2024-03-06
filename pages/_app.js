import '@/styles/accordian.css';
import "@/styles/globals.css";
import "@/styles/navbar.css";
import '@/styles/Footer.css';
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold width as needed
    }

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <Component {...pageProps} isMobile={isMobile} />;
}
