import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>AM - Abhishekh Maharjan </title>
      </Head>

      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
