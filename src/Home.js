import React, { useState, useEffect, useContext } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Table from "./components/table";
import Metrik from "./components/metrik";
import Divider from "./components/divider";
import Grafik from "./components/grafik";

const Home = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Header />
      <div className="container w-full mx-auto pt-20">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <Metrik />
          <Divider />
          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <Grafik />
            <Table />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
