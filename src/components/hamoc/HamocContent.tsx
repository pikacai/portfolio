import SplashScreen from '../SplashScreen';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import hamocLogo from '../../assets/hamoc/hamocLogo.png';

import visit from '../../assets/hamoc/visit.png';
import art from '../../assets/hamoc/art.png';
import events from '../../assets/hamoc/events.png';
import shop from '../../assets/hamoc/shop.png';


function HamocContent () {
    const outcomes = [
        'Designed for sustainability, maintainability, and adaptability.',
        'Incorporates styles and colors associated with Haiti.',
        'A seamless modern booking and buying experience.'
    ]

    const ipad = [
        {
            img: visit,
            title: 'Locate visitor information, purchase tickets, and schedule a tour.',
            description: 'Grouping visitor information together allows efficient planning. An organized FAQ collection provides important information for visitors, improving customer experience. According to a Microsoft study, 66% of customers consult self-service resources before contacting an agent.',
        },
        {
            img: art,
            title: 'Preview featured exhibitions and collections.',
            description: 'The Featured Art & Artists page previews exhibits and collections with interesting histories and artist backgrounds. It encourages families and friends to have fun learning about Haitian culture and history together in museums.',
        },
        {
            img: events,
            title: 'Showcase events. Filter by workshops, in-person, or virtual events.',
            description: 'Grouping visitor information and providing an organized FAQ can help guests plan their visit and improve their customer experience. According to a Microsoft study, 66% of customers consult self-service resources before contacting an agent.',
        },
        {
            img: shop,
            title: 'Take home a piece of Haiti\'s rich and diverse heritage.',
            description: 'A gift shop for the Haitian museum would offer a variety of unique and culturally significant items that celebrate the history and heritage of Haiti. The shop would be designed to provide visitors with a memorable shopping experience that reflects the rich traditions and artistic expressions of the Haitian people.',
        }
    ]

    return (
        <div>
            <SplashScreen
                productIcon=''
                companyLogo={hamocLogo}
                animation='animate-splashScreenHamoc'
            />

            <div className='min-h-screen p-16 w-screen flex justify-around items-center'>
                <div className='w-fit flex flex-col gap-y-16 justify-center items-start p-8'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl'>Hamoc</h1>
                        <div>
                            <h2 className='text-3xl md:text-7xl font-semibold'>Designing for the future.</h2>
                        </div>
                        <h3 className='text-slate-400'>Role: UX Design | Duration: 10 weeks | Tools: Figma, Photoshop</h3>
                    </div>

                    <div className='flex flex-col flex-1 gap-y-8 rounded-xl'>
                        {
                            outcomes.map( (entry, index) => 
                                <div className='flex items-center gap-x-4' key={index}>
                                    <div className='bg-[#d64a58] rounded-full p-1 text-white flex justify-center items-center'>
                                        <CheckRoundedIcon fontSize='small'/>
                                    </div>
                                    <div className='text-slate-500 text:xl md:text-3xl'>{entry}</div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>

            <div className='h-[50vh] w-screen flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl'>Preview</h1>
                    <h2 className='text-3xl md:text-6xl font-semibold'>Visualize new designs.</h2>
                    <h3>See the 4 main improvements.</h3>
                </div>
            </div>

            
            { ipad.map( (entry, index) => (
                <div className='min-h-screen w-screen flex flex-col justify-center items-center mb-32' key={index}>
                    <div className='flex flex-col lg:flex-row w-3/4 gap-x-32 gap-y-10 items-center'>
                        
                        <div className='flex-1 flex flex-col gap-y-4'>
                            <div className='aspect-[3/4] bg-cover w-full overflow-auto rounded-3xl border-black border-8 shadow-[0_0_0_5px_#6B7280]'>
                                <img src={entry.img}/>
                            </div>
                            <label className='text-slate-300 text-sm'>Figma Prototype</label>
                        </div>
                        <div className='flex-1 flex justify items-center'>
                            <div className='flex flex-col gap-y-10'>
                                <h1 className='text-6xl font-semibold'>{entry.title}</h1>
                                <h2 className='text-slate-500'>{entry.description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }



        </div>
    );
}
 
export default HamocContent;