import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import useData from "./component/useData";
import Loading from "./component/Loading";

function App() {
  const { loading, error, filteredCountry } = useData();
  return (
    <div className="bg-lightbg dark:bg-darkbg950 ">
      {loading && <Loading />}
      {error && (
        <div className="flex items-center justify-center h-screen p-12">
          {error}
        </div>
      )}
      {filteredCountry && (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default App;
