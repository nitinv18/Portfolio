import "./Hero.css";

function Hero({ profile }) {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greetting">Hi, I'm</p>
          <h1 className="hero-name">{profile?.name}</h1>
          <h1 className="hero-title">{profile?.title}</h1>
          <p className="hero-tagline">{profile?.tagline}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              see my projects
            </a>
            <a href="#contact" className="btn btn-outline">
              contact me
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={profile?.photo} alt={profile?.name} />
        </div>
      </div>
    </section>
  );
}

export default Hero;



