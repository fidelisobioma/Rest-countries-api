import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useData from "./useData";
function Border() {
  const { bordername } = useParams();
  const { countries } = useData();
  //   console.log(bordername);
  //   console.log(countries);
  let countriesBorders = countries.filter(
    (country) => country.cca3 && country.cca3.includes(bordername)
  );
  console.log(countriesBorders);
  // countriesBorders;
  return (
    <div className="px-12 bg-gray-50  min-h-screen max-w-[1400px] my-0 mx-auto  gap-8">
      <div onClick={() => history.back()} className="cursor-pointer">
        <div className="mt-12 px-3 py-px shadow bg-white flex items-center w-fit gap-1 text-sm text-gray-500 rounded hover:scale-105 transition-transform duration-300">
          <MoveLeft className="w-4 stroke-1" />
          <p> Back</p>
        </div>
      </div>
      <div>
        {countries &&
          countriesBorders.map((detail) => (
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
                    <div className="flex gap-2">
                      Native name:
                      <p className="text-gray-500">{}</p>
                    </div>
                    <div className="flex gap-2">
                      Population:
                      <span className="text-gray-500">{detail.population}</span>
                    </div>
                    <div className="flex gap-2">
                      Region:
                      <p className="text-gray-500">{detail.region}</p>
                    </div>
                    <div className="flex gap-2">
                      Sub Region:
                      <p className="text-gray-500">{detail.subregion}</p>
                    </div>
                    <div className="flex gap-2">
                      Capital:
                      <p className="text-gray-500">{detail.capital}</p>
                    </div>
                  </div>
                  <div className="text-sm mt-12 md:mt-0 leading-loose">
                    <div className="flex gap-2">
                      Top Level Domain: <p className="text-gray-500"></p>
                    </div>
                    <div className="flex gap-2">
                      Currency:
                      <p className="text-gray-500">
                        {Object.values(detail.currencies)[0].name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      Languages:
                      {Object.values(detail.languages).map((lan) => (
                        <p key={lan} className="text-gray-500">
                          {lan + " ,"}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-20 md:mt-12 md:flex gap-2 items-center flex-wrap mb-4">
                  <h2 className="text-sm font-bold">Border Countries:</h2>
                  <div className="flex gap-2 items-center flex-wrap">
                    {detail.borders &&
                      detail.borders.map((border) => (
                        <Link
                          to={`/border/${border}`}
                          key={border}
                          className="bg-white shadow py-1 px-8 text-sm"
                        >
                          {border}
                        </Link>
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
export default Border;
