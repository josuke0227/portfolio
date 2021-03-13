import style from "../styles/MyWorks.module.css";

export default function Card({ work, handleImageClick }) {
  return (
    <img
      className={style.img}
      src={work.imgSrc}
      id={work.title}
      onClick={handleImageClick}
    />
  );
}
