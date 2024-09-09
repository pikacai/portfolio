import { Link, useLocation } from 'react-router-dom';
import resume from '../assets/Senhuang_Cai_Resume.pdf';

function NavigationBar() {
  const { pathname } = useLocation();
  
  const textColor = pathname === "/intoxiblock" ? "text-gray-200" : "text-black";

  return (
    <div className={`absolute w-screen z-10 flex justify-between px-6 md:px-12 xl:px-36 items-center pt-4 pb-4 ${textColor}`}>
      <Link to='/'><h1 className='text-3xl font-medium'>Pika Cai</h1></Link>
      <ul className='flex gap-10 items-center'>
        <li><Link to='/'>Projects</Link></li>
        {/* <li><Link to='/resume'>Resume</Link></li> */}
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default NavigationBar;