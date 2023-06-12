import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSeven from "./components/SectionSeven";
import SectionSix from "./components/SectionSix";
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
      <SectionFour/>
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </React.Fragment>
  )
}

export default App;
