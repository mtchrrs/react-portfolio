import React from "react";
import Navigation from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router class="App">
        <Navigation />
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={ <Home /> }/>
          <Route exact path={`${process.env.PUBLIC_URL}/about`} element={ <About /> }/>
          <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={ <Projects /> }/>
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} element={ <Contact /> }/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;