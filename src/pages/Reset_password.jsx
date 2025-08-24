import React from "react";
import Reset from "../componant/resetpasword/Reset";
import Footer from "../componant/footer/Footer";
import Menu from "../componant/menu/Menu";
import Main_header from "../componant/main_header/Main_header";
import Top_header from "../componant/top_header/Top_header";

const Reset_password = () => {
  return (
    <div>
      <Top_header />
      <Main_header />
      <Menu />
      <Reset />
      <Footer />
    </div>
  );
};

export default Reset_password;
