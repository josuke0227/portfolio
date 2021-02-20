import style from "../styles/MyWorks.module.css";
import _ from "lodash";
import { useState, useEffect } from "react";

export default function Pagenation({ setWorks }) {
  const [pageNum, setPageNum] = useState(1);
  const [worksLength, setWorksLength] = useState(null);
  const [itemsNumOnPage, setItemsNumOnPage] = useState(null);

  useEffect(() => {
    const {
      getWorks,
      getLength,
      itemsPerPage,
    } = require("../constants/myWorks");
    setWorksLength(getLength());
    setWorks(getWorks(pageNum));
    setItemsNumOnPage(itemsPerPage);
  }, [pageNum]);

  function handlePageButtonClick(num) {
    setPageNum(num);
  }

  function handleArrowButtonClick(e) {
    const action = e.target.id;

    if (action === "prev") setPageNum(pageNum - 1);
    if (action === "next") setPageNum(pageNum + 1);
  }

  const pages = _.range(Math.ceil(worksLength / itemsNumOnPage));

  return (
    <div className={style.pagenationContainer}>
      {pages.length > 1 && pageNum > 1 && (
        <span className={style.pagenationButton}>
          <span
            id="prev"
            className="material-icons"
            style={{ transform: "rotate(180deg)" }}
            onClick={handleArrowButtonClick}
          >
            double_arrow
          </span>
        </span>
      )}
      {pages.map((p) => {
        const displayedNum = p + 1;
        return (
          <a
            key={displayedNum}
            className={
              displayedNum === pageNum
                ? style.pagenationButtonActive
                : style.pagenationButton
            }
            onClick={() => handlePageButtonClick(displayedNum)}
          >
            {displayedNum}
          </a>
        );
      })}
      {pages.length > 1 && pageNum < pages.length && (
        <span
          className={style.pagenationButton}
          onClick={handleArrowButtonClick}
        >
          <span className="material-icons" id="next">
            double_arrow
          </span>
        </span>
      )}
    </div>
  );
}
