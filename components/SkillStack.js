import style from "../styles/AboutMe.module.css";
import SkillEvidences from "./SkillEvidences";

export default function SkillStack() {
  return (
    <div className={style.skillStackSection}>
      <div>
        <h2>Skill stack</h2>
        <div className={style.skillStackShowcase}>
          <img className={style.square} src="/HTML5_Logo.svg" />
          <img className={style.squareCss} src="/css_logo.svg" />
          <img className={style.square} src="/javascript_logo.png" />
          <img className={style.square} src="/sass_logo.svg" />
          <img className={style.squareReact} src="/react_logo.svg" />
          <img className={style.square} src="/react_bootstrap_logo.png" />
          <img className={style.square} src="/styled-components_logo.png" />
          <img className={style.square} src="/next_logo.png" />
          <img
            className={style.twoSpans1}
            src="/nodejs_logo.svg"
            width="200"
            height="80"
          />
          <img
            className={style.twoSpans2}
            src="/mongodb_logo.png"
            width="200"
            height="100"
          />
        </div>
        <SkillEvidences />
      </div>
    </div>
  );
}
