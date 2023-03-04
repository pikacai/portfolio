import "./home.scss";

export default function Home() {
  return (
    <div className='homeContainerContainer'>
      <div className="homeContainer">
        <h1 className="nameHeading">
          <span className="waving">Pika</span> Cai
        </h1>
        <p className="textHeading">
          Enabling the human factor in the products we use <br />
          UX/UI Design | UX Research | Product Designer
        </p>

        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>

      </div>
    </div>
  );
}
