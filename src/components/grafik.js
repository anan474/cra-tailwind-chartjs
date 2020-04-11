import React, { useState, useEffect, useContext } from "react";

import GrafikBar from "./grafik/bar";
import GrafikBar2 from "./grafik/bar2";
import GrafikDonat from "./grafik/donat";
import GrafikLine from "./grafik/line";

const Grafik = () => {
  return (
    <>
      <div className="w-full md:w-1/2 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div className="p-5">
            <GrafikBar />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div className="p-5">
            <GrafikLine />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div className="p-5">
            <GrafikBar2 />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div className="p-5">
            <GrafikDonat />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Template</h5>
          </div>
          <div className="p-5"></div>
        </div>
      </div>
    </>
  );
};

export default Grafik;
