import style from "../styles/MyWorks.module.css";

export default function Card({ work, handleImageClick }) {
  return (
    <div
      className={style.card}
      onClick={work.title !== "commingSoon" ? handleImageClick : null}
    >
      <img className={style.img} src={work.imgSrc} id={work.title} />
    </div>
  );
}
