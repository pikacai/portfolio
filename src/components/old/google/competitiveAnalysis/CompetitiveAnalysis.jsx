import Title from '../Title';
import competitiveAnalysis from './competitiveAnalysis.svg';

const CompetitiveAnalysis = () => {
    return (
        <div>
            <Title title={'Competitive Analysis'} color='#2DA94E'/>

            <div className='googleSectionInner'>
                <img src={competitiveAnalysis} alt="competitiveAnalysis" />
            </div>
        </div>
    );
}
 
export default CompetitiveAnalysis;