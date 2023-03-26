import Title from '../Title';
import userStories from './userStories.svg';

const UserStories = () => {
    return (
        <div>
            <Title title='User Stories' color='#4285F3'/>
            <img src={userStories} alt="userStories" />

        </div>
    );
}
 
export default UserStories;