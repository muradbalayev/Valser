import './App.css'
import RouterApp from './pages/RouterApp'
// import Lenis from 'lenis'


function App() {


  // useEffect(() => {
  //   // Initialize Lenis with autoResize option
  //   const lenis = new Lenis({
  //     duration: 0.8,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
  //     direction: 'vertical',
  //     gestureOrientation: 'vertical',
  //     smoothWheel: true,
  //     wheelMultiplier: 0.8,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //     autoResize: false
  //   })

  //   // Make lenis available globally
  //   window.lenis = lenis;

  //   // Create the animation loop
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   // Start the animation loop
  //   requestAnimationFrame(raf)
    
  //   return () => {
  //     // Clean up
  //     if (window.lenis) {
  //       window.lenis.destroy();
  //       window.lenis = null;
  //     }
  //   };
  // }, [])

  
  return (
      <RouterApp />
  )
}

// Hello
export default App
