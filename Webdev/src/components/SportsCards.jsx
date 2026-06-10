import f1 from "../assets/f1.jpg";
import fifa from "../assets/fifa.jpg";
import motogp from "../assets/motogp.jpg";

function SportsCards() {

  const openSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>

      <h2>Official Sports Websites</h2>

      <div className="cards">

        <div
          className="card"
          onClick={() =>
            openSite("https://www.formula1.com")
          }
        >
          <img src={f1} alt="F1" />
          <h3>Formula 1</h3>
        </div>

        <div
          className="card"
          onClick={() =>
            openSite("https://www.fifa.com")
          }
        >
          <img src={fifa} alt="FIFA" />
          <h3>FIFA</h3>
        </div>

        <div
          className="card"
          onClick={() =>
            openSite("https://www.motogp.com")
          }
        >
          <img src={motogp} alt="MotoGP" />
          <h3>MotoGP</h3>
        </div>

      </div>

    </section>
  );
}

export default SportsCards;