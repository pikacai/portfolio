import SplashScreen from "../SplashScreen";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const GoogleContent = () => {
    const outcomes = [
        'Introduces glowing turn signals that better indicate direction',
        'Provides estimated gas price that inform users on costs',
        'Allows users to chooses whether they are open to rerouting or not',
        'Highlights reporting feature by adding a dedicated icon'
    ]

    // Phone sections
    const phone = [
        {
            img: 'video1.gif',
            section: 'Navigation',
            title: 'Turn By Turn',
            text: 'Glow turning arrow to indicate user is going turn soon.',
            color: 'bg-[#0F9D58]'
        },
        {
            img: 'photo1.svg',
            section: 'Cost',
            title: 'Estimated Gas Price',
            text: 'After user enters the car information, Google Map is able to estimated the cost of gas for each trip.',
            color: 'bg-[#4285F4]'
        },
        {
            img: 'photo2.svg',
            section: 'Control',
            title: 'Reroute',
            text: 'Allow user to toggle on and off for automatically reroute depend on different road condition.',
            color: 'bg-[#DB4437]'
        },
        {
            img: 'video2.gif',
            section: 'Explore',
            title: 'Report Button',
            text: 'Allow user to explore Google Map “hidden” features with more obvious report button.',
            color: 'bg-[#F4B400]'
        }
    ]

    // Research
    const research = [
        {
            text: 'Results from survey',
            img: 'survey.svg',
        },
        {
            text: 'Customer behavioral analysis',
            img: 'behavioralAnalysis.svg',
        },
        {
            text: 'Investigating competitive analysis',
            img: 'competitiveAnalysis.svg',
        },
        {
            text: 'Key user stories',
            img: 'userStories.svg',
        }
    ]

    return (
        <div>
            <SplashScreen
                productIcon='/portfolio/src/assets/googleMapsIcon.svg'
                companyLogo='/portfolio/src/assets/google.png'
                animation='animate-splashScreenGoogle'
            />

            <div className='min-h-screen p-16 w-screen flex justify-around items-center'>
                <div className='w-fit flex flex-col gap-y-16 justify-center items-start p-8'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl'>Google Maps</h1>
                        <div>
                            <h2 className='text-3xl md:text-7xl font-semibold'>Improving on-road usage.</h2>
                        </div>
                        <h3 className='text-slate-400'>Role: UX Researcher & Designer | Duration: 5 weeks | Tools: Figma, Photoshop</h3>
                    </div>

                    <div className='flex flex-col flex-1 gap-y-8 bg-white rounded-xl'>
                        {
                            outcomes.map( (entry, index) => 
                                <div className='flex items-center gap-x-4' key={index}>
                                    <div className='bg-green-500 rounded-full p-1 text-white flex justify-center items-center'>
                                        <CheckRoundedIcon fontSize='small'/>
                                    </div>
                                    <div className='text-slate-500 text:xl md:text-3xl'>{entry}</div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-y-16'>

                {
                    phone.map( (entry, index) => 
                        <div className={'flex flex-col justify-between items-center w-4/5 lg:w-1/2 gap-x-12'  + (index % 2 == 1 ? ' md:flex-row-reverse' : ' md:flex-row') } key={index}>
                            <div className='relative h-[60vh] flex flex-1 justify-center items-center p-6'>
                                <div className={`absolute m-[0_auto] left-0 right-0 top-[50%] -translate-y-[50%] w-full h-1/2 animate-blob ${entry.color}`}></div>
                                <img className='z-10 aspect-[9/19.5] bg-cover h-full rounded-3xl border-black border-8 shadow-[0_0_0_5px_#6B7280]' src={'/portfolio/src/assets/google/' + entry.img}  alt="" />
                            </div>

                            <div className='flex flex-1 flex-col gap-y-4'>
                                <h1>{entry.section}</h1>
                                <h1 className='text-4xl'>{entry.title}</h1>
                                <h1 className='text-slate-500'>{entry.text}</h1>
                            </div>

                        </div>
                    )
                }

            </div>
{/*             
            <div className='h-screen w-screen pl-2 pr-2 sm:pl-0 sm:pr-0 flex flex-col justify-center items-center gap-y-8'>
                <h1 className='text-3xl md:text-7xl font-semibold text-center'>Improving on-road usage on Google Maps</h1>
                
                <div className='text-slate-400'>Role: UX Researcher, Designer; Duration: 5 weeks; Tools: Figma, Photoshop</div>
                
                <div className='flex flex-col gap-y-4'>
                    {
                        outcomes.map( (entry, index) => 
                            <div className='flex items-center gap-x-4' key={index}>
                                <div className='bg-green-500 rounded-full p-1 text-white flex justify-center items-center'>
                                    <CheckRoundedIcon fontSize='small'/>
                                </div>
                                <div className='text-slate-500'>{entry}</div>
                            </div>
                        )
                    }
                    </div>
                    
                    
                </div> */}

            <div className='min-h-screen w-screen flex flex-col justify-center items-center bg-[#4285F4]'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl text-white'>Problem</h1>
                    <h2 className='text-3xl md:text-6xl text-white font-semibold'>Google Maps is popular globally. While many features are adored, some are seen as <span className='underline'>intrusive</span>, and others largely <span className='underline'>unknown or missing.</span></h2>
                </div>
            </div>

            <div className='min-h-screen w-screen flex flex-col justify-center items-center bg-[#0F9D58]'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl text-white'>Solution</h1>
                    <h2 className='text-3xl md:text-6xl text-white font-semibold'>Enhance navigation by making rerouting <span className='underline'>less intrusive</span>, introducing <span className='underline'>trip-cost estimation</span>, and exploration. This results in a more <span className='underline'>valuable service</span>.</h2>
                </div>
            </div>


            <div className='min-h-screen p-16 w-screen flex justify-around items-center bg-[#141E26]'>
                <div className='w-4/5 flex flex-col gap-y-16 md:flex-row md:gap-y-0 justify-center items-center'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl text-white'>Research</h1>
                        <div>
                            <h2 className='text-3xl md:text-6xl text-white font-semibold'>Surveying.</h2>
                            <h2 className='text-3xl md:text-6xl text-white font-semibold'>Finding Personas.</h2>
                        </div>
                        <h3 className='text-white'>Focused initial questioning on travel-specific topics.</h3>
                    </div>

                    <div className='flex-1 bg-white rounded-xl p-8'>
                        <img className='rounded-xl' src={`/portfolio/src/assets/google/survey.svg`} alt="" />
                    </div>

                </div>
            </div>


            <div className='min-h-screen p-16 w-screen flex justify-around items-center bg-[#141E26]'>
                <div className='w-4/5 flex flex-col gap-y-16 md:flex-row md:gap-y-0 md:gap-x-12 justify-center items-center'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl text-white'>Research</h1>
                        <div>
                            <h2 className='text-3xl md:text-6xl text-white font-semibold'>Competitive Analysis.</h2>
                        </div>
                        <h3 className='text-white'>Compared mapping platforms.</h3>
                    </div>

                    <div className='flex-1 bg-white rounded-xl p-8'>
                        <img className='rounded-xl' src={`/portfolio/src/assets/google/competitiveAnalysis.svg`} alt="" />
                    </div>

                </div>
            </div>


            <div className='min-h-screen p-16 w-screen flex justify-around items-center bg-[#141E26]'>
                <div className='w-4/5 flex flex-col gap-y-16 md:flex-row md:gap-y-0 md:gap-x-12 justify-center items-center'>

                    <div className='flex flex-1 flex-col gap-y-4'>
                        <h1 className='text-xl text-white'>Research</h1>
                        <div>
                            <h2 className='text-3xl md:text-6xl text-white font-semibold'>Defining user stories based on bahavioral analysis and personas.</h2>
                        </div>
                        <h3 className='text-white'>Prioritized tasks informed from research data.</h3>
                    </div>

                    <div className='flex flex-col flex-1 gap-y-12 bg-white rounded-xl p-8'>
                        <img src={`/portfolio/src/assets/google/behavioralAnalysis.svg`} alt="" />
                        <img src={`/portfolio/src/assets/google/bubble.svg`} alt="" />
                        <img src={`/portfolio/src/assets/google/userStories.svg`} alt="" />
                    </div>

                </div>
            </div>



            <div className='h-screen w-screen flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl'>Preview</h1>
                    <h2 className='text-3xl md:text-6xl font-semibold'>Visualize new designs.</h2>
                    <h3>See the 4 main improvements.</h3>
                </div>
            </div>


            <div className='h-[50vh] w-screen flex flex-col justify-center items-center'>
            </div>


            <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
                <iframe className='aspect-[16/9] w-full' src="https://www.youtube.com/embed/7gJlpUt7pMo"></iframe>
            </div>


            <div className='h-screen w-screen flex flex-col justify-center items-center bg-[#141E26]'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h1 className='text-xl text-white'>Project Learnings</h1>
                    <div>
                        <h2 className='text-3xl md:text-6xl text-white font-semibold'>Testing on a <span className='underline'>mobile-first</span> environment.</h2>
                        <h2 className='text-3xl md:text-6xl text-white font-semibold'>Forming <span className='underline'>unbaised</span> questions and basing designs on survey data.</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default GoogleContent;