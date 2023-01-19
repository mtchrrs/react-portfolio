import React from "react"; 
import "../App.css";
import introImage from '../assets/mitch-img.png'

function Home() {
  return (
    <div class="introSection">
      <div class="introBox">
        <h3 class="intro-h3">G'day, I'm</h3>
        <h1 class="intro-name">Mitch Harris</h1>
        <h4 class="intro-h4">
          Web Developer, Junior Designer, Illustrator, Project Manager,
          Freelancer, Finance & Marketing Student, and Dreamer
        </h4>
      </div>
      <div class="introImg">
        <img src={introImage} alt="Mitch Harris"></img>
      </div>
    </div>
  );
} 
    
export default Home;