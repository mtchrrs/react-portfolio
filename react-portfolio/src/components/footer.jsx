import React from "react"; 
import "../App.css";
import Twitter from "../assets/twitter-logo.png";
import Git from "../assets/git-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Instagram from "../assets/instagram-logo.png";

function Footer() { 
    return ( 
        <div class="footer">

          <div class="icon-holder">
            <a class="twitter-icon" href=""><img src={Twitter} alt="twitter icon"></img></a>
            <a class="git-icon" href=""><img src={Git} alt="git icon"></img></a>
            <a class="linkedin-icon" href=""><img src={Linkedin} alt="linkedin icon"></img></a>
            <a class="instagram-icon" href=""><img src={Instagram} alt="instagram icon"></img></a>
          </div>

        </div>
    ) 
} 
    
export default Footer;