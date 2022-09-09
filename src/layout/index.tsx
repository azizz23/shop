import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: JSX.Element;
  scroll: number;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header scroll={props.scroll} />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
