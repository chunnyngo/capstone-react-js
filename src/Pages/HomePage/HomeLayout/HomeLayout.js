import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

function HomeLayout({ contentPage }) {
  return (
    <div>
      <Header />
      {contentPage}
      <Footer />
    </div>
  );
}

export default HomeLayout;
