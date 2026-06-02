import Title from '../Title'
import overview from './overview.svg'

const Overview = () => {
    return (
        <div>
            <Title title='Overview' color='#EA4435'/>

            <div className='googleSectionInner'>
                <div className="googleDivider">
                    <div className="googleLeft">
                        <div>
                            <div className='sectionSubHeading'>The Problem</div>
                            <div className='sectionText'>
                            Google Maps is popular globally, but struggles with providing accurate real-world information. This has caused issues and reduced trust, leading some users to seek other apps for more accurate data and features.
                            </div>
                        </div>

                        <div>
                            <div className='sectionSubHeading'>The Solution</div>
                            <div className='sectionText'>
                            Develop solutions to enhance navigation, cost estimation, and exploration on Google Maps. This will improve accuracy, dependability, and user confidence, resulting in an improved experience and more valuable service.
                            </div>
                        </div>
                    </div>



                    <div className="googleRight">
                        <div>
                            <div className='sectionSubHeading'>Timeline</div>
                            <div className='sectionText'>5 weeks</div>
                        </div>

                        <div>
                            <div className='sectionSubHeading'>My Role</div>
                            <div className='sectionText'>UX Researcher, Designer</div>
                        </div>

                        <div>
                            <div className='sectionSubHeading'>Tools</div>
                            <div className='sectionText'>Figma, Photoshop</div>
                        </div>
                    </div>
                </div>

                <img src={overview} alt='overview'/>
            </div>


        </div>
    );
}

export default Overview;