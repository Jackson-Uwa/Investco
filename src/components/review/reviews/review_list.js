// import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import ReviewItem from "./review_item";

const ReviewList = (props) => {
  return (
    <Fragment>
      {props.reviews.map((rev) => (
        <ReviewItem
          delete={() => props.handleDelete(rev.id)}
          edit={() => props.handleEdit(rev)}
          key={rev.id}
          rating={rev.rating}
          review={rev.review}
        />
      ))}
    </Fragment>
  );
};

export default ReviewList;
