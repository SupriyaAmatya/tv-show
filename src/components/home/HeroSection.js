import React from 'react';
import { Link} from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay" />
      <div className="container">
        <div className="hero-section__body">
          <h2 className="hero-section__title">Welcome to the TV shows</h2>
          <p className="hero-section__para">Find all details about your favourite tv shows</p>
          <Link to="/shows"> <button className="btn btn--outlined-primary btn--large">Show All </button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
