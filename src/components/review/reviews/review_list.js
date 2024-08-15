import { AnimatePresence, motion } from "framer-motion";
import ReviewItem from "./review_item";

const ReviewList = (props) => {
  return (
    <AnimatePresence>
      {props.reviews.map((rev) => (
        <ReviewItem
          delete={() => props.handleDelete(rev.id)}
          key={rev.id}
          rating={rev.rating}
          review={rev.review}
        />
        // <motion.div
        //   key={rev.id}
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        // >
        //   <ReviewItem
        //     delete={() => props.handleDelete(rev.id)}
        //     key={rev.id}
        //     rating={rev.rating}
        //     review={rev.review}
        //   />
        // </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default ReviewList;
