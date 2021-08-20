import Header from "../HeaderSection/index";
import Footer from "../FooterSection/index";
import React from "react";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
