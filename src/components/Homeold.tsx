import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Logos
import metlifeLogo from './metlifeLogo.svg';

// Images
import highSierra from './highSierra.jpg';
import headshot from './headshot.png';
import googleMapsBackground from './google/googleMapsBackground.png';

// Components
import Google from './google/Google';
import Hamoc from './hamoc/Hamoc';
import Metlife from './metlife/Metlife';

function HomeOld() {
  // Used to show the intros for each case study. This is because each animation plays as soon as it is rendered
  const [google, setGoogle] = useState(false);
  const [hamoc, setHamoc] = useState(false);
  const [metlife, setMetlife] = useState(false);
  
  // Intersection Observer code. The threshold means "if the browser window has reached 90% of the div",
  // then do something
  const options = { threshold: 0.9 };

  const observer = new IntersectionObserver( (entries) => {
    for (const entry of entries) {  
      if (entry.isIntersecting) {
        if (entry.target.id == 'google') { setGoogle(true); }
        else if (entry.target.id == 'hamoc') { setHamoc(true); }
        else if (entry.target.id == 'metlife') { setMetlife(true); }
      }
    }
  }, options);


  // Before everything is setup, make sure to add the following ids to the intersection observer
  useEffect( () => {
    const intros: string[] = ['google', 'hamoc', 'metlife'];
    for (const intro of intros) {
      observer.observe(document.getElementById(intro)!);
    }
  }, [])


  return (
    <div className=''>
      {/* Title */}
      <div className='relative h-screen w-screen flex flex-col justify-center items-center'>
        <div className='flex items-center flex-col text-center gap-5 md:flex-row md:text-left justify-between w-[90%] lg:w-[40%]'>
          <h1 className='text-8xl font-semibold'>Pika Cai</h1>
          <h2 className='text-3xl md:text-6xl font-light w-[50%]'>I am a <span>strategic</span> <span className='font-semibold'>Product Designer</span> guided by <span className='underline'>curiosity</span> and <span className='underline'>empathy</span>.</h2>
        </div>

        <div className='absolute bottom-10 h-16 w-9 flex justify-center rounded-full border-2 border-black'>
          <div className='h-2 w-2 mt-2 rounded-full border border-black animate-bounce'></div>
        </div>
      </div>

      {/* Google */}
      <Link to='google' id='google' className='relative h-screen w-screen flex flex-col justify-center items-center bg-cover overflow-x-hidden' style={{backgroundImage: `url(${googleMapsBackground})`}}>
        <div className='h-screen w-screen flex flex-col items-center justify-center' style={{ background: 'linear-gradient(0deg, white, rgb(255 255 255 / 70%))'}}>
          { google && <Google /> }
        </div>
      </Link>

      {/* HAMOC */}
      <Link to='hamoc' id='hamoc' className='h-screen w-screen'>
        { hamoc && <Hamoc /> }
      </Link>

      {/* MetLife */}
      <Link to='metlife' id='metlife' className='h-screen w-screen'>
        { metlife && <Metlife />}
      </Link>

      {/* About */}
      {/* <div className={`relative h-screen w-screen flex justify-center items-center bg-cover`} style={{backgroundImage: `url(${highSierra})`}}>
        <div className='flex justify-center items-center h-[90vh] md:w-[80vw] rounded-md bg-white backdrop-blur-3xl bg-opacity-[0.65] border border-gray-400'>

          <div className='flex flex-col justify-center items-center w-3/4 md:w-1/2 gap-y-7'>
            <img className='h-[intrinsic] sm:w-[20vw] rounded-full border-4 border-[#ED8300]-300 border-white shadow-lg' src={headshot}/>

            <h1 className='text-6xl text-center font-semibold'>Pika Cai</h1>
            
            <div className='text-xl text-center text-slate-500'>Remember it's Pikachu without the "chu"</div> */}

            {/* <div className='flex w-full gap-x-5'>
              <button className={`flex flex-auto items-center justify-center w-full rounded-lg text-lg md:text-xl px-5 py-2.5 font-medium dark:bg-blue-100 dark:hover:bg-blue-200 dark:focus:ring-blue-300 text-blue-600 transition-transform active:scale-[.98] disabled:opacity-70 disabled:dark:bg-blue-600`}>Like my portfolio</button>
              <button className={`flex flex-auto items-center justify-center w-full rounded-lg text-lg md:text-xl px-5 py-2.5 font-medium dark:bg-blue-100 dark:hover:bg-blue-200 dark:focus:ring-blue-300 text-blue-600 transition-transform active:scale-[.98] disabled:opacity-70 disabled:dark:bg-blue-600`}>Send me a message</button>
            </div> */}
          {/* </div> */}

        {/* // </div> */}
      {/* </div> */}
      
    </div>
  )
}

export default HomeOld
