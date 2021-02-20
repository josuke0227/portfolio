import style from "../styles/AboutMe.module.css";
import CustomBulletPoint from "./CustomBulletPoint";

export default function MyFeatures() {
  return (
    <div className={style.window}>
      <div className={style.skillText}>
        <ul>
          <br />
          <li>
            <CustomBulletPoint size="18px">
              <span>Background in logistics and sales for 6 years.</span>
            </CustomBulletPoint>
          </li>
          <br />
          <li>
            <CustomBulletPoint size="18px">
              <span>
                Started programming as a hobby and turned it into a passion for
                creation.
              </span>
            </CustomBulletPoint>
          </li>
          <br />
          <li>
            <CustomBulletPoint size="18px">
              <span>
                I love debugging and thinking about what features to implement
                next.
              </span>
            </CustomBulletPoint>
          </li>
          <br />
          <li>
            <CustomBulletPoint size="18px">
              <span>Wanting to turn this passion into a career</span>
            </CustomBulletPoint>
          </li>
          <br />
          <li>
            <CustomBulletPoint size="18px">
              <span>
                Have been learning since May 2020, can’t wait to be a web dev.
              </span>
            </CustomBulletPoint>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}
