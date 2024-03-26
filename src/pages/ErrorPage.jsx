import React from "react";
import Search from "../components/Search";

const ErrorPage = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen h-full bg-gray-900 text-white content-center">
      Movie not found, please try again
      <Search />
    </div>
  );
};

export default ErrorPage;
