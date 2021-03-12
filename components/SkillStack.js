import style from "../styles/AboutMe.module.css";
import SkillEvidences from "./SkillEvidences";

export default function SkillStack() {
  return (
    <div className={style.skillStackSection}>
      <h2>Skill stack</h2>
      <div className={style.skillStackShowcase}>
        <img
          className={`${style.square} ${style.html}`}
          src="/HTML5_Logo.svg"
        />
        <img className={`${style.square} ${style.css}`} src="/css_logo.svg" />
        <img
          className={`${style.square} ${style.js}`}
          src="/javascript_logo.png"
        />
        <img className={`${style.square} ${style.next}`} src="/next_logo.png" />
        <img className={`${style.square} ${style.sass}`} src="/sass_logo.svg" />
        <img
          className={`${style.square} ${style.react}`}
          src="/react_logo.svg"
        />
        <img
          className={`${style.square} ${style.node}`}
          src="/nodejs_logo.svg"
        />
        <img
          className={`${style.square} ${style.reactBootstrap}`}
          src="/react_bootstrap_logo.png"
        />
        <img
          className={`${style.square} ${style.styledComponents}`}
          src="/styled-components_logo.png"
        />
        <img
          className={`${style.square} ${style.mongoDb}`}
          src="/mongodb_logo.png"
        />
      </div>
      <SkillEvidences />
    </div>
  );
}
