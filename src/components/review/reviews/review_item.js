import styles from "../style/review_item.module.css";

const ReviewItem = (props) => {
  return (
    <div className={styles.review_card}>
      <div className={styles.times}>
        <span
          onClick={props.edit}
          id={styles.edit}
          class="fa-solid fa-edit"
        ></span>
        <span
          className={styles.times}
          onClick={props.delete}
          class="fa-solid fa-times"
        ></span>
      </div>
      <p className={styles.rating}>{props.rating}</p>
      <p className={styles.review}>{props.review}</p>
    </div>
  );
};

export default ReviewItem;
