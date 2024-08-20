import { useState, Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "../../components/navigation/nav";

const Layout = (props) => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    const cl = click;
    setClick(!cl);
  };

  const closeBar = () => {
    setClick(false);
  };

  let content;

  if (click) {
    content = <Nav />;
  }

  return (
    <Fragment>
      <Header click={changeClick} check={click} />
      {content}
      <main onClick={closeBar}>{props.children}</main>
      <Footer close={closeBar} />
    </Fragment>
  );
};

export default Layout;
