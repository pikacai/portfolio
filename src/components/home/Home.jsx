import "./home.scss";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1 className="nameHeading">
        <span className="waving">Pika</span> Cai
      </h1>
      <p className="textHeading">
        Enabling the human factor in the products we use <br />
        UX/UI Design | UX Research | Product Designer
      </p>

      <div class="mouse_scroll">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>

    </div>
  );
}
