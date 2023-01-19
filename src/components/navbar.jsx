import React from "react";
import "../App.css";
import resumePath from "../assets/Resume.pdf";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="header">
            <p className="mtchrrs links">
                <Link to={`${process.env.PUBLIC_URL}/`}><code>mtchrrs.</code></Link>
            </p>
                  
            <ul className="navlist">
                
                <li className="links">
                    <Link to={`${process.env.PUBLIC_URL}/about`}>about me</Link>
                </li>
                <li className="links">
                    <Link to={`${process.env.PUBLIC_URL}/projects`}>my work</Link>
                </li>
                <li className="links">
                    <Link to={`${process.env.PUBLIC_URL}/contact`}>contact</Link>
                </li>
                <li className="links">
                    <a href={resumePath} download="Resume.pdf">my resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;