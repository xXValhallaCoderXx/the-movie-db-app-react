import React from "react";
import {IReviews} from "shared/types";

interface IProps {
  reviews: IReviews[];
}

const Reviews = ({reviews}: IProps) => {
  if (!reviews || reviews.length === 0) {
    return <div className="text-center font-bold text-xl">No Review Data</div>;
  }
  return <div>Reviews</div>;
};

export default Reviews;
