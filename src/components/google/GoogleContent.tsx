import SplashScreen from "../SplashScreen";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const GoogleContent = () => {
    const outcomes = [
        'Introduces saftey features',
        'Introduces saftey features',
        'Introduces saftey features',
    ]
    return (
        <div>
            <SplashScreen
                productIcon='/portfolio/src/assets/googleMapsIcon.svg'
                companyLogo='/portfolio/src/assets/google.png'
                animation='animate-splashScreenGoogle'
            />
            
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-y-8'>
                <h1 className='text-4xl md:text-6xl font-semibold'>Improving on-road usage</h1>
                
                <div className='flex flex-col gap-y-4'>
                    {
                        outcomes.map( (entry, index) => 
                            <div className='flex items-center gap-x-4' key={index}>
                                <div className='bg-green-500 rounded-full p-1 text-white flex justify-center items-center'>
                                    <CheckRoundedIcon fontSize='small'/>
                                </div>
                                <div>{entry}</div>
                            </div>
                        )
                    }
                </div>
            </div>


            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='aspect-[9/19.5] h-2/3 border-black border-2 rounded-3xl'>

                </div>
            </div>
        </div>
    );
}
 
export default GoogleContent;