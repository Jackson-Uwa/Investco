import styles from "../style/feed_rating.module.css";
import { useState } from "react";

const FeedBackRating = (props) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(+event.currentTarget.value);
    props.select(+event.currentTarget.value);
  };

  return (
    <ul className={styles.rating}>
      <li>
        <input
          type="radio"
          id="num1"
          value="1"
          name="rating"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          value="2"
          name="rating"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          value="3"
          name="rating"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          value="4"
          name="rating"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num3">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          value="5"
          name="rating"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          value="6"
          name="rating"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          value="7"
          name="rating"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          value="8"
          name="rating"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          value="9"
          name="rating"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor="num3">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          value="10"
          name="rating"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default FeedBackRating;
