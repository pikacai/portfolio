import Title from '../Title';
import sketches from './sketches.png';
import Design from './Design.svg';

const Sketches = () => {
    return (
        <div>
            <img src={Design} alt='Design'/>
            <Title title='Sketches' color='#4285F3'/>
            <img src={sketches} alt="sketches" />
        </div>
    );
}
 
export default Sketches;