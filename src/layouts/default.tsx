import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

import "./base.css";

const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    <Main>
      { children }
    </Main>
    <Footer />
  </div>
);

export default DefaultLayout;
