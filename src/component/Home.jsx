import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import useData from "./useData";
import { useState } from "react";

function Home() {
  const [dropDown, setDropDown] = useState(true);
  const { filteredCountry, inputValue, setInputValue, setSelectedRegion } =
    useData();

  //search country
  const handleInputValue = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  //filter region
  const handleChange = (e) => {
    setSelectedRegion(e.target.textContent);
    console.log(e.target.textContent);
  };
  const handleClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="mt-2 transition-all duration-300 p-6 md:p-12 bg-lightbg dark:bg-darkbg950 max-w-[1400px] my-0 min-h-screen mx-auto">
      <div className="md:flex justify-between ">
        <div className="shadow bg-lightbg dark:bg-darkbg900 relative grid items-center px-6 h-fit">
          <Search className="size-4 text-[hsl(0,0%,50%)] dark:text-darktext absolute left-2" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-3 outline-none bg-lightbg dark:bg-darkbg900 text-[hsl(0,0%,50%)] dark:text-darktext text-sm"
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
        <div className="mt-12 md:mt-0 w-[150px] relative">
          <div
            onClick={handleClick}
            className="flex gap-2 items-center shadow p-3 cursor-pointer bg-lightbg dark:bg-darkbg900"
          >
            <p className="text-sm text-lighttext dark:text-darktext w-full">
              Filter by Region
            </p>
            <div>
              {!dropDown ? (
                <ChevronDown className="size-4 text-lighttext dark:text-darktext " />
              ) : (
                <ChevronUp className="size-4 text-lighttext dark:text-darktext " />
              )}
            </div>
          </div>
          <div className="mt-2">
            <ul
              onClick={handleChange}
              className={`${
                !dropDown
                  ? "rounded h-fit w-full absolute  shadow  text-sm text-lighttext dark:text-darktext bg-lightbg dark:bg-darkbg900  z-50"
                  : "h-0 overflow-hidden absolute"
              }`}
            >
              <li className="cursor-pointer block p-2 hover:bg-gray-200 dark:hover:bg-slate-600 ">
                Africa
              </li>
              <li className="cursor-pointer block p-2 hover:bg-gray-200 dark:hover:bg-slate-600 ">
                Americas
              </li>
              <li className="cursor-pointer block p-2 hover:bg-gray-200 dark:hover:bg-slate-600 ">
                Asia
              </li>
              <li className="cursor-pointer block p-2 hover:bg-gray-200 dark:hover:bg-slate-600 ">
                Europe
              </li>
              <li className="cursor-pointer block p-2 hover:bg-gray-200 dark:hover:bg-slate-600 ">
                Oceania
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*cards  */}
      <div className="transition-all duration-300 bg-lightbg dark:bg-darkbg950 grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-auto mt-6">
        {filteredCountry &&
          filteredCountry.map((data) => (
            <Link
              to={`/${data.name.common}`}
              key={data.name.common}
              className="shadow bg-lightbg dark:bg-darkbg900 rounded mt-12 md:mt-0 hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            >
              <div className="h-[180px]">
                <img
                  src={data.flags.png}
                  alt=""
                  className="w-full h-full object-cover block rounded-t"
                />
              </div>
              <div className="p-6 grid gap-2  text-sm">
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
  );
}
export default Home;
