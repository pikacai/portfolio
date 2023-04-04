import hamocLogo from './hamocLogo.png';
import updatedHomePage from './updatedHomePage.png';
import Macbook from './Macbook';

const style = {
    backgroundColor: 'white',
    // backgroundopacity: '0.8',
    backgroundImage: 'radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, white 0.5px)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0,10px 10px'
}

const Hamoc = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center' style={style}>
            <div className='w-[90%] flex flex-col justify-center items-center animate-scaleFromZero'>
                <img className='w-[30vw]' src={hamocLogo} alt="HAMOC Logo" />
                <div className='w-[85%]'><Macbook screen={updatedHomePage} /></div>
                <div className='overflow-hidden'><h1 className='p-2 text-8xl text-center font-semibold'>Reimaginging web presence.</h1></div>
            </div>
        </div>
    );
}
 
export default Hamoc;