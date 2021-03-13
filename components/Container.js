import style from "../styles/Container.module.css";

export default function Container({ children, lastPage, id }) {
  return (
    <section id={id} className={lastPage ? style.lastPage : style.common}>
      {children}
    </section>
  );
}
