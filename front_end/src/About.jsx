import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="home_abut-page">
        <p>
          <Link to={"/"}>Home</Link> /{" "}
        </p>
        <p>About Us</p>
      </div>
      <div className="about_container">
        <div className="about_contant">
          <h6>Missions and vision</h6>
          <p>
            Producing personalized cotton and jute bags in a sustainable
            way. That is what TheCottonBag Company stands for. That is exactly
            why we ensure continuous interaction between our headquarter in
            Belgium and our production departments in India. In this way we can
            take responsibility for the produced quality on the one hand and the
            production method on the other; with a focus on people and the
            planet.
          </p>
          <h6>Why India?</h6>
          <p>
            Our facilities in India, the land of cotton and jute, allow us to
            guarantee the sustainability of our production. By working closely
            with the local population and involving them in the decision-making
            and production processes, we strive for the best possible
            quality with attention to ethics in all its aspects. But apart from
            the accessible production, there are many other reasons why
            TheCottonBag Company has chosen India
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
