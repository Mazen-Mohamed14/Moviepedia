import React from "react";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen h-full bg-gray-900 text-white content-center">
      <h1 className="text-2xl sm:text-8xl font-bold text-orange-500 mb-10">
        Movie<span className="text-slate-300">Pedia</span>
      </h1>
      <Search />
    </div>
  );
};

export default HomePage;
