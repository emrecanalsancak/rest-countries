import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Details = () => {
  let navigate = useNavigate();

  let { state } = useLocation();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white h-screen">
      <div className="container mx-auto mb-16">
        <button
          className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
          onClick={handleNavigate}
        >
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="container flex mx-auto p-8 pl-0 pr-0">
        <img src={state.flags.svg} className="w-1/2 pr-8" alt="Country flag" />
        <div className="p-8 pl-0">
          <h2 className="font-bold text-2xl mb-8">{state.name.official}</h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4 ">
            <p className="font-bold">
              Native Name: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.name.official}
              </span>
            </p>
            <p className="font-bold">
              Population: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.population}
              </span>
            </p>
            <p className="font-bold">
              Region: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.region}
              </span>
            </p>
            <p className="font-bold">
              Sub Region: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.subregion}
              </span>
            </p>
            <p className="font-bold">
              Capital: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.capital}
              </span>
            </p>
            <p className="font-bold">
              Top Level Domain: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.tld[0]}
              </span>
            </p>
            <p className="font-bold">
              Currencies: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {}
              </span>
            </p>
            <p className="font-bold">
              Languages: &nbsp;
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {Object.values(state.languages) + ", "}
              </span>
            </p>
            <p className="font-bold">
              <span className="dark:text-gray-400 text-gray-700 text-sm"></span>
            </p>
          </div>
          <Link></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
