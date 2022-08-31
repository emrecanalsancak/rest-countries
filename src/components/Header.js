import React, { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-gray-100");
    mode
      ? document.body.classList.remove("bg-gray-800")
      : document.body.classList.add("bg-gray-800");

    setMode(!mode);
  };

  return (
    <div className="shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
      <div className="flex container mx-auto">
        <h1 className="font-bold text-xl">Where in the world?</h1>
        <div className="ml-auto font-medium">
          <button onClick={toggleDarkMode} className="">
            <i className={!mode ? "fas fa-moon" : "far fa-sun"}></i>&nbsp;
            {!mode ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
