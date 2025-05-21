import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import useData from "./component/useData";

function App() {
  const { loading, error, filteredCountry } = useData();
  return (
    <div className="bg-gray-50 ">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
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
