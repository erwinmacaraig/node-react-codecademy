
import './SearchBar.css';

function SearchBar(){
    return (
        <div className='searchbar-container'>
            <form>                
                <input  className='search-bar'/>
                <button>Search</button>                
            </form>
            <div className='filter-btns'>
                    <button className='filter-btn'>Title</button>
                    <button className='filter-btn'>Artist</button>
                    <button className='filter-btn'>Album</button>
                    <button className='filter-btn'>Genre</button>
                    <button className='filter-btn'>Year</button>
                </div>            
        </div>
    );
}

export default SearchBar;