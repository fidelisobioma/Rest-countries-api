import { Link } from "react-router-dom";
import { Moon } from "lucide-react";
function Navbar() {
  return (
    <div className="flex justify-between items-center  py-6 px-12 shadow dark:bg-darkbg900 bg-lightbg max-w-[1400px] my-0 mx-auto">
      <div>
        <Link
          to="/"
          className="font-bold text-smtext-darktext dark:text-darktext text-lighttext"
        >
          Where in the world?
        </Link>
      </div>
      <div className="flex gap-2 items-center text-sm cursor-pointer">
        <Moon className="dark:text-darktext text-lighttext" />
        <h2 className="dark:text-darktext text-lighttext">Dark mode</h2>
      </div>
    </div>
  );
}
export default Navbar;
