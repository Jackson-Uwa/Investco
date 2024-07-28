import { Fragment } from "react";
import SectionA from "../components/section_a";
import SectionB from "../components/section_b";
import SectionC from "../components/section_c";

import Quote from "../components/quote";
import Connect from "../components/connect";
import FAQS from "../components/faqs";

const Home = (props) => {
  return (
    <Fragment>
      <SectionA />
      <SectionB />
      <SectionC />
      <Quote />
      <Connect />
      <FAQS />
    </Fragment>
  );
};

export default Home;
