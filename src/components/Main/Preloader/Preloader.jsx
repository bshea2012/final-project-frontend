import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <div className="preloader__circle" />
        <p className="preloader__description">Searching for news...</p>
      </div>
    </section>
  );
}

export default Preloader;
