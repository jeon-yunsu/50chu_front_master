import React, { useEffect } from "react";
import Header from "../nav/Header";
import { useParams } from "react-router-dom";
import Genresitem from "./Genresitem";
import Footer from "../footer/Footer";
import Auth from "../hoc/auth";
import ScrollToTopButton from "../scrolltop/ScrolltoptoButton";
import ScrollToQuestion from "../scrolltop/ScrolltoQuestion";
const Genreslist = () => {
  const { genres } = useParams();

  return (
    <div>
      <Header />
      <div className="mo_dis_block">
        <h5 className="cateTitle marT_20">{genres}</h5>
      </div>
      <Genresitem gen={genres} />
      <div className="scroll-to-div">
        <ScrollToQuestion />
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
};

export default Auth(Genreslist, true);
