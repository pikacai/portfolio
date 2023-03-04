import Phone from '../phones/Phone';
import video1 from '../phones/video1.gif';
import photo1 from '../phones/photo1.svg';
import photo2 from '../phones/photo2.svg';
import video2 from '../phones/video2.gif';
import pinkArrowRight from './pinkArrowRight.svg';
import blueArrowLeft from './blueArrowLeft.svg';
import greenArrowRight from './greenArrowRight.svg';

const Outcome = () => {
    return (
        <div className='googleOutComeContainer'>
            <div className='googleOutComeContainerInner'>
                <div className='googlePhoneDivider'>
                    <div style={{ paddingBottom: 90}}>
                        <Phone image={video1} color="#2DA94E"/>
                    </div>

                    <img className='googlePhoneDividerArrow'src={pinkArrowRight} alt="arrow1" />

                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Navigation</div>
                        <div className='sectionHeading'>Turning</div>
                        <div className='sectionText'>Glow turning arrow to indicate user is going turn soon.</div>
                    </div>
                </div>


                <div className='googlePhoneDivider'>
                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Cost</div>
                        <div className='sectionHeading'>Estimated Gas Price</div>
                        <div className='sectionText'>After user enters the car information, Google Map is able to estimated the cost of gas for each trip.</div>
                    </div>

                    <img className='googlePhoneDividerArrow'src={blueArrowLeft} alt="arrow1" />

                    <div style={{ paddingBottom: 90}}>
                        <Phone image={photo1} color="#4285F3 "/>
                    </div>
                </div>

                <div className='googlePhoneDivider'>
                    <div style={{ paddingBottom: 90}}>
                        <Phone image={photo2} color="#EA4435"/>
                    </div>

                    <img className='googlePhoneDividerArrow'src={greenArrowRight} alt="arrow1" />

                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Control</div>
                        <div className='sectionHeading'>Reroute</div>
                        <div className='sectionText'>Allow user to toggle on and off for automatically reroute depend on different road condition.</div>
                    </div>
                </div>

                <div className='googlePhoneDivider'>
                    <div className='googlePhoneDividerText'>
                        <div className='sectionSubHeading'>Explore</div>
                        <div className='sectionHeading'>Report Button</div>
                        <div className='sectionText'>Allow user to explore Google Map “hidden” features with more obvious report button.</div>
                    </div>

                    <div className='googlePhoneDividerArrow' alt=""></div>

                    <div style={{ paddingBottom: 90}}>
                        <Phone image={video2} color="#FABD03"/>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Outcome;