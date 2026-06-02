import Title from '../Title';
import competitiveAnalysis from './competitiveAnalysis.svg';
import Research from './Research.svg';

const CompetitiveAnalysis = () => {
    return (
        <div>
            <img src={Research} alt="hi" />

            <Title title={'Competitive Analysis'} color='#2DA94E'/>

            <div className='googleSectionInner'>
                <img src={competitiveAnalysis} alt="competitiveAnalysis" />
            </div>
        </div>
    );
}
 
export default CompetitiveAnalysis;