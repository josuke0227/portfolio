import style from "../styles/Skills.module.css";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", progress: "80%" },
    { name: "CSS", progress: "85%" },
    { name: "JavaScript", progress: "90%" },
    { name: "React", progress: "80%" },
    { name: "Redux", progress: "65%" },
    { name: "Node.js", progress: "60%" },
    { name: "MongoDB", progress: "50%" },
  ];

  return (
    <article className={style.container}>
      <h3>Skills</h3>
      <div className={style.progressWrapper}>
        {skills.map((skill, index) => {
          return (
            <React.Fragment key={index}>
              <span>{skill.name}</span>
              <div className={style.progressBar}>
                <div
                  className={style.fill}
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
}

/* <div>CSS</div>
        <div>JavaScript</div>
        <div>React</div>
        <div>Redux</div>
        <div>Node.js</div>
        <div>MongoDB</div> */
