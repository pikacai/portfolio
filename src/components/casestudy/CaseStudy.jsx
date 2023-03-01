import React from "react";
import googleLogo from "../google/logo.svg";
import googleImage from "../google/image.svg";

import hamocLogo from "../hamoc/logo.svg";
import hamocImage from "../hamoc/image.svg";

import amazonLogo from "../amazon/logo.svg";
import amazonImage from "../amazon/image.svg";

import metlifeLogo from "../metLife/logo.svg";
import metlifeImage from "../metLife/image.svg"
import Card from "../Card";
import "./caseStudy.scss";

export default function CaseStudy() {
  return (
    <div className='caseStudySectionContainer'>
      <div className='caseStudySection'>
        <Card
          companyLogo = {googleLogo}
          companyProduct = {'Google Maps'}
          image = {googleImage}
          title = {'Improving on-road usage.'}
          description = {'This case study examines common complaints of on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use featuresthat can be improved for Google Maps.'}
          css = {{
            background: 'linear-gradient(360deg, #E1EDFD 4.11%, #FAFAFA 52.25%)',
            color: 'black'
          }}
          link = {'google'}
        />

        <Card
          companyLogo = {hamocLogo}
          companyProduct = {'Website'}
          image = {hamocImage}
          title = {'The Haitian American Museum of Chicago.'}
          description = {'Connecting the wealth of Haitian culture, history, and spirit with the Chicago community and beyond.'}
          css = {{
            background: '#F2F2F2',
            color: '#3C4257'
          }}
          link = {'hamoc'}
        />

        <Card
          companyLogo = {metlifeLogo}
          companyProduct = {'Project Creation'}
          image = {metlifeImage}
          title = {'Bolstering internal project creation.'}
          description = {'Connecting the wealth of Haitian culture, history, and spirit with the Chicago community and beyond.'}
          css = {{
            background: 'conic-gradient(from 153.62deg at 24.2% 0%, #0070B7 0deg, #007DC2 360deg)',
            color: 'white'
          }}
          link = {'metlife'}
        />


        <Card
          companyLogo = {amazonLogo}
          companyProduct = {'Amazon Grocery'}
          image = {amazonImage}
          title = {'Grocery shopping speed-up'}
          description = {'I examine how to increase the rate of purchasing on Amazon grocery.'}
          css = {{
            background: 'linear-gradient(180deg, #232F3E 0%, #131A22 100%)',
            color: 'white'
          }}
          link = {'amazon'}
        />
      </div>
    </div>
  );
}
