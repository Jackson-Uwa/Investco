import styles from "../style/addFeed.module.css";
import { useState } from "react";

import FeedBackRating from "../feedRate/feedBackRating";

const AddFeedBack = (props) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);

  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const changeHandler = (event) => {
    if (review === "") {
      setIsDisabled(true);
      setMessage("Review must not be empty!");
    } else if (review !== "" && review.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("Review must be at least 10 characters!");
    } else {
      setMessage(null);
      setIsDisabled(false);
    }
    setReview(event.target.value);
  };

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
            autoComplete="off"
            placeholder="Write a review"
            value={review}
            onChange={changeHandler}
          />
          <button disabled={isDisabled} type="submit">
            Send
          </button>
        </div>
        <p className={styles.message}>{message}</p>
      </form>
    </div>
  );
};

export default AddFeedBack;
