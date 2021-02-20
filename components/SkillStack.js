import style from "../styles/AboutMe.module.css";
import SkillEvidences from "./SkillEvidences";

export default function SkillStack() {
  return (
    <div className={style.skillStackSection}>
      <div>
        <h2>Skill stack</h2>
        <div className={style.skillStackShowcase}>
          <img src="/html_logo.svg" width="90" height="90" />
          <img src="/css_logo.svg" width="90" height="90" />
          <img src="/javascript_logo.png" width="90" height="90" />
          <img src="/sass_logo.svg" width="90" height="90" />
          <img src="/react_logo.svg" width="90" height="90" />
          <img src="/react_bootstrap_logo.png" width="90" height="90" />
          <img src="/styled-components_logo.png" width="90" height="90" />
          <img src="/next_logo.png" width="90" height="90" />
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
