import googleMapsLogo from './googleMapsLogo.svg';
import googleMapsBackground from './googleMapsBackground.png';

import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';

import Review from './Review';

const Google = () => {
    return (
        <>
          <div className='w-[90%] flex flex-col justify-center items-center gap-y-20'>
            {/* <div className='w-full flex justify-between'>
              <div className='text-lg md:text-xl px-5 py-2.5 font-medium text-[#62666A] -translate-x-[200%] animate-showLeft'>Case Study</div>
              <button className='flex items-center justify-center rounded-lg text-lg md:text-xl px-5 py-2.5 font-medium dark:bg-blue-100 dark:hover:bg-blue-200 dark:focus:ring-blue-300 text-blue-600 transition-transform active:scale-[.98] disabled:opacity-70 disabled:dark:bg-blue-600 translate-x-[200%] animate-showRight'>Learn More</button>
            </div> */}
            
            <div className='w-[20vw] overflow-hidden'><img className='h-full animate-showTop -translate-y-[100%]' src={googleMapsLogo} alt="Google Maps Logo" /></div>
            
            <div className='overflow-hidden'>
              <div className='flex p-16 justify-center gap-x-8 animate-showBottom translate-y-[100%]'>
                <Review img={person1} name='Yilong Ma' review='Automatic rerouting is not safe. Please remove this feature!'/>
                <Review img={person2} name='Yilong Ma' review='Automatic rerouting is not safe. Please remove this feature!'/>
                <Review img={person3} name='Yilong Ma' review='Automatic rerouting is not safe. Please remove this feature!'/>
              </div>
            </div>
              
            <div className='overflow-hidden'><h1 className='p-2 text-center text-6xl md:text-8xl font-semibold animate-showTop translate-y-[100%]'>Improving on-road usage.</h1></div>
          </div>
        </>
    );
}
 
export default Google;

// <div className='relative h-screen w-screen flex flex-col justify-center items-center bg-cover' style={{backgroundImage: `url(${googleMapsBackground})`}}>
          {/* style={{ background: 'linear-gradient(0deg, white, rgb(255 255 255 / 70%))'}} */}
        // <div className='h-screen w-screen flex flex-col items-center justify-center' style={{ background: 'linear-gradient(0deg, white, rgb(255 255 255 / 70%))'}}>

                // </div>
    // </div>