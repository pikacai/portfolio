import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


interface Props {
    product: string,
    type: string,
    date: string, 
    description: string
    visuals: string[]
    link: string
}

function Experience( {product, type, date, description, visuals, link}: Props ) {
    return (
        <div>
            <div className='pl-8 pr-8 mb-8'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>{product}</h1>
                        <h2 className='text-slate-400'>{type}, {date}</h2>
                    </div>
                    <h3 className='text-slate-400'>{description} <Link to={link} className='text-sky-600 underline'>Read the case study.</Link></h3>
                </div>
            </div>

            { 
                visuals.map( (entry, index) =>
                    <div className='flex justify-center bg-gray-100 rounded-xl border-[1px] border-gray-100' key={index}>
                        <img className='rounded-xl' src={'/portfolio/src/assets/'+ entry} alt="Google"/>
                    </div>
                ) 
            }
        </div>
    )
}

export default Experience;