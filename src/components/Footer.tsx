import { Link } from 'react-router-dom';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
  return (
    <div className='w-screen flex flex-col items-center gap-y-6 mt-32 mb-32'>
      <div className='flex gap-x-4 items-center'>
        <Link to='/'><HomeRoundedIcon fontSize='large' className='text-slate-400 hover:text-black transition duration-500 ease-in-out'/></Link>
        <a href='https://www.linkedin.com/in/senhuangcai/'><LinkedInIcon fontSize='large' className='text-slate-400 hover:text-blue-600 transition duration-500 ease-in-out'/></a>
        <a href='https://github.com/B-o-s-s-e-s'><GitHubIcon fontSize='large' className='text-slate-400 hover:text-black transition duration-500 ease-in-out'/></a>
      </div>
      
      <div className='text-sm text-slate-400'>© {new Date().getFullYear()} Senhuang Cai</div>
    </div>
  )
}

export default Footer;