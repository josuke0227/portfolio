import Container from "./Container";
import style from "../styles/AboutMe.module.css";
import { useState } from "react";
import MyFeatures from "./MyFeatures";
import Skills from "./Skills";
import SkillEvidences from "./SkillEvidences";

export default function AboutMe() {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <Container id="aboutMe">
      <h2>About Me</h2>
      <div className={style.contentsWrapper}>
        <div className={style.leftPart}>
          <article>
            <p>
              <strong className={style.emphersize}>F</strong>irst of all, thank
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
          <img className={style.img} src="/me.png" />
        </div>
        <div className={style.rightPart}>
          <Skills />
          <SkillEvidences />
        </div>
      </div>
    </Container>
  );
}
