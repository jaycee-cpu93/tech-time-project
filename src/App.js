import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero/>
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
    </React.Fragment>
  )
}

export default App;
