import { Link } from "react-router-dom"

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
                <Link to={link}>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>{product}</h1>
                        <h2 className='text-slate-400'>{type}, {date}</h2>
                    </div>
                    <h3 className='text-slate-400'>{description}</h3>
                </Link>
            </div>

            { 
                visuals.map( (entry, index) =>
                    <div className='flex justify-center bg-gray-100 rounded-xl border-[1px] border-gray-100'>
                        <img className='rounded-xl' src={'/portfolio/src/assets/'+ entry} alt="Google" key={index}/>
                    </div>
                ) 
            }
        </div>
    )
}

export default Experience;
