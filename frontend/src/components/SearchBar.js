import "./SearchBar.css";
import SearchIcon from "./Icons/SearchIcon";
import ClearIcon from "./Icons/ClearIcon";
import {useState } from "react"; 

function SearchBar() {
  const [field, setField] = useState('title'); 
  
  const handleChangeEvent = (event) => {
    const val = event.target
  }
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
          <button className={"chip " + (field === 'title' ? 'activeChip' : '')} onClick={() => setField('title')}> Title </button>
          <button className={"chip " + (field === 'artist' ? 'activeChip' : '')} onClick={() => setField('artist')}> Artist </button>
          <button className={"chip " + (field === 'album' ? 'activeChip' : '')} onClick={() => setField('album')}> Album </button>
          <button className={"chip " + (field === 'genre' ? 'activeChip' : '')} onClick={() => setField('genre')}> Genre </button>
          <button className={"chip " + (field === 'year' ? 'activeChip' : '')} onClick={() => setField('year')}> Year </button>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
