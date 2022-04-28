import React from "react";
import "./about.css";
import Award from "../../img/inspired-award-800.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://www.dropbox.com/s/yyfk819n48j12as/christina-wocintechchat-com-jEGi-CghvjE-unsplash.jpg?raw=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Jen Perez. I'm a brand new full stack Java developer based
          in Atlanta, GA.
        </p>
        <p className="a-desc">
          I've been a creator as far back as I can remember. After bouts of
          writing and drawing comic books with my friends, I listened to my
          parents and got a "real" degree in Political Science from the
          University of Georgia. I opened and operated a retail store. I tried
          working as a banker. I taught fitness classes. But, you can take the
          girl out of the art, but you can't take the art out of the girl. I've
          since written a screenplay for a feature film and for a series. (Ask
          about my IMDb creds later!) I was teaching high school literature up
          until the COVID pandemic decimated our little private school, and I
          joined the millions of unemployed Americans.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              The Inspired Design Award recognizes innovative website and popup
              designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
