import { Link } from "react-router-dom";
import { Moon } from "lucide-react";
function Navbar() {
  return (
    <div className="flex justify-between items-center shadow py-6 px-12 bg-white max-w-[1400px] my-0 mx-auto">
      <div>
        <Link to="/" className="font-bold text-sm">
          Where in the world?
        </Link>
      </div>
      <div className="flex gap-2 items-center text-sm cursor-pointer">
        <Moon /> <h2>Dark mode</h2>
      </div>
    </div>
  );
}
export default Navbar;
