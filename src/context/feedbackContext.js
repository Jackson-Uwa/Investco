import { createContext, useState } from "react";
import FeedBack from "../components/review/reviews/data/feedback";

const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  const [feedback] = useState(FeedBack);
  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {console.log("From the context wrapper ")}
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
