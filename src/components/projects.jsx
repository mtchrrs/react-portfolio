import React from "react";
import "../App.css";
import Git from "../assets/git-logo.png";
import Launch from "../assets/launch-logo.png";  

import MoodApp from "../assets/mood-tracker.png";
import JATE from "../assets/jate.png";
import Commodity from "../assets/commodity-news.png";
import Password from "../assets/password.png";
import Quiz from "../assets/quiz.png";
import Scheduler from "../assets/work-day-scheduler.png";
import network from "../assets/network.png"

function Projects() {
  return (
    <div class="workSection my-work">
      <div class="work-card">
        <div class="work-img jate-img">
          <img class="img-resize" src={network} alt="Network.io Application"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/network.io">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://networkio-version-one.netlify.app/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>
      
      <div class="work-card">
        <div class="work-img jate-img">
          <img class="img-resize" src={JATE} alt="Jate Application"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/text-editor-PWA">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://textttttt-editorrrr.herokuapp.com/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>

      <div class="work-card">
        <div class="work-img mood-img">
          <img class="img-resize" src={MoodApp} alt="Mood Tracker"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/rochak-ms/mood_tracker">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://trackmymood.herokuapp.com/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>

      <div class="work-card">
        <div class="work-img commodity-img">
          <img class="img-resize" src={Commodity} alt="Commodity News"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/commodity-news">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://mtchrrs.github.io/commodity-news/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>

      <div class="work-card">
        <div class="work-img scheduler-img">
          <img class="img-resize" src={Scheduler} alt="Work Day Scheduler"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/work-day-scheduler">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://mtchrrs.github.io/work-day-scheduler/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>

      <div class="work-card">
        <div class="work-img password-img">
          <img class="img-resize" src={Password} alt="Random Password Generator"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/random-password-generator">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://mtchrrs.github.io/random-password-generator/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>

      <div class="work-card">
        <div class="work-img quiz-img">
          <img class="img-resize" src={Quiz} alt="Coding Quiz"></img>
        </div>
        <div class="gitandlaunch">
          <a class="git" href="https://github.com/mtchrrs/coder-quiz">
            <img src={Git} alt="github"></img>
          </a>
          <a class="launch" href="https://mtchrrs.github.io/coder-quiz/">
            <img src={Launch} alt="launch"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;