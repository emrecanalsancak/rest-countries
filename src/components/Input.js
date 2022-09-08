import React from "react";

const Input = ({ onChangeCountry, onChangeRegion }) => {
  return (
    <div className="flex container mx-auto mb-16 ">
      <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="pl-10 p-2 shadow-md rounded-md w-1/2 sm:w-1/3 dark:bg-gray-700"
        onChange={onChangeCountry}
      />
      <select
        defaultValue={"DEFAULT"}
        className="ml-auto my-2 p-4 shadow-md rounded-md font-medium dark:bg-gray-700"
        onChange={onChangeRegion}
      >
        <option disabled value="DEFAULT">
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Input;
