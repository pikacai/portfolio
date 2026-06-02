import Title from '../Title';
import personas from './personas.svg';
import Define from './Define.svg';

const Personas = () => {
    return (
        <div>
            <img src={Define} alt="Define" />

            <Title title='Personas' color={'#FABD03'}/>
            
            <div className='googleSectionInner'>
                <div className='sectionText'>Based on the interviews and research findings, to get a better gauge of the mindset, challenges, motivations and journey of our users, we created two personas. Each persona has different characters, needs, and frustrations. These personas will be useful to improve the user experience for each one of them. Say hi 👋 to each persona:</div>
                <img src={personas} alt="personas" />
            
            </div>
        </div>
    );
}
 
export default Personas;