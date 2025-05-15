import { useEffect, useState } from "react";
function useData() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [inputValue, setInputValue] = useState("test");
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  console.log(searchCountry);
  const url = "https://restcountries.com/v3.1/independent?status=true";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
          throw new Error(`https:${response.status} something went wrong`);
        }
        const gotData = await response.json();
        setCountries(gotData);
        // console.log(gotData);
      } catch (err) {
        console.log(err.message);
      } finally {
        // console.log("done fecthing");
      }
      setInputValue("");
    };
    getData();
  }, []);

  useEffect(() => {
    const filterCountries = () => {
      let filtered = countries;
      if (selectedRegion) {
        filtered = filtered.filter(
          (country) => country.region.toLowerCase() === selectedRegion
        );
      }
      if (searchCountry) {
        filtered = filtered.filter((country) =>
          country.name.common.toLowerCase().includes(searchCountry)
        );
      }
      setFilteredCountry(filtered);
    };
    filterCountries();
  }, [selectedRegion, searchCountry, countries]);
  return {
    filteredCountry,
    inputValue,
    setInputValue,
    // selectedRegion,
    setSelectedRegion,
    // searchCountry,
    setSearchCountry,
    countries,
  };
}
export default useData;
