import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useData from "./useData";

function Details() {
  const { countryname } = useParams();
  console.log(countryname);
  const { countries } = useData();
  const countriesDetails =
    countries &&
    countries.filter((country) => country.name.common === countryname);
  console.log(countriesDetails);
  return (
    <div className="px-12 bg-gray-50  min-h-screen max-w-[1400px] my-0 mx-auto  gap-8">
      <Link to="/">
        <div className="mt-12 px-3 py-px shadow bg-white flex items-center w-fit gap-1 text-sm text-gray-500 rounded hover:scale-105 transition-transform duration-300">
          <MoveLeft className="w-4 stroke-1" />
          <p> Back</p>
        </div>
      </Link>
      <div>
        {countries &&
          countriesDetails.map((detail) => (
            <div key={detail.name.common} className="mt-12 md:flex gap-20">
              <div>
                <img src={detail.flags.png} alt={detail.flags.alt} />
              </div>
              <div>
                <h2 className="mt-12 md:mt-0 text-sm font-bold mb-6">
                  {detail.name.common}
                </h2>
                <div className=" md:flex gap-20">
                  <div className="grid gap-2 text-sm">
                    <p>
                      Native name: <span className="text-gray-500">{}</span>
                    </p>
                    <p>
                      Population:
                      <span className="text-gray-500">{detail.population}</span>
                    </p>
                    <p>
                      Region:
                      <span className="text-gray-500">{detail.region}</span>
                    </p>
                    <p>
                      Sub Region:
                      <span className="text-gray-500">{detail.subregion}</span>
                    </p>
                    <p>
                      Capital:
                      <span className="text-gray-500">{detail.capital}</span>
                    </p>
                  </div>
                  <div className="text-sm mt-12 md:mt-0">
                    <p>Top Level Domain:</p>
                    <p>
                      Currencies: <span>{}</span>
                    </p>
                    <p>Languages:</p>
                  </div>
                </div>
                <div className="mt-20 md:mt-12 md:flex gap-2 items-center flex-wrap mb-4">
                  <h2 className="text-sm font-bold">Border Countries:</h2>
                  <div className="flex gap-2 items-center flex-wrap">
                    {detail.borders.map((border) => (
                      <div
                        key={border}
                        className="bg-white shadow py-1 px-8 text-sm"
                      >
                        {border}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Details;
