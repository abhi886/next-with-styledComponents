import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
