import Container from "./Container";
import style from "../styles/AboutMe.module.css";
import { useState } from "react";
import MyFeatures from "./MyFeatures";
import SkillStack from "./SkillStack";
import Skills from "./Skills";
import SkillEvidences from "./SkillEvidences";

export default function AboutMe() {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <Container id="aboutMe">
      <h1>About Me</h1>
      <div className={style.contentsWrapper}>
        <div className={style.selfIntroduction}>
          <article>
            <p>
              <strong style={{ fontSize: "2rem" }}>F</strong>irst of all, thank
              you for checking out my portfolio! My name is Yosuke Motosugi from
              Japan, currently living in NSW Australia.
            </p>
            <button
              onClick={() => setShowBackground(!showBackground)}
              className={style.button}
            >
              {`${showBackground ? "Hide" : "Show"} my features`}
            </button>
            {showBackground && <MyFeatures />}
          </article>
          <img className={style.img} src="/me.png" height="300px" />
        </div>
        {/* <SkillStack /> */}
        {/* TODO// fix inline styling */}
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <Skills />
          <SkillEvidences />
        </div>
      </div>
    </Container>
  );
}
