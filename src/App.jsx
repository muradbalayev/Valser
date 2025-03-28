import { useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import RouterApp from './pages/RouterApp'
import Lenis from 'lenis'


function App() {


  useEffect(() => {
    // Initialize Lenis with autoResize option
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    })

    // Make lenis available globally
    window.lenis = lenis;

    // Create the animation loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Start the animation loop
    requestAnimationFrame(raf)
    
    return () => {
      // Clean up
      if (window.lenis) {
        window.lenis.destroy();
        window.lenis = null;
      }
    };
  }, [])

  
  return (
    <ThemeContextProvider>
      <RouterApp />
    </ThemeContextProvider>
  )
}

// Hello
export default App
