import { useEffect, useState } from "react";
function useData() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

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
    };
    getData();
  }, []);
  return { countries, setCountries, selectedRegion, setSelectedRegion };
}
export default useData;
