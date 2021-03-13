import { useState } from "react";
import { getWorks } from "../constants/myWorks";
import style from "../styles/MyWorks.module.css";
import Modal from "./Modal";
import Card from "./Card";
import Container from "./Container";
import WorkDetail from "./WorkDetail";

export default function Works() {
  const [showDetail, setShowDetail] = useState(false);
  const [id, setId] = useState("");

  function handleImageClick(e) {
    setShowDetail(!showDetail);
    setId(e.target.id);
  }

  return (
    <Container id="works">
      <Modal showDetail={showDetail}>
        <WorkDetail handleImageClick={handleImageClick} id={id} />
      </Modal>
      <h2>My Works</h2>
      <div className={style.showcase}>
        <div className={style.row}>
          {getWorks().map((w, index) => {
            return (
              <Card key={index} handleImageClick={handleImageClick} work={w} />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
