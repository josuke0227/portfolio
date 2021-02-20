import style from "../styles/WorkDetail.module.css";
import CustomBulletPoint from "./CustomBulletPoint";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function WorkDetail({ handleImageClick, id }) {
  const { name, features, tooling, demoUrl, sourceUrl, remark } =
    id !== "" && require(`../constants/${id}`);

  return (
    <div className={style.window}>
      <div className={style.iconWrapper}>
        <span
          className="material-icons"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        >
          close
        </span>
      </div>
      <div className={style.container}>
        <h2>{name}</h2>
        <div className="mt-1 px-2">
          <CustomBulletPoint>
            <h3>Features</h3>
          </CustomBulletPoint>
          <div className="tab with-line-height">
            <ReactMarkdown plugins={[gfm]} children={features} />
          </div>
        </div>
        <div className="mt-1 px-2">
          <CustomBulletPoint>
            <h3>Tooling</h3>
          </CustomBulletPoint>
          {tooling &&
            tooling.map((t, index) => {
              return (
                <>
                  <span key={index} className={index === 0 ? "tab" : ""}>
                    {t}
                  </span>
                  {index < tooling.length - 1 ? <span> / </span> : ""}
                </>
              );
            })}
        </div>
        <div className="mt-1 px-2">
          <CustomBulletPoint>
            <h3>Demo</h3>
          </CustomBulletPoint>
          <a className="tab common-anchor" href={demoUrl} target="_blank">
            {demoUrl}
          </a>
          <div className="tab mt-1">
            {remark && <ReactMarkdown plugins={[gfm]} children={remark} />}
          </div>
        </div>
        <div className="mt-1 px-2">
          <CustomBulletPoint>
            <h3>Source Code</h3>
          </CustomBulletPoint>
          <a className="tab common-anchor" href={sourceUrl} target="_blank">
            {sourceUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
