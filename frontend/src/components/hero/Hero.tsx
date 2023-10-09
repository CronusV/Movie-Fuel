import { Button } from "react-bootstrap";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-content_left">
          <h1>
            Real People <br /> Real Reviews
          </h1>
          <p className="text-warning">Seen any movies lately?</p>
          <div className="actions">
            <Button variant="danger" style={{fontFamily: "Poppins, sans-serif"}}>WRITE A REVIEW</Button>
            <Button variant="outline-warning">READ REVIEWS</Button>
          </div>
        </div>
        <div className="hero-content_right"></div>
      </div>
    </section>
  );
};

export default Hero;
