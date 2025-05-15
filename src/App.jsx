import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="bg-gray-50 ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
