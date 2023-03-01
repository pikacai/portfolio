import { Link } from "react-router-dom";
import './Card.scss';

// Props
// companyLogo
// companyProduct
// image
// title
// description
// background css

const Card = (props) => {
    return (
        <Link className='cardLink' to={props.link} onClick={() => window.scrollTo(0, 0)}>
            <div className='card' style={props.css}>
                <div className='cardHeader'>
                    <img className='cardCompanyLogo' src={props.companyLogo} alt='company logo'/>
                    <div>{props.companyProduct}</div>
                </div>

                <div className='cardBody'>
                    <div className='cardBodyLeft'>
                        <h2 className='cardTitle'>{props.title}</h2>
                        <div className='cardDescription'>{props.description}</div>
                    </div>

                    <img className='cardBodyRight'src={props.image} alt='card'/>
                </div>

            </div>
        </Link>
    );
};

export default Card