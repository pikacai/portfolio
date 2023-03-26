import Cover from '../Cover';
import googleLogo from "../google/logo.svg";
import googleImage from "../google/image.svg";

import Overview from './overview/Overview';
import Outcome from './outcome/Outcome';
import UserSurvey from './userSurvey/UserSurvey';
import BehavioralAnalysis from './behavioralAnalysis/BehavioralAnalysis';
import CompetitiveAnalysis from './competitiveAnalysis/CompetitiveAnalysis';
import UserStories from './userStories/UserStories';
import Personas from './personas/Personas'
import JourneyMapping from './journeyMapping/JourneyMapping';
import Sketches from './sketches/Sketches';
import FinalPrototype from './finalPrototype/FinalPrototype';
import ProjectLearnings from './projectLearnings/ProjectLearnings';

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
                reverse={true}
            />

            <div className="googleSectionContainer">
                <div className="googleSection"> 
                    {/* // .googleGreen = color: '#2DA94E';
                    //.googleBlue = color: '#4285F3'; 
                    //.googleRed = color: '#EA4435';
                    //.googleYellow = color: '#FABD03';    */}
                    <Overview />
                    <Outcome />
                    <UserSurvey />
                    <BehavioralAnalysis />
                    <CompetitiveAnalysis />
                    <UserStories />
                    <Personas />
                    <JourneyMapping />
                    <Sketches />
                    <FinalPrototype />
                    <ProjectLearnings />
                </div>
            </div>




        </div>
    )
};

export default Google;