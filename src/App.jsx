import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import useData from "./component/useData";
import Loading from "./component/Loading";

function App() {
  const { loading, error, filteredCountry, darkMode, toggleDarkMode } =
    useData();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-lightbg dark:bg-darkbg950 ">
        {loading && <Loading />}
        {error && (
          <div className="flex items-center justify-center h-screen p-12 dark:text-darktext">
            {error}
          </div>
        )}
        {filteredCountry && (
          <div>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
