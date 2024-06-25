import Title from '../Title';
import journeyMapping from './journeyMapping.svg';

const JourneyMapping = () => {
    return (
        <div>
            <Title title='Journey Mapping' color={'red'}/>

            <div className='googleSectionInner'>
                <div className='sectionText'>This journey mapping help us to better understand the user's experience, identify pain points and uncovering opportunities.</div>
                <img src={journeyMapping} alt="journeyMapping" />
            </div>
        </div>
    );
}
 
export default JourneyMapping;