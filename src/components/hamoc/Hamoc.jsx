import cover from "./cover.svg";
import figma from "./figma.svg";
import zoom from "./zoom.svg";
import slack from "./slack.svg";
import photoshop from "./photoshop.svg";
import drive from "./drive.svg";
import gmail from "./gmail.svg";
import meet from "./meet.svg";
import comparison from "./comparison.svg";
import phoebe1 from "./phoebe1.svg";
import phoebe2 from "./phoebe2.svg";
import flowchart from "./flowchart.svg";
import solution from "./solution.svg";
import wireframes from "./wireframes.svg";
import brandstyle from "./brandstyle.svg";
import beforeafter from "./beforeafter.png";
import vistor from "./visitor.svg";
import featured from "./featured.svg";
import events from "./events.svg";
import giftshop from "./giftshop.svg";
import "./hamoc.scss";

const Hamoc = () => {
  return (
    <>
      <img src={cover} alt="cover" />

      <div className="contentContainer">
        <div className="content">
          <div className="divider">
            <div className="dividerLeft">
              <div>
                <h3>My Role</h3>
                <div>Lead UX/UI Designer</div>
              </div>

              <div>
                <h3>The Team</h3>
                <div>HAMOC UX Team</div>
              </div>
            </div>

            <div className="dividerRight">
              <div>
                <h3>Timeline</h3>
                <div>5 months</div>
              </div>

              <div>
                <h3>Tools Used</h3>
                <div className="logos">
                  <img className="logo" src={figma} alt="figma" />
                  <img className="logo" src={zoom} alt="zoom" />
                  <img className="logo" src={slack} alt="slack" />
                  <img className="logo" src={photoshop} alt="photoshop" />
                  <img className="logo" src={drive} alt="drive" />
                  <img className="logo" src={gmail} alt="gmail" />
                  <img className="logo" src={meet} alt="meet" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Background</h3>
            <div>
              The Haitian American Museum of Chicago was established in 2012 by
              its co-founder, Elsie Hernandez. Its mission is to create an
              institution that holds programs and exhibits that will contribute
              to the rich multicultural tapestry that is Chicago, showcasing
              Haiti’s rich culture, art, and history. The Haitian American
              Museum of Chicago's 10th Anniversary milestone aligned with a
              major expansion of square footage. After consulting with our
              clients, we were able to identify two goals for HAMOC. These are
              the ways the website can address these goals. However, despite
              their venerable reputation for excellent arts programming and work
              in the community, they have struggled to grow, constrained by
              limited resources and manpower.
            </div>
          </div>

          <div>
            <h3>Problem</h3>
            <div>
              How might we restructure the Haitian American Museum of Chicago’s
              (HAMOC) website in order to increase engagement and funding
              opportunities?
            </div>
          </div>

          <div>
            <h3>Goal</h3>
            1. We tackled their website to optimize its impact, focusing on its
            ability to bring in new revenue both directly and indirectly. -We
            designed for sustainability, so that the site could be maintained
            and adapted easily, future
            <br></br>
            2. proofed to grow alongside HAMOC, and allow changes to be
            implemented both immediately and incrementally.
          </div>

          <div>
            <h3>Research</h3>
            <div>
              We began by conducting behavioral research methods to measure what
              users actually do, providing quantitative data about how users
              actually interact with the product or service in question. After
              researching quantitative data, we conducted surveys and interviews
              to gather qualitative data. By doing so, we were able to delve
              deeper into users’ experiences in order to pinpoint any current
              pain points, needs, and to better understand their motivations in
              order to form the Information Architecture.
            </div>
          </div>

          <div>
            <h3>Affinity Maps Findings</h3>
            <div>
              81% of visitors support a museum and it’s mission by visiting. 43%
              of users visit a museum 1-3 times a year. 38% of users find that
              the website experience influences their likelihood of visiting.
            </div>
          </div>

          <div>
            <h3>Competitive Analysis</h3>
            <div className="solutionImageContainer">
              <img
                className="bigger"
                src={comparison}
                alt="comparison"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div>
            <h3>Persona</h3>
            <div>
              Based on the interviews and research findings, to get a better
              gauge of the mindset, challenges, motivations and journey of our
              users, we created two personas. Each persona has different
              characters, needs, and frustrations. These personas will be useful
              to improve the user experience for each one of them. Say hi 👋 to
              each persona:
              <div className="solutionImageContainer">
                <img className="bigger" src={phoebe1} alt="phoebe1" />
              </div>
            </div>
          </div>

          <div>
            <h3>User Stories</h3>
            <div>
              We develop our user stories base on the combination of research
              and user feedback to prioritize design decisions and ensure that
              redesign is meeting the needs of its target users.
              <div className="solutionImageContainer">
                <img
                  className="bigger"
                  src={phoebe2}
                  alt="phoebe2"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div>
            <h3>User Flowchart</h3>
            <div>
              We carefully considered each step new and returning users would
              have to go through in order to accomplish all their goals when
              browsing through the Haitian American Museum of Chicago’s website.
              <div className="solutionImageContainer">
                <img className="bigger" src={flowchart} alt="flowchart" />
              </div>
            </div>
          </div>

          <div>
            <h3>The Solution</h3>
            <div>
              After combining all our research thus far, we knew what to narrow
              down and which features would be the most crucial components in
              helping our users navigate the platform.
              <div className="solutionImageContainer">
                <img className="solutionImage" src={solution} alt="solution" />
              </div>
            </div>
          </div>

          <div>
            <h3>Wireframes</h3>
            <div>
              From here we were able to create our low-mid fidelity and figure
              out how to best organize the content and lay out the website.
              <div className="solutionImageContainer">
                <img className="bigger" src={wireframes} alt="wireframes" />
              </div>
            </div>
          </div>

          <div>
            <h3>Brand & Style</h3>
            <div className="solutionImageContainer">
              <img
                className="bigger"
                src={brandstyle}
                alt="brandstyle"
                style={{ width: "70%" }}
              />
            </div>
          </div>

          <div>
            <h3>Before & After Homepage</h3>
            <div className="solutionImageContainer">
              <img className="bigger" src={beforeafter} alt="beforeafter" />
            </div>
          </div>

          <div>
            <h3>The Final Design</h3>

            <div className="lastRowContainer">
              <div className="lastRow">
                <div className="lastDivider">
                  <div className="dividerLeft">
                    <div>
                      <h3>
                        Locate visitor information , purchase tickets, and
                        schedule a tour
                      </h3>
                      <div>
                        Consolidating all visitor information together by
                        grouping these tasks/information together, it allows
                        guests to efficiently plan their visit ahead of time.
                        Including FAQ for providing an organized collection of
                        importation that visitor are often looking for. FAQ
                        pages aren’t just great for agents, they’re great for
                        customer experience. A Microsoft study shows that 66% of
                        all customers consult self-service resources before
                        contacting an agent.
                      </div>
                    </div>
                  </div>

                  <div className="dividerRight">
                    <img className="lastRowBigger" src={vistor} alt="vistor" />
                  </div>
                </div>

                <div className="lastDivider">
                  <div className="dividerLeft">
                    <img
                      className="lastRowBigger"
                      src={featured}
                      alt="featured"
                    />
                  </div>

                  <div className="dividerRight">
                    <div>
                      <h3>Preview featured art & artists</h3>
                      <div>
                        Providing Featured Art & Artists page allows users to
                        preview titles, descriptions, and date range of the
                        exhibits and collections being offered. Online museum
                        has interesting histories and artists background to
                        inspire and educate visitors. That encourage family or
                        friends to have a great way to spend time and learn
                        together in museums and have a fun time with children to
                        learn Haiti culture and history.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lastDivider">
                  <div className="dividerLeft">
                    <div>
                      <h3>
                        Locate visitor information , purchase tickets, and
                        schedule a tour
                      </h3>
                      <div>
                        Consolidating all visitor information together by
                        grouping these tasks/information together, it allows
                        guests to efficiently plan their visit ahead of time.
                        Including FAQ for providing an organized collection of
                        importation that visitor are often looking for. FAQ
                        pages aren’t just great for agents, they’re great for
                        customer experience. A Microsoft study shows that 66% of
                        all customers consult self-service resources before
                        contacting an agent.
                      </div>
                    </div>
                  </div>

                  <div className="dividerRight">
                    <img className="lastRowBigger" src={events} alt="events" />
                  </div>
                </div>

                <div className="lastDivider">
                  <div className="dividerLeft">
                    <img
                      className="lastRowBigger"
                      src={giftshop}
                      alt="giftshop"
                    />
                  </div>

                  <div className="dividerRight">
                    <div>
                      <h3>Preview featured art & artists</h3>
                      <div>
                        Providing Featured Art & Artists page allows users to
                        preview titles, descriptions, and date range of the
                        exhibits and collections being offered. Online museum
                        has interesting histories and artists background to
                        inspire and educate visitors. That encourage family or
                        friends to have a great way to spend time and learn
                        together in museums and have a fun time with children to
                        learn Haiti culture and history.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Next Step</h3>
            <p>
              Next Steps - Currently working on implementing the UX changes with
              HAMOC developers, creating a plan to execute it in stages.
            </p>
          </div>
          <div>
            <h3>Conclusion</h3>
            <p>
              This project allowed me to gain valuable experience and develop my
              skills in a real-world setting. Collaborating with a diverse team
              and working closely with a client presented its own unique set of
              challenges, but we were able to overcome them through perseverance
              and effective communication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamoc;
