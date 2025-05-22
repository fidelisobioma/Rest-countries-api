import { useEffect, useState } from "react";
function useData() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  const url = "https://restcountries.com/v3.1/independent?status=true";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
          if (response === 404) {
            throw new Error("This site does not exist.");
          } else {
            throw new Error(`HTTP error!:${response.status}`);
          }
        }
        const gotData = await response.json();
        setCountries(gotData);
        setError(null);
      } catch (error) {
        if (error.message.includes("Failed to fetch")) {
          setError(
            "Failed to fetch. Check your internet connection and try again"
          );
          setCountries(null);
        } else if (error.message.includes("does not exist")) {
          setError("This site does not exist");
          setCountries(null);
        } else if (
          error instanceof TypeError &&
          error.message.includes("invalid URL")
        ) {
          setError("Invalid URL. Please check the address.");
          setCountries(null);
        } else {
          setCountries(error.message);
        }
      } finally {
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
        country.name.common.toLowerCase().includes(inputValue.trim())
      );

    // filter =
    //   filter && filter.filter((country) => country.region == selectedRegion);

    if (selectedRegion) {
      filter =
        filter && filter.filter((country) => country.region == selectedRegion);
    }
    /*selectedRegion
      ? (filter =
          filter &&
          filter.filter((country) => country.region == selectedRegion))
      : "";*/
    setFilteredCountry(filter);
  }, [countries, inputValue, selectedRegion]);
  //dark mode
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };
  return {
    filteredCountry,
    inputValue,
    setInputValue,
    selectedRegion,
    setSelectedRegion,
    countries,
    loading,
    error,
    darkMode,
    toggleDarkMode,
  };
}
export default useData;
