import style from "../styles/AboutMe.module.css";

export default function SkillEvidences() {
  return (
    <div className={style.skillEvidencies}>
      <h3>I've learned these skills through...</h3>
      <br></br>
      <h4 className="tab-small">Code with mosh's video lecture</h4>
      <ul>
        <li className={style.listItem}>
          <span>JavaScript - basics & OOP</span>
          <span className="material-icons">double_arrow</span>
          <a target="_blank" href="/mosh-javascript-course-merged.pdf">
            see certification
          </a>
        </li>
        <li className={style.listItem}>
          React
          <span className="material-icons">double_arrow</span>{" "}
          <a
            target="_blank"
            href="/certificate-of-completion-for-mastering-react.pdf"
          >
            see certification
          </a>
        </li>
        <li className={style.listItem}>
          Node.js, MongoDB
          <span className="material-icons">double_arrow</span>
          <a
            target="_blank"
            href="/certificate-of-completion-for-the-complete-node-js-course.pdf"
          >
            see certification
          </a>
        </li>
      </ul>
      <br></br>
      <h4 className="tab-small">Traversy media's video lecture</h4>
      <ul>
        <li className={style.listItem}>
          HTML, CSS, Sass
          <span className="material-icons">double_arrow</span>{" "}
          <a target="_blank" href="/certification-of-modern-html-and-css.pdf">
            see certification
          </a>
        </li>
        <li className={style.listItem}>
          JavaScript - DOM manipulation
          <span className="material-icons">double_arrow</span>
          <a
            target="_blank"
            href="/certification-of-modern-javascript-from-the-biginning.pdf"
          >
            see certification
          </a>
        </li>
      </ul>
    </div>
  );
}
