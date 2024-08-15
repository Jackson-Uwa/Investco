import { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../components/review/style/review.module.css";

// const { feedBack } = require("../../components/review/reviews/data/feedback");
import FeedBack from "../../components/review/reviews/data/feedback";
import AddFeedBack from "../../components/review/add/addFeedback";
import ReviewList from "../../components/review/reviews/review_list";

const Review = () => {
  const [feedback, setFeedback] = useState(FeedBack);

  const addFeed = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    // console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback]);
  };

  const deleteFeed = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
      setFeedback(feedback.filter((feed) => feed.id !== id));
    }
  };

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <Fragment>
      {feedback.length === 0 ? (
        <div style={{ textAlign: "center", padding: "1em" }}>
          <h1>There is currently no feedback available!</h1>
        </div>
      ) : (
        <div className={styles.review_container}>
          <AddFeedBack newFeed={addFeed} />
          <div className={styles.feed_stats}>
            <span className={styles.reviews}>
              {feedback.length} Reviews <br />
              {feedback.length === 0 ? "No feedback yet" : ""}
            </span>
            <span className={styles.average}>Average Rating: {average}</span>
          </div>
          <ReviewList handleDelete={deleteFeed} reviews={feedback} />
        </div>
      )}
    </Fragment>
  );
};

export default Review;
