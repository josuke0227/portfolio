import Container from "./Container";
import style from "../styles/ContactMe.module.css";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const currentWidth = document.documentElement.clientWidth;
    setScreenWidth(currentWidth);
    console.log(currentWidth);
  });

  return (
    <Container id="contactMe" lastPage>
      <h1>Contact Me</h1>
      <div className={style.contentWrapper}>
        <h3 className="tab">You can contact me on...</h3>
        <div className={style.contactMethod}>
          <div className={style.rightPart}>
            <a
              href="mailto:y.motosugi0227@gmail.com"
              encType="text/plain"
              type="submit"
              className="material-icons mail-button"
              style={{
                fontSize: screenWidth < 400 ? "5rem" : "20rem",
                border: "none",
                background: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              mail_outline
            </a>
          </div>
          <div className={style.midPart}>
            <h1>OR</h1>
          </div>
          <div className={style.rightPart}>
            <div>
              <a href="https://www.linkedin.com/in/motosugi-yosuke-694439203/">
                <img
                  src="/linkedin-logo.png/"
                  width={screenWidth < 400 ? "80px" : ""}
                />
              </a>
              <a
                href="https://twitter.com/massivetsubute"
                style={{ marginLeft: "1rem" }}
              >
                <img
                  src="/twitter.png/"
                  width={screenWidth < 400 ? "80px" : ""}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
