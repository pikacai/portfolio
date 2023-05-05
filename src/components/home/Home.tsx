import Experience from "./Experience";

import report from '../../assets/report.gif';
import redesign from '../../assets/hamoc/redesign.png'
import metconnect from '../../assets/metconnect.png';

interface ExperienceType {
  product: string,
  type: string,
  date: string, 
  description: string, 
  visuals: Record<string, string>[]
  link: string
}

function Home() {
  const experience:ExperienceType[] = [
    {
      product: 'Google Maps',
      type: 'Case Study',
      date: '2022-2023',
      description: "This study investigates typical issues that users encounter when using Google Maps while driving, and proposes prototypes that could enhance the app's functionality. Through the analysis of other mapping apps such as Apple Maps and Waze, this study identifies features that could be adapted and integrated into Google Maps to improve the overall user experience.",
      visuals: [{
        img: report,
        alt: 'Mockup of Google Maps on a phone.'
      }],
      link: 'google'
    },
    {
      product: 'The Haitian American Musuem Website',
      type: 'Case Study',
      date: '2022',
      description: 'Improving on-road usage. This case study examines common complaints of on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use featuresthat can be improved for Google Maps.',
      visuals: [{
        img: redesign,
        alt: 'Design of The Haitian American Musuem Website with annotations.'
      }],
      link: 'hamoc'
    },
    {
      product: 'MetConnect',
      type: 'Product',
      date: '2023',
      description: "MetConnect is a technology platform designed to promote connection and inclusivity in the workplace. By enabling new hires to connect over shared interests, we aim to cultivate a workforce that is not only dedicated to their work but also to each other. At MetConnect, we believe that when employees feel valued and supported by their peers, they are more likely to succeed and thrive in their roles.",
      visuals: [{
          img: metconnect,
          alt: 'A profile page on MetConnect as viewed on an iPad.'
      }],
      link: 'metlife'
    }
  ];

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='w-screen md:w-[70%] flex flex-col gap-y-32'>
        <div className='relative h-screen flex flex-col justify-center items-center'>
          <div className='flex items-center flex-col text-center gap-5 md:flex-row md:text-left justify-between w-[90%] lg:w-[40%]'>
            <h1 className='text-8xl font-semibold'>Pika Cai</h1>
            <h2 className='text-3xl md:text-6xl font-light w-[50%]'>I am a <span>strategic</span> <span className='font-semibold'>Product Designer</span> guided by <span className='underline'>curiosity</span> and <span className='underline'>empathy</span>.</h2>
          </div>

          <div className='absolute bottom-10 h-16 w-9 flex justify-center rounded-full border-2 border-black'>
            <div className='h-2 w-2 mt-2 rounded-full border border-black animate-bounce'></div>
          </div>
        </div>

        {
          experience.map( (entry, index) => 
            <Experience 
              product={entry.product}
              type={entry.type}
              date={entry.date}
              description={entry.description}
              visuals={entry.visuals}
              link={entry.link}
              key={index}
            />
          )
        }
      </div>
    </div>
  )
}

export default Home;
