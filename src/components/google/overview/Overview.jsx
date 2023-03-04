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
                            <div className='sectionText'>Google Maps is a widely used mobile mapping platform by users globally. Despite its popularity, it struggles with providing up-to-date and accurate information on real-world locations, causing issues such as outdated or incorrect information, resulting in reduced trust in the platform's reliability. This has led some users to utilize other mapping apps alongside Google Maps in order to access more accurate data and features.</div>
                        </div>

                        <div>
                            <div className='sectionSubHeading'>The Solution</div>
                            <div className='sectionText'>To develop a solution that enhances the navigation, cost estimation, and exploration experience for users on Google Maps. Through implementing these solutions, Google Maps can enhance the accuracy and dependability of its information, thereby increasing user confidence in the platform. This will result in an improved user experience and provide a more valuable service to all.</div>
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