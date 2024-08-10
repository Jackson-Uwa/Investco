import { Fragment } from "react";
import SectionA from "../../components/comps/section_a";
import SectionB from "../../components/comps/section_b";
import SectionC from "../../components/comps/section_c";

import Quote from "../../components/comps/quote";
import Connect from "../../components/comps/connect";
import FAQS from "../../components/comps/faqs";

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
