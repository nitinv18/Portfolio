import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero-inner">
                <div className="hero-text">
                <p className="hero-greetting">Hi, I'm</p>
                <h1 className="hero-name">Nitin Vishwakarma</h1>
                <h1 className="hero-title">Mern Stack Developer</h1>
                <p className="hero-tagline">
                    I build simple,fast web apps with React and node.js and 
                    I'm looking for my first role as a full_stack developer.
                    </p>
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
                                <img src="/profile.jpg" alt="Nitin Vishwakarma" />
                            </div>
            </div>
        
        </section>
    );
}
export default Hero;



