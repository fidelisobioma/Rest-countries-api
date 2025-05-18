import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import useData from "./useData";

function Home() {
  const {
    filteredCountry,
    inputValue,
    setInputValue,
    setSelectedRegion,
    setSearchCountry,
  } = useData();

  //search country
  const handleInputValue = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    setSearchCountry(inputValue);
    setInputValue("");
  };

  //filter region
  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className="p-12 bg-lightbg dark:bg-darkbg950 max-w-[1400px] my-0 min-h-screen mx-auto">
      <div className="md:flex justify-between">
        <div className="shadow bg-lightbg dark:bg-darkbg900 relative grid items-center px-6 h-fit">
          <Search
            className="size-4 text-lighttext dark:text-darktext absolute left-2 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-3 outline-none bg-lightbg dark:bg-darkbg900 text-[hsl(0,0%,50%)] dark:text-darktext text-sm"
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
        <div className="mt-12 md:mt-0">
          <label className="text-sm">
            Filter by Region:
            <select
              name="selectedRegion"
              onChange={handleChange}
              className="px-2"
            >
              <option value="">All</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        </div>
      </div>
      {/*cards  */}
      <div className="bg-lightbg dark:bg-darkbg950 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-auto mt-6">
        {filteredCountry.map((data) => (
          <Link
            to={`/${data.name.common}`}
            key={data.name.common}
            className=" grid justify-center shadow bg-lightbg dark:bg-darkbg900 rounded mt-12 md:mt-0 hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
          >
            <div>
              <img src={data.flags.png} alt="" />
            </div>
            <div className="p-6 grid gap-2 text-sm">
              <p className="font-bold text-sm text-lighttext dark:text-darktext">
                {data.name.common}
              </p>
              <p className="text-lighttext dark:text-darktext">
                Population:
                <span className="text-gray-500 dark:text-gray-400">
                  {data.population}
                </span>
              </p>
              <p className="text-lighttext dark:text-darktext">
                Region:
                <span className="text-gray-500 dark:text-gray-400 ">
                  {data.region}
                </span>
              </p>
              <p className="text-lighttext dark:text-darktext">
                Capital:
                <span className="text-gray-500 dark:text-gray-400">
                  {data.capital}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // <div></div>
  );
}
export default Home;
