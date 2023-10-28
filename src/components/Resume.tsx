function Resume() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center py-36 bg-slate-50">
      <div className="h-[11in] w-[8.5in] shadow-[rgba(0,0,0,0.16)_0px_1px_4px] text-xs p-8 bg-white">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl text-blue-500">Senhuang Cai</h1>
          <p>
            <span className="underline">sc3322@cornell.edu</span>,
            <span className="underline">in/senhuangcai</span>,
            <span className="underline">b-o-s-s-e-s.github.io/portfolio</span>
          </p>
        </div>

        {/* Experience */}
        <div>
          <h1 className="text-lg border-b text-blue-500">Experience</h1>
          <p>Experience Design Intern, MetLife</p>
          <p>Jun 2022 – Aug 2022</p>
          <ul>
            <li>
              Designed and delivered a prototype of an internal social network
              and news application for building community with 20 core features
              as informed by data analysis on onboarding metrics. Collaborated
              on an agile team and utilized Figma and Adobe XD to create a
              design system and conduct usability testing throughout development
              with an emphasis on advocating for the user by diving deeply into
              user journeys.
            </li>
            <li>
              Streamlined a slow project creation workflow, resulting in a 30%
              reduction in miscommunication and delays, as measured by team
              surveys and project status reports, by conducting market research
              on modern implementations, focusing on user-centered design, and
              communicating with cross-functional teams to understand the issue,
              establish requirements, and delegate stories.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
