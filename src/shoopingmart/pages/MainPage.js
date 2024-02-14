import React, { useState } from 'react';
import { Gents,Ladies } from "./collect";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MenCollection from "../components/MenCollection";
import WomenCollection from "../components/WomenCollection";
import Footer from "../components/Footer";


const MainPage = () => {
  const [menFashion, setmenFashion] = useState(Gents);
  const [womenFashion, setWomenFashion] = useState(Ladies);
  console.log(Gents);
  console.log(Ladies);
  return (
      <>
          <Header />
          <Banner />
          <MenCollection  menshopping={ menFashion}/>
          <WomenCollection womenshopping={womenFashion} />
          <Footer/>
   </>
  );
}

export default MainPage;
