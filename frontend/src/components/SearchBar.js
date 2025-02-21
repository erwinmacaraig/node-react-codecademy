import "./SearchBar.css";
import SearchIcon from "./Icons/SearchIcon";
import ClearIcon from "./Icons/ClearIcon";

function SearchBar() {
  return (
    <header className="header">
      <div className="searchWrapper">
        <div className="inputWrapper">
          <span className="searchIcon">
            <SearchIcon />
          </span>
          <span className="clearIcon">
            <ClearIcon />
          </span>
          <input className="input" />
        </div>
        <button className="searchButton">Search</button>
        <div className="fieldsWrapper">
          <button className="chip">Title</button>
          <button className="chip">Artist</button>
          <button className="chip">Album</button>
          <button className="chip">Genre</button>
          <button className="chip">Year</button>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
