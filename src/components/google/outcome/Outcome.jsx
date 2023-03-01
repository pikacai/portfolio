import Phone from '../phones/Phone';
import video1 from '../phones/video1.gif';
import arrow1 from './arrow1.svg';


const Outcome = () => {
    return (
        <div>
            <div>
                <div className='googlePhoneDivider'>
                    <div style={{ paddingBottom: 90}}>
                        <Phone image={video1} color="#2DA94E"/>
                    </div>

                    <img className='googlePhoneDividerArrow'src={arrow1} alt="arrow1" />

                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Navigation</div>
                        <div className='sectionHeading'>Turning</div>
                        <div className='sectionText'>Glow turning arrow to indicate user is going turn soon.</div>
                    </div>
                </div>


                <div className='googlePhoneDivider'>
                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Navigation</div>
                        <div className='sectionHeading'>Turning</div>
                        <div className='sectionText'>Glow turning arrow to indicate user is going turn soon.</div>
                    </div>

                    <img className='googlePhoneDividerArrow'src={arrow1} alt="arrow1" />

                    <div style={{ paddingBottom: 90}}>
                        <Phone image={video1} color="#2DA94E"/>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Outcome;