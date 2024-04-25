import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  const { dispatch } = useAuthContext();

  // const [searchMovies, setSearchMovies] = useState("");
  function handleThemeIcon() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className="flex py-3 px-6 items-center justify-between">
      <nav>
        <ul className="flex gap-5  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <div className="flex  justify-end bg-primary p-4 border-solid ">
        <div className="flex items-center gap-5">
          <button
            onClick={handleThemeIcon}
            className="w-10 h-10 bg-secondary rounded-2xl"
          >
            {isDarkMode ? "🌞" : "🌛"}
          </button>
          <button
            className="bg-primary rounded-md border border-gray-500 text-secondary px-3 py-2"
            onClick={() => {
              dispatch({ type: "user/logout" });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
