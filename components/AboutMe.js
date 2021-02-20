import Container from "./Container";
import style from "../styles/AboutMe.module.css";
import { useState } from "react";
import MyFeatures from "./MyFeatures";
import SkillStack from "./SkillStack";

export default function AboutMe() {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <Container id="aboutMe">
      <h1>About Me</h1>
      <div className={style.contentsWrapper}>
        <div className={style.selfIntroduction}>
          <img className={style.img} src="/me.png" height="300px" />
          <div className="mt-1">
            <p>
              <strong style={{ fontSize: "2rem" }}>F</strong>irst of all, thank
              you for checking out my portfolio!
            </p>
            <p>
              My name is Yosuke Motosugi from Japan, currently living in NSW
              Australia.
            </p>
          </div>
          <button
            onClick={() => setShowBackground(!showBackground)}
            className={style.button}
          >
            {`${showBackground ? "Hide" : "Show"} my features`}
          </button>

          {showBackground && <MyFeatures />}
        </div>
        <SkillStack />
      </div>
    </Container>
  );
}
