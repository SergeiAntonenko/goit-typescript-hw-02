import React from "react";
import css from "./LoadMoreBtn.module.css";

interface Props {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
