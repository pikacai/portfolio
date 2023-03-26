import amazonFreshLogo from './amazonFreshLogo.svg';

const Amazon = () => {
    return (
        <div className='relative h-screen w-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
            <img className='w-[20vw]' src={amazonFreshLogo} alt="Google Maps Logo" />
            <h1 className='p-2 text-8xl text-white font-semibold'>Improving on-road usage.</h1>
        </div>
        </div>
    );
}
 
export default Amazon;