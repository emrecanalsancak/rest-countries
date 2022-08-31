import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThumbDetail from "./ThumbDetail";
import Input from "./Input";
import { BallTriangle } from "react-loader-spinner";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");
  const [loader, setLoader] = useState(true);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all/");
    const data = await response.json();
    if (response.ok) setLoader(false);
    setCountries(data);
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === true)
      document.body.classList.add("dark");

    getCountries();
  }, []);

  const countrySearch = (e) => {
    setInputSearch(e.target.value.toLowerCase());
  };

  const regionFilter = (e) => {
    if (e.target.value === "all") setRegionSearch("");
    else setRegionSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Input
        setCountries={setCountries}
        onChangeCountry={countrySearch}
        onChangeRegion={regionFilter}
      />
      <div className="container grid grid-cols-4 gap-16 mx-auto">
        {loader && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}

        {!inputSearch &&
          !regionSearch &&
          countries.map((country, i) => (
            <Link to="rest-countries/details" state={country} key={i}>
              <ThumbDetail
                title={country.name.common}
                image_url={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))}

        {inputSearch &&
          countries
            .filter((el) => el.name.common.toLowerCase().includes(inputSearch))
            .map((country, i) => (
              <Link to="rest-countries/details" state={country} key={i}>
                <ThumbDetail
                  title={country.name.common}
                  image_url={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}

        {regionSearch &&
          countries
            .filter((el) => el.region.toLowerCase().includes(regionSearch))
            .map((country, i) => (
              <Link to="rest-countries/details" state={country} key={i}>
                <ThumbDetail
                  title={country.name.common}
                  image_url={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
