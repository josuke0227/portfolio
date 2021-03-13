import style from "../styles/CustomBulletPoint.module.css";

export default function CustomBulletPoint({ children, size = "24px" }) {
  return (
    <div className={`px-2 ${style.wrapper}`}>
      <div className={style.iconWrapper}>
        <span
          className={`material-icons ${style.blueIcon}`}
          style={{ fontSize: size }}
        >
          signal_cellular_0_bar
        </span>
        <span
          className={`material-icons ${style.blackIcon}`}
          style={{
            fontSize: size,
          }}
        >
          signal_cellular_0_bar
        </span>
      </div>
      {children}
    </div>
  );
}
