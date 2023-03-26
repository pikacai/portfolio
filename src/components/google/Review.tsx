import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
    img: string,
    name: string,
    review: string,
}

const Review = ( { img, name, review } : Props ) => {
    return (
        <div className='flex w-64 flex-col gap-y-2 bg-white rounded-md shadow-lg hover:scale-125 transition-all relative p-3'>
            <span className="absolute -right-2 -top-2"><CheckCircleIcon color='primary'/></span>
            <div className='flex items-center gap-x-2'>
                <img className='h-10 w-10 object-cover rounded-full'src={img} alt='Reviewers profile picture'/>
                <div>{name}</div>
            </div>
            <div>{review}</div>
        </div>
    );
}
 
export default Review;