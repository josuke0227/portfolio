import style from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.barSizing}>
      <div className={style.col1}>
        <a href=".">
          <img src="/brand.png" />
        </a>
      </div>
      <div className={style.col2}>
        <div className={style.contentsWrapper}>
          <a href="#aboutMe" className={style.link}>
            About
          </a>
        </div>
        <div className={style.contentsWrapper}>
          <a href="#works" className={style.link}>
            Works
          </a>
        </div>
        <div className={style.contentsWrapper}>
          <a href="#contactMe" className={style.link}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
