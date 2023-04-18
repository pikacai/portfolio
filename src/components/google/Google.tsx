import googleMapsLogo from './googleMapsLogo.svg';

const Google = () => {
    return (
        <>
          <div className='w-[90%] flex flex-col justify-center items-center gap-y-20'>
          
            <div className='w-[50vw] md:w-[20vw] overflow-hidden'><img className='h-full animate-showTop -translate-y-[100%]' src={googleMapsLogo} alt="Google Maps Logo" /></div>
              
            <div className='overflow-hidden flex flex-col gap-y-4 animate-showTop translate-y-[100%]'>
              <h1 className='p-2 text-center text-6xl md:text-8xl font-semibold'>Improving on-road usage.</h1>
              <div className='text-center'>This case study examines common complaints of on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use features that can be improved for Google Maps.</div>
            </div>

          </div>
        </>
    );
}
 
export default Google;