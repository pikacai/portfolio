import Title from '../Title';
import bubble from './bubble.svg';
import feedback from './feedback.svg';

const BehavioralAnalysis = () => {
    return (
        <div>
            <Title title='Behavioral Analysis' color='red'/>

            <div className='googleSectionInner'>
                <div className='sectionText'>To begin my research, we started to look for critical user reviews about the Google Map app on Google Play (Android) and App Store (iOS).</div>
                <img src={feedback} alt='feedback'/>
                <img src={bubble} alt='bubble'/>
            </div>
        </div>
    );
}
 
export default BehavioralAnalysis;