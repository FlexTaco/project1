import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";
import maleFlyweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/PANTOJA_ALEXANDRE_BELTMOCK..png";
import maleBantamweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/OMALLEY_SEAN_BELTMOCK.png";
import maleFeatherweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/VOLKANOVSKI_ALEXANDER_BELT_07-08.png";
import maleLightweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/MAKHACHEV_ISLAM_BELT_02-11.png";
import maleWelterweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/EDWARDS_LEON_BELT_03-18.png";
import maleMiddleweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/STRICKLAND_SEAN_BELTMOCK.png";
import maleLightHeavyweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/HILL_JAMAHAL_BELT.png";
import maleHeavyweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/JONES_JON_BELT_03_04.png";
import femaleStrawweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/WEILI_ZHANG_BELT_08-19.png";
import femaleFlyweight from "/Users/junior/Desktop/randos/web102 project1/Community Board/src/assets/GRASSO_ALEXA_BELT_09-16.png";

function App() {
  return (
    <>
      <h1 className="title">UFC Champions</h1>
      <div className="container">
        <Cards
          sex="Male"
          weight="flyweight"
          img={maleFlyweight}
          link="https://www.ufc.com/athlete/alexandre-pantoja"
        />
        <Cards
          sex="Male"
          weight="Bantamweight"
          img={maleBantamweight}
          link="https://www.ufc.com/athlete/sean-omalley"
        />
        <Cards
          sex="Male"
          weight="Featherweight"
          img={maleFeatherweight}
          link="https://www.ufc.com/athlete/alexander-volkanovski"
        />
        <Cards
          sex="Male"
          weight="Lightweight"
          img={maleLightweight}
          link="https://www.ufc.com/athlete/islam-makhachev"
        />
        <Cards
          sex="Male"
          weight="Welterweight"
          img={maleWelterweight}
          link="https://www.ufc.com/athlete/leon-edwards"
        />
        <Cards
          sex="Male"
          weight="Middleweight"
          img={maleMiddleweight}
          link="https://www.ufc.com/athlete/sean-strickland"
        />
        <Cards
          sex="Male"
          weight="Light Heavyweight"
          img={maleLightHeavyweight}
          link="https://www.ufc.com/athlete/jamahal-hill"
        />
        <Cards
          sex="Male"
          weight="maleHeavyweight"
          img={maleHeavyweight}
          link="https://www.ufc.com/athlete/weili-zhang"
        />
        <Cards
          sex="Female"
          weight="Strawweight"
          img={femaleStrawweight}
          link="https://www.ufc.com/athlete/alexa-grasso"
        />
        <Cards
          sex="Female"
          weight="Flyweight"
          img={femaleFlyweight}
          link="https://www.ufc.com/athlete/alexandre-pantoja"
        />
      </div>
    </>
  );
}

export default App;
