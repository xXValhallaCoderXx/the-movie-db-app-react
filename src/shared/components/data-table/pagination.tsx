import React from "react";

interface IProps {
  pages: any;
  goTo: any;
}

const Pagination = ({pages, goTo}: IProps) => {
  return (
    <div>
      {pages.map((p: any, i: any) => (
        <button key={i} onClick={goTo} value={i}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
