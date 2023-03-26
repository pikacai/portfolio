import Title from '../Title';
import sketches from './sketches.png';

const Sketches = () => {
    return (
        <div>
            <Title title='Sketches' color='#4285F3'/>
            <img src={sketches} alt="sketches" />
        </div>
    );
}
 
export default Sketches;