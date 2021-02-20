import style from "../styles/Container.module.css";

export default function Container({ children, lastPage, id, withLogo }) {
  return (
    <div id={id} className={lastPage ? style.lastPage : style.common}>
      {children}
    </div>
  );
}
