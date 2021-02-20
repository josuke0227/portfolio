import React from "react";
import style from "../styles/Modal.module.css";
import { CSSTransition } from "react-transition-group";

export default function Modal({ children, showDetail }) {
  return (
    <CSSTransition
      in={showDetail}
      timeout={500}
      unmountOnExit
      classNames="my-node"
    >
      <div className={style.modal}>{children}</div>
    </CSSTransition>
  );
}
