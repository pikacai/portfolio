import Title from '../Title'
import userStory from './userStory.svg'

const UserSurvey = () => {
    return (
        <div>
            <Title title='User Survey' color='#FABD03'/>

            <div className='googleSectionInner'>
                <div className='sectionText'>Moving on, We conducted user research by distributing an online survey to GoogleMap users which vary from daily active users to infrequent users. The aim of this survey is to 1) identify their pain points and needs; 2) define personas; 3) determine a set of actionable solutions to improve their experience. Based on a sample group of 40 users, some of results below:</div>
                <img src={userStory} alt='userStory'/>
            </div>
        </div>
    );
}
 
export default UserSurvey;