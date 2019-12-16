import React from "react";
import {IReviews} from "shared/types";

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
        <div key={index} className="w-1/3">
          <p className="">{review.author}</p>
          <p className="text-small">{review.content}</p>
        </div>
      );
    });
  }
  return (
    <div className="flex flex-wrap justify-center space-around">
      {renderReviews()}
    </div>
  );
};

export default Reviews;
