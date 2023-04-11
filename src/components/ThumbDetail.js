import React from "react";

const ThumbDetail = ({ title, image_url, population, region, capital }) => {
  return (
    <div className="h-[290px] transition-transform duration-500 hover:scale-110 container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={image_url}
        alt="country flag"
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-sm">
          {" "}
          <strong>Population: </strong>
          <span className="text-gray-700 dark:text-gray-200">{population}</span>
        </p>
        <p className="text-sm">
          {" "}
          <strong>Region: </strong>
          <span className="text-gray-700 dark:text-gray-200">{region}</span>
        </p>
        <p className="text-sm">
          {" "}
          <strong>Capital: </strong>
          <span className="text-gray-700 dark:text-gray-200">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default ThumbDetail;
