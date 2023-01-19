import React from "react";
import Technologies from "./technologies.jsx";
import "../App.css";

function About() {
    return (
        <div class="secondSection about">
          <div class="aboutSection">
            <h3 class="about-h3">So who am I?</h3> 
            <p class="about-p">Well isn't that just the trickiest question to answer? </p>
            <p class="about-p">Not really. I am a man on a mission, with the goal of interacting with people, visiting places and having experiences that I learn and grow from. I am chasing information, opportunities and the ever-so elusive 'freedom'. I am currently focusing on learning more about Startups and running businesses, as I believe that this is the directiont that I will benefit most from.</p>
            <p class="about-p">Please click the 'contact' link if you would like to get in touch! </p>
          </div>

          {/* the following section shows my tech skills  */}

          <Technologies />
        </div>
    )
}

export default About;