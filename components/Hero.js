import style from "../styles/Hero.module.css";
import Container from "./Container";

export default function Hero() {
  return (
    <div id="hero" className={style.window}>
      <div className={style.mainMessage}>Hello, I'm Yosuke Motosugi</div>
      <div className={style.messageSecondary}>
        Self-taught programmer with huge potential.
      </div>
      <div className={style.buttonWrapper}>
        <a href="#works" className={style.thisAnchor}>
          <span className={style.button}>
            <span>See My Works</span>
            <span
              className="material-icons"
              style={{ transform: "rotate(180deg)" }}
            >
              change_history
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
