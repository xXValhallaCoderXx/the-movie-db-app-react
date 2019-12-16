import React from "react";
import {IReviews} from "shared/types";
import {truncate} from "shared/utils";

interface IProps {
  reviews: IReviews[];
}

const Reviews = ({reviews}: IProps) => {
  if (!reviews || reviews.length === 0) {
    return <div className="text-center font-bold text-xl">No Review Data</div>;
  }
  function renderReviews() {
    return reviews.map((review, index) => {
      return (
        <div key={index} className="mt-10 md:mt-0 w-full md:w-1/3 bg-white rounded text-center p-3 m-5">
          <p className="text-center font-bold mt-4">{review.author}</p>
          <p className="text-sm">{truncate(review.content, 350, "...")}</p>
        </div>
      );
    });
  }
  return (
    <div className="flex flex-wrap justify-center mt-5">{renderReviews()}</div>
  );
};

export default Reviews;
