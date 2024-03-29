import React from "react";
import {IReviews} from "shared/types";
import {truncate} from "shared/utils";

interface IProps {
  reviews: IReviews[];
}

const Reviews = ({reviews}: IProps) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div id="no-review" className="text-center font-bold text-xl">
        No Review Data
      </div>
    );
  }
  function renderReviews() {
    return reviews.map((review, index) => {
      return (
        <div
          key={index}
          className="mt-10 md:mt-0 w-full md:w-1/3 bg-white rounded text-center p-3 m-5">
          <p id="review-author" className="text-center font-bold mt-4">
            {review.author}
          </p>
          <p id="review-content" className="text-sm">
            {truncate(review.content, 150, "...")}
          </p>
          <a
            target="_blank"
            href={review.url}
            className="mt-2 cursor-pointer hover:underline text-wrap font-semibold hover:font-bold text-tmd-green">
            Read More
          </a>
        </div>
      );
    });
  }
  return (
    <div className="flex flex-wrap justify-center mt-5">{renderReviews()}</div>
  );
};

export default Reviews;
