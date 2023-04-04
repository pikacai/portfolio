import { Link } from 'react-router-dom';
import resume from '../assets/Cai_Senhuang_Resume.pdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function NavigationBar() {
  return (
    <div className='w-screen flex justify-around items-center pt-4 pb-4 shadow-lg'>
      <h1 className='text-3xl font-medium'>Pika Cai</h1>
      <ul className='flex gap-10 items-center'>
        <li><Link to='/'>Projects</Link></li>
        <li><a href={resume}>Resume</a></li>
        <li><a href="https://www.linkedin.com/in/senhuangcai/"><LinkedInIcon/></a></li>
      </ul>
    </div>
  )
}

export default NavigationBar;