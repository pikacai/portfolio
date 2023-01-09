import React from "react";
import "./amazon.scss";
import background from "./amazonBackground.png";
import ca1 from "./image/CAsis.png";
import ca2 from "./image/CAsis2.png";
import ps1 from "./image/persona1.png";
import ps2 from "./image/persona2.png";
import jn from "./image/journeyMapping.png";
import us from "./image/userStory.png";
import fc from "./image/flowchart.png";
import md from "./image/moodboard.png";
import color from "./image/colorPalette.png";
import sg from "./image/styleGuide.png";
import lp from "./image/Quick Add.png";
import mp from "./image/Past Purshcase.png";

export default function Amazon() {
  return (
    <div>
      <img src={background}></img>

      {/* <h2>Three Unequal Columns</h2> */}

      <div class="below">
        <div class="row">
          <div class="column">
            <h2>👨‍👩‍👧‍👦Team</h2>
            <p>
              Judith Merilus
              <br />
              Pika Cai
              <br />
              Mojeed Bello
            </p>
          </div>
          <div class="column">
            <h2>🔧Tools</h2>
            <p>Figma </p>
          </div>
          <div class="column">
            <h2>🗓️Timeline</h2>
            <p>4 weeks</p>
          </div>
        </div>
        {/* <div class="column left"></div> */}
        {/* <div class="column middle"> */}

        <h2>Overview</h2>
        <p>Amazon Fresh offers low prices on everyday items plus free same-day delivery and pickup in select locations for Prime members. It introduces new ways to make grocery shopping more convenient.</p>
        <p>The redesign of Amazon Fresh was centered around providing an easier way for Fresh customers to access products that they wish to buy by reducing friction. This redesign provides shortcuts and easier navigation options.</p>
        <p>As a result, customers are now able to select from either a frequent or advertised section in line with their interests.</p>
        <br />
        <hr />
        <br />

        <h2>Goals</h2>
        <p>
        User Goal<br />
        Having an instant experience by easily navigating to certain parts of the site to find items.<br /><br />
        User Achieves<br />
        Ability to order and reorder selections with minimal clicks.<br /><br />
        Business Goal<br />
        Increase the amount of Amazon Prime using Amazon Fresh and minimizing their use of other competitive online grocery web apps.<br /><br />
        Product Goals<br />
        Accelerate online presence and business growth by providing a convenient service that expands the visibility of product selection to sell items quickly.<br />
        </p>
        <br />
        <hr />
        <br />
        <h2>🧗🏽‍♂️Problem</h2>
        <p>
          How can we make Amazon Fresh easy to navigate so users can find
          products they want in an organized way?
        </p>
        <br />
        <hr />
        <br />
        <h2>Discovery and Research</h2>
        <h4>Competitive Analysis</h4>
        <div class="costco">
          <p>
            Costco has a good sorting system on its pages for users without
            needing to first search{" "}
          </p>
          <img src={ca1}></img>
          <p>
            From our competitive analysis of Walmart, we learned that they had a
            clear option that allows users to quickly reorder past purchases.
          </p>
          <img src={ca2}></img>
        </div>
        <hr />
        <h4>Behavioral Analysis</h4>
        <p>"E-commerce to account for 20% of U.S. grocery market by 2026" - Supermarket News</p>
        <p>
          From <i>Top Advantages of Online Grocery Shopping Advantages</i>, 53%
          users reflect Saves time and 17% users reflect that it can keep stored
          shopping list and reorder from it.
        </p>

        <hr />
        <h4>Survey and interview</h4>
        <p>
          {" "}
          We conducted user research by distributing an online survey to Amazon
          gocery users which vary from daily active users to infrequent users.
          <br />
          Number of Surveys: 30
          <br />
          Number of Interviews: 4
        </p>
        <hr />
        <h4>Personas</h4>
        <p>
          Going further through the research, 2 personas were developed based on
          a sample of 30 amazon gocery users. Each persona has different
          characters, needs, and frustrations. These personas will be useful to
          improve the user experience. Say 👋 to each persona:
        </p>
        <div className="bigsize">
          <img src={ps1}></img>
          <img src={ps2}></img>
        </div>
        <hr />
        <h2>Information Architecture</h2>

        <h4>User Journey</h4>
        <img src={jn}></img>
        <hr />
        <h4>User Stories</h4>
        <p>
        The high priority looks into repurchasing past orders easily as well as finding ways to save money through sales.<br />
        The medium priority deals with frustration with scrolling, since users wants fast and easy access to food categories.
        </p>
        <div class="smallsize">
          <img src={us}></img>
        </div>
        <h4>Flowchart</h4>
        <p>
          The flowchart displays an issue brought up by users in the user story. Amazon's "past purchase" list requires additional steps to access that becomes frustrating for users. We attempt to fix this by limiting the steps needed to reorder items which Amazon's competitors have already implemented.
        </p>
        <img src={fc}></img>
        {/* <h4>Survey and interview</h4> */}
        <h2>Visual Design</h2>
        <h4>Moodboard</h4>
        <p>
          Since amazon fresh is an online grocery store, we felt inspired to use a nature theme (hence the color green and smiles). The end goal of shopping is to prepare meals that bring smiles and joy.
        </p>
        <div class="costco">
          <img src={md}></img>
        </div>
        <h4>Typography, Scale, and Color</h4>
        <p>
        Our color pattern is meant to connect to nature. Although included here, we decided not to utilize it in our final product as it was not an issue during our research and discovery.
        </p>
        <div class="costco">
          <img src={color}></img>
        </div>
        <h4>Style Guide</h4>
        <p>Elements used in the UI design, colors, and grid.</p>
        <div class="costco">
          <img src={sg}></img>
        </div>
        <h2>Prototype/Testing</h2>
        <h4>Prototype</h4>
        <p>
          After accumulating the data from research and discoveries from users
          we put together a wireframe with the goal of solving our user
          frustrations. After conducting usability testing we received feedback
          from our users about the confusion regarding how items are added to
          carts.
        </p>
        <img src={lp}></img>
        <p>
          Improving upon the results of the mid-fidelity testing, the design of the high-fidelity was as follows. The cart issue was removed to alleviate confusion. Through our research, sales recommendations based on previous orders may be useful so it is included.
        </p>
        <img src={mp}></img>
        <h4>Testing</h4>
        <p>
          The feedback we received also helped us understand that our redesign
          was moving in the right step as these seem to be understood by the
          users.
        </p>
        <p>
          Q: Please find the previous order and click on it.
          <br />
          User Reflection: Easily navigates to the past purchases button
          <br />
          <br />
          Q: Can you locate the sales button and click on it?
          <br />
          User Reflection: Easily navigates to the All sales button to find
          sales
          <br />
          <br />
          Q: Please find the cart option when placing orders.
          <br />
          User Reflection: Navigates to the top cart and the all to cart button,
          user assumed that you would first click the all cart button before
          choosing the cart icon on the top left
        </p>
        <br />
        <br />
        <h2>Reflection</h2>
        <p>
          This was my first ever UX project! It was amazing experience to walk
          through an entire UX process. I've learned:{" "}
        </p>
        <p>
          Not process-driven. Always consider the UX process by order. It is
          always always research first!!!
        </p>
      </div>
    </div>
  );
}
