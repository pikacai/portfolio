import metlifeLogo from './metlifeLogo.svg';
import metconnect from './metconnect.png';
import Macbook from './Macbook';

const Metlife = () => {
    return (
        <div className='relative h-screen w-screen flex flex-col justify-center items-center bg-[conic-gradient(from_153.62deg_at_24.2%_0%,rgb(0,112,183)_0deg,rgb(0,125,194)_360deg)] bg-cover'>
            <div className='flex flex-col items-center justify-center gap-y-16 w-[90%]'>
                <div className='w-[90%] flex flex-col justify-center items-center animate-scaleFromZero'>
                    <img className='w-[20vw] mb-10' src={metlifeLogo} alt="Google Maps Logo" />
                    <div className='w-[85%]'><Macbook screen={metconnect} /></div>
                    <h1 className='text-8xl text-white font-semibold'>Connecting Metlifers.</h1>
                </div>
            </div>
        </div>
    );
}
 
export default Metlife;

// <div className='relative h-full w-full flex flex-col justify-center items-center bg-[conic-gradient(from_153.62deg_at_24.2%_0%,rgb(0,112,183)_0deg,rgb(0,125,194)_360deg)]'>
