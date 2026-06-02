import Title from '../Title';
import userStories from './userStories.svg';

const UserStories = () => {
    return (
        <div>
            <Title title='User Stories' color='#4285F3'/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={userStories} alt="userStories" />
            </div>

        </div>
    );
}
 
export default UserStories;