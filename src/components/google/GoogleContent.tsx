import Google from './Google';
import googleMapsBackground from './googleMapsBackground.png';
import ProjectTypeCard from './assets/ProjectTypeCard.svg';
import RoleCard from './assets/RoleCard.svg';
import TimelineCard from './assets/TimelineCard.svg';
import ToolsUsedCard from './assets/ToolsUsedCard.svg';

const GoogleContent = () => {
    return (
        <div>
            <div className='relative h-screen w-screen flex flex-col justify-center items-center bg-cover overflow-x-hidden' style={{backgroundImage: `url(${googleMapsBackground})`}}>
                <div className='h-screen w-screen flex flex-col items-center justify-center' style={{ background: 'linear-gradient(0deg, white, rgb(255 255 255 / 70%))'}}>
                    <Google />
                    <div className='mt-6'>
                        <div>This case study examines common complaintsof on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use featuresthat can be improved for Google Maps.</div>
                    </div>
                </div>
            </div>

            {/* <div className='flex justify-center gap-x-6'>
                <img className='w-[15%]' src={ProjectTypeCard} alt='ProjectTypeCard'/>    
                <img className='w-[15%]' src={RoleCard} alt='RoleCard'/>
                <img className='w-[15%]' src={TimelineCard} alt='TimelineCard'/>
                <img className='w-[15%]' src={ToolsUsedCard} alt='ToolsUsedCard'/>
            </div> */}


        </div>
    );
}
 
export default GoogleContent;