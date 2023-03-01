import { Link } from "react-router-dom";
import './Cover.scss';

// Props
// companyLogo
// companyProduct
// image
// title
// description
// background css

const Cover = (props) => {
    return (
        <>
            <div className='cover' style={props.css}>
                <div className='coverHeader'>
                    <img className='coverCompanyLogo' src={props.companyLogo} alt='company logo'/>
                    <div>{props.companyProduct}</div>
                </div>

                <div className='coverBody'>
                    <div className='coverBodyLeft'>
                        <h2 className='coverTitle'>{props.title}</h2>
                        <div className='coverDescription'>{props.description}</div>
                    </div>

                    <img className='coverBodyRight'src={props.image} alt='cover'/>
                </div>

            </div>
        </>
    );
};

export default Cover