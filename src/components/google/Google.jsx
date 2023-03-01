import Cover from '../Cover';
import googleLogo from "../google/logo.svg";
import googleImage from "../google/image.svg";

import Overview from './overview/Overview';
import Outcome from './outcome/Outcome';

import Phone from './phones/Phone';

import video1 from './phones/video1.gif';
import video2 from './phones/video2.gif';

import './Google.scss';

const Google = () => {
    return (
        <div>
            <Cover
                companyLogo = {googleLogo}
                companyProduct = {'Google Maps'}
                image = {googleImage}
                title = {'Improving on-road usage.'}
                description = {'This case study examines common complaints of on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use featuresthat can be improved for Google Maps.'}
                css = {{
                    background: 'linear-gradient(360deg, #E1EDFD 4.11%, #FAFAFA 52.25%)',
                    color: 'black'
                }}
            />

            <div className="googleSectionContainer">
                <div className="googleSection">    
                    <Overview />
                    <Outcome />
                    
                </div>
            </div>




        </div>
    )
};

export default Google;