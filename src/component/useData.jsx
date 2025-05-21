import { useEffect, useState } from "react";
function useData() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  // console.log(searchCountry);
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
        setError(null);
        // setLoading(false);
        // console.log(gotData);
      } catch (err) {
        setError(err.message);
        setCountries(null);
      } finally {
        // console.log("done fecthing");
        setLoading(false);
      }
      setInputValue("");
    };
    getData();
  }, []);
  useEffect(() => {
    let filter = countries;
    // search country
    filter =
      filter &&
      filter.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue)
      );

    //filter region
    if (selectedRegion) {
      filter =
        filter && filter.filter((country) => country.region == selectedRegion);
    }

    console.log(filter);
    setFilteredCountry(filter);
  }, [countries, inputValue, selectedRegion]);
  return {
    filteredCountry,
    inputValue,
    setInputValue,
    selectedRegion,
    setSelectedRegion,
    countries,
    loading,
    error,
  };
}
export default useData;
