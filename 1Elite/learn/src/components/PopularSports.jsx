function PopularSports() {

  const openSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>

      <h2>Popular Sports</h2>

      <div className="popular">

        <div
          onClick={() =>
            openSite("https://www.icc-cricket.com")
          }
        >
          🏏 Cricket
        </div>

        <div
          onClick={() =>
            openSite("https://www.atptour.com")
          }
        >
          🎾 Tennis
        </div>

        <div
          onClick={() =>
            openSite("https://www.nba.com")
          }
        >
          🏀 NBA
        </div>

        <div
          onClick={() =>
            openSite("https://www.ufc.com")
          }
        >
          🥊 UFC
        </div>

      </div>

    </section>
  );
}

export default PopularSports;