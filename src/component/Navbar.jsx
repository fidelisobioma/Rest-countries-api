import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center  py-6 px-12 shadow dark:bg-darkbg900 bg-lightbg max-w-[1400px] my-0 mx-auto">
      <div>
        <Link
          to="/"
          className="font-bold text-sm text-lighttext dark:text-darktext"
        >
          Where in the world?
        </Link>
      </div>
      <div
        onClick={toggleDarkMode}
        className="flex gap-2 items-center text-sm cursor-pointer"
      >
        {darkMode ? (
          <div className="flex items-center gap-2">
            <Sun className="dark:text-darktext text-lighttext" />
            <span className="dark:text-darktext text-lighttext">
              Light mode
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Moon className="dark:text-darktext text-lighttext" />
            <span className="dark:text-darktext text-lighttext">Dark mode</span>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}
export default Navbar;
