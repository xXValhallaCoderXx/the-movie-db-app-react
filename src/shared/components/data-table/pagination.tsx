import React from "react";

interface IProps {
  pages: any;
  goTo: any;
}

const Pagination = ({pages, goTo}: IProps) => {
  return (
    <div id="pagination">
      {pages.map((p: any, i: any) => (
        <button
          className="bg-gray-400 hover:bg-gray-700 text-black font-bold py-2 px-4 m-1"
          key={i}
          onClick={goTo}
          value={i}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
