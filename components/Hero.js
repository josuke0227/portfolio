import style from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={style.window}>
      <h2 className={style.mainMessage}>Hello, I'm Yosuke Motosugi</h2>
      <h1 className={style.messageSecondary}>
        Self-taught programmer with huge potential.
      </h1>
      <div className={style.buttonWrapper}>
        <a href="#works" className={style.linkButton}>
          <span className={style.button}>
            <span>See My Works</span>
            <span className={`material-icons ${style.icon}`}>
              change_history
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
