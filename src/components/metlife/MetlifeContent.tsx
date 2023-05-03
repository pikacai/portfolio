import SplashScreen from "../SplashScreen";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Macbook from "./Macbook";
import metconnect from './metconnect.png';


const MetlifeContent = () => {
    const outcomes = [
        'New product helps connect new hires during onboarding',
        'Incorporates communities assuring everyone can connect through their passions',
        'Appealing interface reduces friction on new users'
    ]

    return (
        <div>
            <SplashScreen
                productIcon='/portfolio/src/assets/metlifeIcon.svg'
                companyLogo='/portfolio/src/assets/metlifeLogo.svg'
                animation='animate-splashScreenMetlife'
            />

            <div className='min-h-screen p-16 w-screen flex justify-around items-center'>
                <div className='w-fit flex flex-col gap-y-16 justify-center items-start p-8'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl'>MetConnect</h1>
                        <div>
                            <h2 className='text-3xl md:text-7xl font-semibold'>Connecting new hires.</h2>
                        </div>
                        <h3 className='text-slate-400'>Role: Project Management Intern, UX Design | Duration: 10 weeks | Tools: Figma, Photoshop</h3>
                    </div>

                    <div className='flex flex-col flex-1 gap-y-8 bg-white rounded-xl'>
                        {
                            outcomes.map( (entry, index) => 
                                <div className='flex items-center gap-x-4' key={index}>
                                    <div className='bg-[#0487ce] rounded-full p-1 text-white flex justify-center items-center'>
                                        <CheckRoundedIcon fontSize='small'/>
                                    </div>
                                    <div className='text-slate-500 text:xl md:text-3xl'>{entry}</div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
            
            <div className='min-h-screen w-screen flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl'>Problem</h1>
                    <h2 className='text-3xl md:text-6xl font-semibold'>MetLife's 2022 Onboarding Survey revealed that 88% of employees believe their onboarding experiences could have been much better.</h2>
                </div>
            </div>

            <div className='min-h-screen w-screen flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl'>Problem</h1>
                    <h2 className='text-3xl md:text-6xl font-semibold'>Despite MetLife's various networking platforms like Yammer, Teams, and Outlook, new hires may not know where to begin networking as there are no networking forums provided within the company's applications.</h2>
                </div>
            </div>

            <div className='min-h-screen w-screen flex flex-col justify-center items-center bg-[#0487ce]'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl text-white'>Solution</h1>
                    <h2 className='text-3xl md:text-6xl text-white font-semibold'>Consolidating all social apps into one to improve onboarding experiences and to minimizing administration while also increasing appeal to new hires.</h2>
                </div>
            </div>


            <div className='min-h-screen w-screen flex justify-center items-center bg-black'>
                <div className='w-3/4 pt-48 pb-48 flex flex-col gap-y-12'>
                    <div className='flex justify-center'>
                        <h2 className='w-[81.3%] text-3xl md:text-6xl font-semibold text-white'>Connect. Inspire. </h2>
                    </div>
                    
                    <div>
                        <Macbook screen={metconnect} />
                        <div className='flex justify-center'>
                            <h3 className='w-[81.3%] flex justify-end text-sm text-gray-400'>MetConnect</h3>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                            <h3 className='w-[81.3%] text-2xl font-semibold text-gray-400'>
                                <span className='text-white'>Consolidates all networking forms</span> into one place. Joining <span className='text-white'>clubs</span> builds relationships between new hires by allowing natural connections to form through interests and hobby groups.
                            </h3>
                        </div>
                </div>
            </div>


            <div className='min-h-screen w-screen flex flex-wrap justify-center items-center bg-black gap-12 pl-8 pr-8 pt-48 pb-48'>
                {/* <div className='flex'> */}
                    <div className='flex flex-col flex-1 bg-[#151517] p-10 rounded-md'>
                        <h3 className='text-2xl font-semibold text-gray-400'>
                            MetConnect is a high touch tech experience that places a focus on <span className='text-white'>connection and inclusion</span> with the workplace. By allowing new hires to connect in areas where they share interests, we are forging a workforce that is not only passionate about work, but it is also about each other. Instead of us being disconnected while helping our customer. MetConnect ensures that we are working together. Most employees go into work everyday knowing that the company cares for them, but it would be even better if they knew that their coworkers also cared for them. <span className='text-white'>Metconnect motivates new hires to create strong bonds through shared experiences and open communication.</span>
                        </h3>
                        <div className='pt-20 pb-20'>
                            <h1 className='text-5xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>Powered by</h1>
                            <h1 className='text-9xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>40+</h1>
                            <h1 className='text-5xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>Usability Testing</h1>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-center items-center gap-12'>
                        <div className='flex flex-col flex-1 bg-[#151517] p-10 rounded-md'>
                            <h3 className='text-2xl font-semibold text-gray-400'>
                                <span className='text-white'>Thorough design.</span> Each page was crafted to appeal to new and existing employees while following MetLife's style guidelines and UX best practices.
                            </h3>
                            <div className='pt-20 pb-20'>
                                <h1 className='text-9xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>50</h1>
                                <h1 className='text-5xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>Pages Designed</h1>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 bg-[#151517] p-10 rounded-md'>
                            <h3 className='text-2xl font-semibold text-gray-400'>
                                <span className='text-white'>Reach globally.</span> Join clubs, post and read blogs, message coworkers and build a portfolio page. Everyone at MetLife contributes their unique qualities.
                            </h3>
                            <div className='pt-20 pb-20'>
                                <h1 className='text-9xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>4</h1>
                                <h1 className='text-5xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]'>Core Features</h1>
                            </div>
                        </div>
                    
                    </div>                
                {/* </div> */}
            </div>


            <div className='h-screen w-screen flex flex-col justify-center items-center bg-[#141E26]'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl text-white'>Project Learnings</h1>
                    <div>
                        <h2 className='text-3xl md:text-6xl text-white font-semibold'>Forming design decisions based on <span className='underline'>user research.</span></h2>
                        <h2 className='text-3xl md:text-6xl text-white font-semibold'>Collaborating with designers and <span className='underline'>cross-functional teams.</span></h2>
                    </div>
                </div>
            </div>

            {/* I learned two main lessons. 1. When creating user experiences, we need to center our decisions based on research and what others truly need, not just what we need. 2. It is important to be caring with teammates, so we can be happy to work on the project together as a team. */}

        </div>
    );
}
 
export default MetlifeContent;