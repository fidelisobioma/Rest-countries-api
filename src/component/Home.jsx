import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import useData from "./useData";

function Home() {
  const { countries, selectedRegion, setSelectedRegion } = useData();
  console.log(selectedRegion);
  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };
  const filteredRegion = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  return (
    <div className="p-12 bg-gray-50  min-h-screen max-w-[1400px] my-0 mx-auto">
      <div className="md:flex justify-between">
        <div className="shadow bg-white relative grid items-center px-6 h-fit">
          <Search className="size-4 text-gray-500 absolute left-2 cursor-pointer" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-3 outline-none text-gray-500 text-sm"
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
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </label>
        </div>
      </div>
      {/*cards  */}
      <div className="mt-6 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center m-auto ">
        {filteredRegion.map((data) => (
          <Link
            to={`/${data.name.common}`}
            key={data.name.common}
            className=" grid justify-center shadow bg-white rounded mt-12 md:mt-0 hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
          >
            <div>
              <img src={data.flags.png} alt="" />
            </div>
            <div className="p-6 grid gap-2 text-sm">
              <p className="font-bold text-sm">{data.name.common}</p>
              <p>
                Population:
                <span className="text-gray-500"> {data.population}</span>
              </p>
              <p>
                Region: <span className="text-gray-500"> {data.region}</span>
              </p>
              <p>
                Capital: <span className="text-gray-500"> {data.capital}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
