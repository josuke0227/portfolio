import Container from "./Container";
import style from "../styles/ContactMe.module.css";

export default function ContactMe() {
  return (
    <Container id="contactMe" lastPage>
      <h2>Contact Me</h2>
      <div className={style.container}>
        <h3 className="mb">You can contact me on...</h3>
        <div className={style.card}>
          <a
            href="mailto:y.motosugi0227@gmail.com"
            encType="text/plain"
            type="submit"
            className={style.link}
          >
            <img src="/mail_outline-24px.svg/" className={style.imgSize} />
            <span className={style.linkText}>email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/motosugi-yosuke-694439203/"
            className={style.link}
          >
            <img src="/linkedin-logo.png/" className={style.imgSize} />
            <span className={style.linkText}>linkedin</span>
          </a>
          <a href="https://twitter.com/massivetsubute" className={style.link}>
            <img src="/twitter.svg/" className={style.imgSize} />
            <span className={style.linkText}>twitter</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
