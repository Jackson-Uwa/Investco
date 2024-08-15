import styles from "../style/addFeed.module.css";
import { useState } from "react";

import FeedBackRating from "../feedRate/feedBackRating";

const AddFeedBack = (props) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);

  const changeHandler = (event) => setReview(event.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const newFeedBack = {
      rating,
      review,
    };
    props.newFeed(newFeedBack);
    setReview("");
  };

  return (
    <div className={styles.add_feed}>
      <h1>How would you rate our services?</h1>
      <FeedBackRating select={(rating) => setRating(rating)} />
      <form onSubmit={submitHandler}>
        <div className={styles.form_group}>
          <input
            type="text"
            name="review"
            placeholder="Write a review"
            value={review}
            onChange={changeHandler}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedBack;
