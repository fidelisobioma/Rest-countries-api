import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useData from "./useData";
function Border() {
  const { bordername } = useParams();
  const { countries } = useData();
  let countriesBorders =
    countries &&
    countries.filter(
      (country) => country.cca3 && country.cca3.includes(bordername)
    );
  return (
    <div className=" pt-32 transition-all duration-300 p-6 md:px-12 bg-lightbg dark:bg-darkbg950  min-h-screen max-w-[1400px] my-0 mx-auto  gap-8">
      <div onClick={() => history.back()} className="cursor-pointer">
        <div className=" mt-6 px-3 py-px shadow bg-lightbg dark:bg-darkbg900 flex items-center w-fit gap-1 text-sm text-gray-500 rounded">
          <MoveLeft className="w-4 stroke-1" />
          <div>
            <p className="text-lighttext dark:text-darktext"> Back</p>
          </div>
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
                <h2 className="mt-12 md:mt-0 text-sm font-bold mb-6 text-lighttext dark:text-darktext">
                  {detail.name.common}
                </h2>
                <div className=" md:flex gap-20">
                  <div className="grid gap-2 text-sm">
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Native name:
                      {Object.values(detail.name.nativeName).map((native) => (
                        <span
                          key={native.common}
                          className="text-gray-500 dark:text-gray-400"
                        >
                          {native.common}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Population:
                      <span className="text-gray-500 dark:text-gray-400">
                        {detail.population}
                      </span>
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Region:
                      <span className="text-gray-500 dark:text-gray-400">
                        {detail.region}
                      </span>
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Sub Region:
                      <span className="text-gray-500 dark:text-gray-400">
                        {detail.subregion}
                      </span>
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Capital:
                      <p className="text-gray-500 dark:text-gray-400">
                        {detail.capital}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm mt-12 md:mt-0 leading-looses">
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Top Level Domain:
                      <span className="text-gray-500 dark:text-gray-400">
                        {`.${detail.altSpellings[0].toLowerCase()}`}
                      </span>
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Currency:
                      <span className="text-gray-500 dark:text-gray-400">
                        {Object.values(detail.currencies)[0].name}
                      </span>
                    </div>
                    <div className="flex gap-2 text-lighttext dark:text-darktext">
                      Languages:
                      <span className="text-gray-500 dark:text-gray-400">
                        {Object.values(detail.languages).join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-20 md:mt-12 md:flex gap-2 items-center flex-wrap mb-4">
                  <h2 className="text-sm md-4 md:mb-0 font-bold text-lighttext dark:text-darktext">
                    Border Countries:
                  </h2>
                  <div className="flex gap-2 items-center flex-wrap">
                    {detail.borders &&
                      detail.borders.map((border) => (
                        <Link
                          to={`/border/${border}`}
                          key={border}
                          className="rounded bg-lightbg dark:bg-darkbg900 text-lighttext dark:text-darktext shadow py-1 px-8 text-sm"
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
