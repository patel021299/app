import { useState, useEffect } from 'react'

//Store Context Hook
import { useStoreContext } from './hooks/useStoreContext'

//Components
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Info from "./Components/Info"
import Light from "./Components/Light"
import Curtains from "./Components/Curtains"
import Features from "./Components/Features"
import Experience from "./Components/Experience"
import Contact from './Components/Contact';

function App() {
  const { lightTemperatureCanvas, lightIntensityCanvas, curtainSlideCanvas, animations } = useStoreContext();

  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("App started")
    var timer = setTimeout(() => {
      const onPageLoad = () => {
        setPreloader(false);
      };
      // Check if the page has already loaded
      if (document.readyState === 'interactive') {
        setPreloader(true);
      }
      else if (document.readyState === 'complete') {
        onPageLoad();
      }
      else {
        window.addEventListener('load', onPageLoad);
        // Remove the event listener when component unmounts
        return () => { window.removeEventListener('load', onPageLoad); clearTimeout(timer) }
      }
    }, 5000)

  }, []);

  if (preloader) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-loadingGif overflow-hidden bg-no-repeat bg-center" />
    )
  } else {
    return (
      <>
        <Navbar />
        <Hero
          scene={animations.heroSequence} />
        <Info />
        <Light lightTemperatureCanvas={lightTemperatureCanvas} lightIntensityCanvas={lightIntensityCanvas} scene={animations.light} />
        <Curtains curtainSlideCanvas={curtainSlideCanvas} scene={animations.curtainSequence} />
        <Features />
        <Experience />
        <Contact />
      </>
    )
  }



}

export default App
