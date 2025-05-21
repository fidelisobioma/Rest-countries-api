import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else html.classList.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between items-center  py-6 px-6 md:px-12 shadow dark:bg-darkbg900 bg-lightbg max-w-[1400px] my-0 mx-auto">
      <div>
        <Link
          to="/"
          className="font-bold text-smtext-darktext dark:text-darktext text-lighttext"
        >
          Where in the world?
        </Link>
      </div>
      <div
        onClick={() => {
          toggleDarkMode();
        }}
        className="flex gap-2 items-center text-sm cursor-pointer"
      >
        {isDarkMode ? (
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
  );
}
export default Navbar;
